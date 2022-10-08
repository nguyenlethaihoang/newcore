// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Accordian_Children from '../../../components/Accordian_Children';
import AutoComplete_Object from '../../../components/AutoComplete_Object';
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import Image_List from '../../../components/Image_List';
import DataPicker_Day from '../../../components/DatePicker_Day';
import Select_Object from '../../../components/Select_Object';
import Table_Header_CustomerManagement from '../../../data/Table_Header_CustomerManagement';
import OpenAccount_Components from './OpenAccount_Components';
import EnquiryAccount_Components from './EnquiryAccount_Components';
import Block_Button from '../../../components/Block_Button';
import Category_OpenAccount from '../../../data/Category_OpenAccount';
import Alert_String from '../../../components/Alert_String';
import Message_String from '../../../components/Message_String';
// APIs
// Fetch API by Custom Hook

import useFetchAccountOfficer from '../../../customHooks/useFetchAccountOfficer';
import useFetchChargeCode from '../../../customHooks/useFetchChargeCode';
import useFetchCurrency from '../../../customHooks/useFetchCurrency';
import useFetchCustomer from '../../../customHooks/useFetchCustomer';
import useFetchProductLine from '../../../customHooks/useFetchProductLine';
import useFetchRelationCode from '../../../customHooks/useFetchRelationCode';
import accountOfficerApi from '../../../apis/accountOfficerApi';
import debitAccountApi from '../../../apis/debitAccountApi';
import { CategoryOutlined } from '@mui/icons-material';
// --------------- MUST HAVE -------------
// Data
let arrError = []
// ----------------------------------------
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
// rersolve from text to id with Name Customer
function resolveStrtoID(text) {
    let subArr = text.toString().split(" - ");
    let subStr = subArr[0]
    if(subStr){
        return subStr
    }
    return null
}


// rersolve from text to id with Code
function resolveCodeID(object, text) {
    let temp = null
    object.map((data, index) => {
            if (data.Code == text)
            {
            temp = data.id.toString()
            
            }
    })
    return temp
}
// Clear text after add successfully function
function clearTextFields() {
    document.getElementById('txt_FirstName_OpenIndividual').value = document.getElementById('txt_LastName_OpenIndividual').value = document.getElementById('txt_MiddleName_OpenIndividual').value = document.getElementById('txt_GBStreet_OpenIndividual').value = document.getElementById('txt_GBTownDist_OpenIndividual').value = document.getElementById('txt_MobilePhone_OpenIndividual').value = document.getElementById('slt_CityProvince_OpenIndividual').innerText = document.getElementById('slt_GBCountry_OpenIndividual').innerText = document.getElementById('slt_Nationality_OpenIndividual').innerText = document.getElementById('slt_Residence_OpenIndividual').innerText = document.getElementById('slt_DocType_OpenIndividual').innerText =  document.getElementById('txt_DocID_OpenIndividual').value =  document.getElementById('txt_EmailAddress_OpenIndividual').value  = document.getElementById('slt_MainIndustry_OpenIndividual').innerText = document.getElementById('slt_Industry_OpenIndividual').innerText = document.getElementById('slt_AccountOfficer_OpenIndividual').innerText = ''
    document.getElementById('txt_GBShortName_OpenIndividual').value = document.getElementById('txt_GBFullName_OpenIndividual').value = '_'
    document.getElementById('txt_GBShortName_OpenCorporate').value = document.getElementById('txt_GBFullName_OpenCorporate').value = document.getElementById('dp_IncorpDate_OpenCorporate').value = document.getElementById('txt_GBStreet_OpenCorporate').value = document.getElementById('txt_GBTownDist_OpenCorporate').value = document.getElementById('slt_CityProvince_OpenCorporate').innerText = document.getElementById('slt_GBCountry_OpenCorporate').innerText = document.getElementById('slt_Nationality_OpenCorporate').innerText = document.getElementById('slt_Residence_OpenCorporate').innerText = document.getElementById('slt_DocType_OpenCorporate').innerText = document.getElementById('txt_DocID_OpenCorporate').value = document.getElementById('dp_DocIssuePlace_OpenCorporate').value = document.getElementById('dp_DocIssueDate_OpenCorporate').value = document.getElementById('dp_DocExpiryDate_OpenCorporate').value = document.getElementById('txt_ContactPerson_OpenCorporate').value = document.getElementById('txt_Position_OpenCorporate').value = document.getElementById('txt_Telephone_OpenCorporate').value = document.getElementById('txt_EmailAddress_OpenCorporate').value = document.getElementById('txt_Remarks_OpenCorporate').value = document.getElementById('slt_MainSector_OpenCorporate').innerText = document.getElementById('slt_SubSector_OpenCorporate').innerText = document.getElementById('slt_MainIndustry_OpenCorporate').innerText = document.getElementById('slt_Industry_OpenCorporate').innerText = document.getElementById('slt_AccountOfficer_OpenCorporate').innerText = ''
}

