// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton, Input, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
// Components
import Accordian_Children from '../../../components/Accordian_Children';
import AutoComplete_Object from '../../../components/AutoComplete_Object';
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import Image_List from '../../../components/Image_List';
import DataPicker_Day from '../../../components/DatePicker_Day';
import Select_Object from '../../../components/Select_Object';
import Table_Header_CustomerManagement from '../../../data/Table_Header_CustomerManagement';
import Table_Object from '../../../components/Table_Object';
import Message_String from '../../../components/Message_String';
import CustomerType from '../../../data/CustomerType';
import Block_Button from '../../../components/Block_Button';
import customerApi from '../../../apis/customerApi';
import Alert_String from '../../../components/Alert_String';
// APIs
import countryApi from '../../../apis/countryApi';
import docTypeApi from '../../../apis/docTypeApi';
import mainIndustryApi from '../../../apis/mainIndustryApi';
import industryApi from '../../../apis/industryApi';
import mainSectorApi from '../../../apis/mainSectorApi';
import subSectorApi from '../../../apis/subSectorApi';
import cityApi from '../../../apis/cityApi';
import accountOfficerApi from '../../../apis/accountOfficerApi';
import axios from 'axios';
import { Box } from '@mui/system';
import Block_Dialog from '../../../components/Block_Dialog';

function handleSubmit() {
    const form = document.getElementById("idform");
   document.getElementById("idform").addEventListener("submit", (e) => {
       e.preventDefault();
       const formData = new FormData(form);
       axios.post("https://api-newcore.vietvictory.vn/signature/upload", formData, {
           headers: {
           "Content-Type": "multipart/form-data",
           },
       })
       .then((res) => {
           console.log("res1");
           console.log("xxxxxxxxxxxxxx")
           console.log(res);

       })
       .catch((err) => {
           console.log("err1");
           console.log(err);
       });
   },   {once : true});
}

// --------------- MUST HAVE -------------
// Data
let arrError = []
// ----------------------------------------
function Signature_Management() {
// Callback childs -> parent
const [message, setMessage] = useState('panel1')
const callbackFunction = (childData) => {setMessage(childData)}
// Show notification
  // Notification of Accordian 1
const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
// Notification of Accordian 2
const [isNotification_Success_02, setIsNotification_Success_02] = useState(false)
const [isNotification_Failed_02, setIsNotification_Failed_02] = useState(false)
const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)
// Notification of Accordian 3
const [isNotification_Success_03, setIsNotification_Success_03] = useState(false)
const [isNotification_Failed_03, setIsNotification_Failed_03] = useState(false)
const [isNotification_Message_03, setIsNotification_Message_03] = useState(false)

