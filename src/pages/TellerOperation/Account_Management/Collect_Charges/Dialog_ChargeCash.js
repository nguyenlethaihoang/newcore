import * as React from 'react';
// API
import chequeApi from "../../../../apis/chequeApi";
// COMPONENT MATERIAL
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import InfoIcon from '@mui/icons-material/Info';

// COMPONENT 
import Block_Button from '../../../../components/Block_Button';
// import ChargeCollection_Component from './ChargeCollection_Component';
import ChargeCollectionCash_Component from './ChargeCollection_Cash_Component';
import Status_Data from '../../../../data/Status_Data';
import Alert_String from '../../../../components/Alert_String';
import Message_String from '../../../../components/Message_String';
import ChargeCollectionApi from '../../../../apis/chargeCollectionApi';
import chargeCollectionType from '../../../../data/chargeCollectionType';
import customerApi from '../../../../apis/customerApi';

// -------------------TEMP DATA ----------------------------
let arrError = []
let apiErrorMessage = 'Validate Error'
// -------------------------------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// --------- CONVERT -------------------
// rersolve from text to id with Name
function resolveNameID(object, text) {
    let temp = null
    object.map((data, index) => {
            if (data.Name == text)
            {
            temp = data.id.toString()
            
            }
    })
    return temp
}

//--------------------------- MAIN -----------------------------
export default function Dialog_ChargeCash({object}) {
    const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
    const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
    const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
    // Manage Disable
    const [isDisabledDialog, setIsDisabledDialog] = useState(true)
    // Manage Dialog
    const [open, setOpen] = React.useState(false);
    // Open Dialog
    const handleClickOpen = () => {
        setIsDisabledDialog(true)
        setOpen(true);
    };
    // Close Dialog
    const handleClose = () => {
        setOpen(false);
    };
    const [customer, setCustomer] = useState([]);
    useEffect(() => 
    {
        const fetchCustomer = async () => {
        const response = await customerApi.get(object.Account);
        setCustomer(response.data) 
        }
        fetchCustomer();
    }, [])

    console.log('charge')
    console.log(object)

    return (
        <div>
            {/* ICON */}
            <IconButton 
                color="primary"
                aria-label="detail"
                onClick={handleClickOpen}
            >
                <InfoIcon />
            </IconButton>

            {/* DIALOG */}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                PaperProps={{
                    style: {
                    //   backgroundColor: 'transparent',
                    boxShadow: 'none',
                    },
                }}
            >

                {/* APPBAR */}
                <AppBar sx={{ position: 'relative' , backgroundColor: '#d71921'}}>
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        >
                        <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Charge Collection - RefID: {object.CC?.RefID ?? object.CC?.id}
                        </Typography>
                            <Button autoFocus color="inherit" 
                                sx={{
                                    display: '',
                                    ...(object.CC?.Status != 1 && {
                                        display: 'none'
                                    }),
                                    }
                                } 
                                onClick={async () => {
                                    let params = {}
                                    params.Status = resolveNameID(Status_Data, document.getElementById('slt_Status_ChargeCollectionCash_Popup').innerText)
                                    const res = await ChargeCollectionApi.validate(params, object.CC?.id)
                                    if(res == 'success') {
                                        setIsNotification_Success_01(true); 
                                        setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                                        setTimeout(() => {handleClose();}, 3000);
                                    } else {
                                        apiErrorMessage = res
                                        setIsNotification_Failed_01(true)
                                        setTimeout(() => {setIsNotification_Failed_01(false)}, 5000); 
                                    }
                                }
                            }
                            >
                                Validate
                            </Button>
                        <Button autoFocus color="inherit"
                            onClick={async() => {
                            

                            }}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Block_Button>
                    <Button
                        variant="contained"
                        endIcon={<EditIcon />}
                        onClick={() => {
                            setIsDisabledDialog(false)
                        }}
                        disabled={true}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<PrintIcon />}
                        onClick={() => {
                        }}
                    >
                        Print
                    </Button>
                </Block_Button>
                {isDisabledDialog && <ChargeCollectionCash_Component suffixID='ChargeCollectionCash_Popup' forceDisable={true} object={object}/>}
                {!isDisabledDialog && <ChargeCollectionCash_Component suffixID='ChargeCollectionCash_Popup' object={object}/>}

                {isNotification_Success_01 && <Message_String type='success' text='Validate Successfully'/>}                  
                {isNotification_Failed_01 && <Message_String type='error' text={apiErrorMessage}/>}  
                {isNotification_Message_01 && <Alert_String arrError={arrError}/>} 
            </Dialog>
        </div>
    )
}