function Account_Management() {
// Callback childs -> parent
const [message, setMessage] = useState('panel1')
const callbackFunction = (childData) => {setMessage(childData)}
// Callback childs -> parent
const [subMessage, setSubMessage] = useState('subpanel1')
const callbackFunctionSub = (childData) => {setSubMessage(childData)}
  // Show notification
  // Notification of Accordian 1
  const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
  const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
  const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
  // Notification of Accordian 2
  const [isNotification_Success_02, setIsNotification_Success_02] = useState(false)
  const [isNotification_Failed_02, setIsNotification_Failed_02] = useState(false)
  const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)
  // Fetch Data 
  const accountOfficerList = useFetchAccountOfficer();
  const currencyList = useFetchCurrency();
  const customerList = useFetchCustomer();
  const productLineList = useFetchProductLine();
  const chargeCodeList = useFetchChargeCode();
  const relationCodeList = useFetchRelationCode();

    return ( 
        <div>
            {/* 3.1 Current & Non-Term Saving Account  */}
            <Accordian_Children title='3.1 Current & Non-Term Saving Account' label='label1' parentCallback={callbackFunction} message={message}>  
                <Accordian_Children title='3.1.1 Open Account' label='sublabel1' parentCallback={callbackFunctionSub} message={subMessage}>  
                    <OpenAccount_Components suffixID='OpenAccount'/>
                    <Block_Button>
                        <Button
                            variant='contained'
                            endIcon={<SaveIcon />}
                            onClick={async () => {
                                let params = {}
                                params.CustomerID = resolveStrtoID(document.getElementById('aut_CustomerID_OpenAccount').value);
                                params.Category = resolveNameID(Category_OpenAccount, document.getElementById('slt_Category_OpenAccount').innerText);
                                params.ProductLine = resolveNameID(productLineList, document.getElementById('slt_ProductLine_OpenAccount').innerText);
                                params.Currency = resolveNameID(currencyList, document.getElementById('slt_Currency_OpenAccount').innerText);
                                params.AccountTitle = document.getElementById('txt_AccountTitle_OpenAccount').value
                                params.ShortTitle = document.getElementById('txt_ShortTitle_OpenAccount').value
                                params.AccountOfficer = resolveNameID(accountOfficerList, document.getElementById('slt_AccountOfficer_OpenAccount').innerText);
                                params.ChargeCode =  resolveNameID(chargeCodeList, document.getElementById('slt_ChargeCode_OpenAccount').innerText);
                                params.JoinHolder =  resolveStrtoID(document.getElementById('aut_IDJoinHolder_OpenAccount').value);
                                params.RelationCode = resolveStrtoID(document.getElementById('aut_RelationCode_OpenAccount').value);

                                params.JoinNotes = document.getElementById('txt_Join Notes_OpenAccount').value
                                arrError = []
                                if(!params.CustomerID){
                                    arrError.push('Customer ID is required')
                                }
                                if(!params.Category){
                                    arrError.push('Category is required')
                                }
                                if(!params.Currency){
                                    arrError.push('Currency is required')
                                }
                                if(!params.JoinHolder){
                                    arrError.push('Join Holder is required')
                                }
                                if(!params.RelationCode){
                                    arrError.push('Relation Code is required')
                                }
                                if (
                                    arrError.length == 0
                                ) {
                                
                                    const res = await debitAccountApi.open(params);
                                    if(res != 'fail') {
                                            setIsNotification_Success_01(true); 
                                            setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                                            clearTextFields()
                                    } else {
                                            setIsNotification_Failed_01(true)
                                            setTimeout(() => {setIsNotification_Failed_01(false)}, 5000); 
                                    }

                                } else {
                                        setIsNotification_Message_01(true)
                                        setTimeout(() => {setIsNotification_Message_01(false)}, 5000);
                                }
                            }}
                        >
                            Save
                        </Button>
                        {isNotification_Success_01 && <Message_String type='success' text='Add Individual Customer Successfully'/>}                  
                        {isNotification_Failed_01 && <Message_String type='error' text='Add Individual Customer Failed'/>}  
                        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}   
                    </Block_Button>
                </Accordian_Children>
                <Accordian_Children title='3.1.2 Enquiry Account' label='sublabel2' parentCallback={callbackFunctionSub} message={subMessage}>  
                    <EnquiryAccount_Components suffixID='EnquiryAccount' />
                </Accordian_Children>
            </Accordian_Children>
            {/* 3.2 Saving Account  */}
            <Accordian_Children title='3.2 Saving Account' label='label2' parentCallback={callbackFunction} message={message}>  
            </Accordian_Children>
        </div>
     );
}

export default Account_Management;