// Show image list
const [isImageList, setIsShowImageList] = useState(false)
    return ( 
        <div>
            {/* 2.1 Capture signature  */}
            <Accordian_Children title='2.1 Capture' label='label1' parentCallback={callbackFunction} message={message}>  
                    <Block_Children>
                    <form method="post" onSubmit={handleSubmit} encType="multipart/form-data" id="idform">
                            <div class="form-group">
                                {/* Input Customer ID */}
                                <Block_Children>
                                    <Box m={2}>
                                        <Input type="text" name="customerID"placeholder="Customer ID"/>
                                    </Box>
                                </Block_Children>
                                {/* Input Description */}
                                <Block_Children>
                                    <Box m={2}>
                                        <Input type="text" name="description"placeholder="Description"/>
                                    </Box>
                                </Block_Children>
                                {/* Input image */}
                                <Block_Children>
                                    <Box m={2}>
                                        <OutlinedInput accept="image/*" type="file" name="image"/> 
                                    </Box>
                                </Block_Children>
                            {/* Button for uploading */}
                            <Block_Button>
                                <Button 
                                    endIcon={<FileUploadIcon />}
                                    variant="contained"
                                    type="submit" 
                                    name="upload" 
                                    onClick={() => {
                                        const form = document.getElementById("idform");
                                        document.getElementById("idform").addEventListener("submit", (e) => {
                                            e.preventDefault();
                                            const formData = new FormData(form);
                                            axios.post("https://api-newcore.vietvictory.vn/signature/upload", formData, {
                                                headers: {
                                                "Content-Type": "multipart/form-data",
                                                },
                                            })
                                            .then((res) => {
                                                console.log("res1");
                                                console.log("xxxxxxxxxxxxxx")
                                                console.log(res);
                                                if (!res.data.data) { 
                                                    arrError = []
                                                    arrError.push('Invalid Customer ID')
                                                    setIsNotification_Message_01(true); 
                                                    setTimeout(() => {setIsNotification_Message_01(false)}, 3000);
                                                } 
                                                else {
                                                    form.elements["customerID"].value = '' 
                                                    form.elements["image"].value = '' 
                                                    setIsNotification_Success_01(true); 
                                                    setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                                                }
                                            })
                                            .catch((err) => {
                                                console.log("err1");
                                                console.log(err);
                                                arrError = []
                                                arrError.push('Provide image')
                                                setIsNotification_Message_01(true); 
                                                setTimeout(() => {setIsNotification_Message_01(false)}, 3000);
                                            });
                                        },   {once : true});
                                    }}
                                >
                                        Upload
                                </Button>
                                {isNotification_Success_01 && <Message_String type='success' text='Add Signature Successfully'/>}                  
                                {isNotification_Failed_01 && <Message_String type='error' text='Add Signature Failed'/>}  
                                {isNotification_Message_01 && <Alert_String arrError={arrError}/>}    
                            </Block_Button>
                            </div>
                        </form>
                    </Block_Children>
            </Accordian_Children>
            {/* 2.2 Enquiry signature  */}
            <Accordian_Children title='2.2 Enquiry' label='label2' parentCallback={callbackFunction} message={message}>  
                    <Block_Children>
                        <Block_Dialog>
                            <TextField_Value id={'txt_DocID_Enquiry'} label='Doc ID' length='16' />
                            <TextField_Value id={'txt_GBFullName_Enquiry'} label='GB Full Name' length='30' disabled={true} value='_'/>
                            <TextField_Value id={'txt_CustomerID_Enquiry'} label='Customer ID' length='15' disabled={true} value='_'/>
                        </Block_Dialog>
                    </Block_Children>
                    <Block_Button>
                        <Button
                            variant="contained"
                            endIcon={<SearchIcon />}
                            onClick={() => {
                                const fetchDataGetAll = async () => { 
                                    let valueId = document.getElementById('txt_DocID_Enquiry').value
                                    await axios.get(`https://api-newcore.vietvictory.vn/signature/get_by_customer/${valueId}`, {
                                    }).then(response => {
                                        
                                        if (response.data.data.signature[0].URL != undefined ) {
                                            // setValueImage(response.data.data.signature[0].URL)
                                            object = []
                                            response.data.data.signature.map((data, index) => {
                                                object.push({
                                                    id: index,
                                                    Name: data.URL,
                                                })
                                            })
                                            setIsShowImageList(true)
                                            document.getElementById('txt_GBFullName_Enquiry').value = response.data.data.customer.GB_FullName.toString()
                                            document.getElementById('txt_CustomerID_Enquiry').value = response.data.data.customer.id.toString()
                                            setIsNotification_Success_02(true); 
                                            setTimeout(() => {setIsNotification_Success_02(false)}, 5000);
                                        }
                                         
                                    })
                                    .catch(err=>{
                                        console.log("err")
                                        console.log(err)
                                        arrError = []
                                        document.getElementById('txt_DocID_Enquiry').value = ""
                                        arrError.push("Customer has no signature")
                                        setIsNotification_Message_02(true); 
                                        setTimeout(() => {setIsNotification_Message_02(false)}, 3000);
                                        // setButtonPopupNoti(true)
                                    })
                                    
                                };
                                fetchDataGetAll();
                            }}
                        >
                            Search
                        </Button>
                    </Block_Button>
                    
                    <Block_Children>
                        <Block_Dialog>
                            {isImageList && <Image_List object={object}/>}
                        </Block_Dialog>
                    </Block_Children>
                    {isNotification_Success_02 && <Message_String type='success' text='Show Signature Successfully'/>}                  
                    {isNotification_Failed_02 && <Message_String type='error' text='Show Signature Failed'/>}  
                    {isNotification_Message_02 && <Alert_String arrError={arrError}/>}  
            </Accordian_Children>
            {/* 2.3 Amend signature  */}
            <Accordian_Children title='2.3 Amend' label='label3' parentCallback={callbackFunction} message={message}> 
                    <Block_Children>
                        <Block_Dialog>
                            <form method="post" action="https://api-newcore.vietvictory.vn/signature/upload" encType="multipart/form-data" id="idFormAmend">
                                <div class="form-group">
                                    <Block_Dialog>
                                        <Input type="text" name="docID" placeholder="Doc ID"/>
                                    </Block_Dialog>
                                    <Block_Dialog>
                                    <TextField_Value id={'txt_OrderOfPicture_Amend'} label='Order Of Picture' length='25' />
                                    <TextField_Value id={'txt_GBFullName_Amend'} label='GB Full Name' length='30' disabled={true} value='_'/>
                                    <TextField_Value id={'txt_CustomerID_Amend'} label='Customer ID' length='15' disabled={true} value='_'/>
                                    </Block_Dialog>
                                    <Block_Dialog>
                                        <OutlinedInput type="file" name="image" /> 
                                    </Block_Dialog>
                                    <Block_Dialog>
                                        <Button 
                                            endIcon={<ChangeCircleIcon />}
                                            variant="contained"
                                            // type="submit 
                                            // name="upload" 
                                            onClick={() => {
                                                // const form = document.getElementById("idform").elements["docID"].value
                                                const docYeah = document.getElementById("idFormAmend").elements["docID"].value
                                                console.log("docYeah")
                                                console.log(docYeah)
                                                const fetchDataGetAll = async () => { 
                                                    let valueId = docYeah
                                                    await axios.get(`https://api-newcore.vietvictory.vn/signature/get_by_customer/${valueId}`, {
                                                    }).then(response => {
                                                        if (response.data.data.signature[document.getElementById('txt_OrderOfPicture_Amend').value-1].URL != undefined ) {
                                                            // setValueImage(response.data.data.signature[0].URL)
                                                            let idImage = response.data.data.signature[document.getElementById('txt_OrderOfPicture_Amend').value-1].signature.id
                                                            const form = document.getElementById("idFormAmend")
                                                            const formData = new FormData(form);
                                                            axios.post(`https://api-newcore.vietvictory.vn/signature/change_image/${idImage}`, formData, {
                                                                headers: {
                                                                "Content-Type": "multipart/form-data",
                                                                },
                                                            })
                                                            .then((res) => {
                                                                if (!res.data.data) {
                                                                    arrError = []
                                                                    arrError.push("Invalid Doc ID")
                                                                    setIsNotification_Message_03(true); 
                                                                    setTimeout(() => {setIsNotification_Message_03(false)}, 3000);
                                                                } 
                                                                else {
                                                                    // setButtonPopup(true)
                                                                    // form.elements["docID"].value = '' 
                                                                    document.getElementById('txt_GBFullName_Amend').value = response.data.data.customer.GB_FullName;
                                                                    document.getElementById('txt_CustomerID_Amend').value = response.data.data.customer.id;
                                                                    form.elements["image"].value = '' 
                                                                    
                                                                    setIsNotification_Success_03(true); 
                                                                    setTimeout(() => {setIsNotification_Success_03(false)}, 5000);
                                                                }
                                                                
                                                            }) 
                                                            .catch((err) => {
                                                                // if ()
                                                                
                                                                arrError = []
                                                                arrError.push("Provide image")
                                                                setIsNotification_Message_03(true); 
                                                                setTimeout(() => {setIsNotification_Message_03(false)}, 3000);
                                                            })                                                
                                                            // document.getElementById('txtCustomerName').value = response.data.data.customer.GB_FullName.toString()
                                                        } else {
                                                            arrError = []
                                                            arrError.push("The order of the picture could not be found")
                                                            setIsNotification_Message_03(true); 
                                                            setTimeout(() => {setIsNotification_Message_03(false)}, 4000);
                                                        }
                                                        
                                                    })
                                                    .catch(err=>{
                                                        console.log("err")
                                                        console.log(err)
                                                        arrError = []
                                                        arrError.push("May be:")
                                                        arrError.push("- Customer has no signature")
                                                        arrError.push("- The number of picture could not be found")
                                                        arrError.push("- Invalid Doc ID")
                                                        setIsNotification_Message_03(true); 
                                                        setTimeout(() => {setIsNotification_Message_03(false)}, 5000);
                                                    })
                                                    
                                                };
                                                fetchDataGetAll();
                                            }}
                                            >
                                                Change
                                            </Button>
                                    </Block_Dialog>
                                    {isNotification_Success_03 && <Message_String type='success' text='Change Signature Successfully'/>}                  
                                    {isNotification_Failed_03 && <Message_String type='error' text='Change Signature Failed'/>}  
                                    {isNotification_Message_03 && <Alert_String arrError={arrError}/>}    
                                </div>
                            </form>
                        </Block_Dialog>
                    </Block_Children>
            </Accordian_Children>


            {/* 2.4 See signature  */}
            {/* <Accordian_Children title='2.3 Amend' label='label3' parentCallback={callbackFunction} message={message}>  
            </Accordian_Children> */}
        </div>
     );
}

export default Signature_Management;

let object = []