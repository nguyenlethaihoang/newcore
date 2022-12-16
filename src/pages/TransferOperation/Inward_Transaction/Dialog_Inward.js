// Libraries
import * as React from 'react';
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
// Components
import Block_Button from '../../../components/Block_Button';
import InwardTransactionComponent from './Inward_Transaction_Component'
import Alert_String from '../../../components/Alert_String';
import Message_String from '../../../components/Message_String';
// APIs
import InwardApi from '../../../apis/inwardApi'

// Data
import Status_Data from '../../../data/Status_Data';
import inwardApi from '../../../apis/inwardApi';

// -------------------TEMP DATA ----------------------------
let arrError = []
let apiErrorMessage = 'Validate Error'

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

// ----- MAIN -----
export default function Dialog_Inward({InwardID}) {

  const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
  const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
  const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)

  // Manage Disable
  const [isDisabledDialog, setIsDisabledDialog] = useState(true)
  const handleClick = () => {
      setIsDisabledDialog(true);
  };
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
  // Fetch Inward Data
  const [inward, setInward] = useState([])
    useEffect(() => 
    {
        const fetchInward = async () => {
          const response = await InwardApi.getByID(InwardID);
          setInward(response.data) 
        }
        fetchInward();
    }, [])

  if(inward){
    return (
      <div>
        {/* <Button 
              variant="outlined" 
              
        >
          Open
        </Button> */}
        <IconButton 
            color="primary"
            aria-label="detail"
            onClick={handleClickOpen}
        >
            <InfoIcon />
        </IconButton>
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
                  Inward Transaction - RefID: {inward.RefID}
              </Typography>
              <Button 
                sx={{ 
                  // border: '1px dashed grey' ,
                  display: '',
                  ...( (inward.Status != 1)  && {
                      display: 'none'
                  })
                }}
                autoFocus color="inherit" onClick={async () => {
                  let params = {}
                  params.Status = resolveNameID(Status_Data, document.getElementById('slt_Status_Inward_Popup').innerText)
                  const res = await inwardApi.validate(params, InwardID)
                  if(res == 'success') {
                      setIsNotification_Success_01(true); 
                      setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                      setTimeout(() => {handleClose();}, 3000);
                  } else {
                      apiErrorMessage = res
                      setIsNotification_Failed_01(true)
                      setTimeout(() => {setIsNotification_Failed_01(false)}, 5000); 
                  }

              }}>
                Validate
              </Button>
              <Button autoFocus color="inherit" onClick={handleClose}>
                Save
              </Button>
            </Toolbar>
          </AppBar>
          <Block_Button>
              <Button
                  variant="contained"
                  disabled
                  endIcon={<EditIcon />}
                  onClick={() => {
                      setIsDisabledDialog(false)
                  }}
              >
                  Edit
              </Button>
              <Button
                  disabled
                  variant="contained"
                  endIcon={<PrintIcon />}
                  onClick={() => {
                  }}
              >
                  Print
              </Button>
          </Block_Button>
          {isDisabledDialog && <InwardTransactionComponent suffixID='Inward_Popup' forceDisable={true} object={inward}/>}
        
          {isNotification_Success_01 && <Message_String type='success' text='Validate Successfully'/>}                  
          {isNotification_Failed_01 && <Message_String type='error' text={apiErrorMessage}/>}  
          {isNotification_Message_01 && <Alert_String arrError={arrError}/>} 
        </Dialog>
      </div>
    )
  }else{
    return(<div></div>)
  }
  ;
}