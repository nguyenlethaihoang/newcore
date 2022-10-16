// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
// Components
import Block_Children from '../../../../components/Block_Children'; 
import TextField_Value from '../../../../components/TextField_Value'; 
import Select_Object from '../../../../components/Select_Object'; 
import AutoComplete_Object from '../../../../components/AutoComplete_Object'; 
import Category_OpenAccount from '../../../../data/Category_OpenAccount';
import Block_Button from '../../../../components/Block_Button';
import DataPicker_Day from '../../../../components/DatePicker_Day';
import Block_Info from '../../../../components/Block_Info';
import subCurrency_Data from '../../../../data/subCurrency_Data';
// Fetch API by Custom Hook
import useFetchCurrency from '../../../../customHooks/useFetchCurrency';
import Status_Data from '../../../../data/Status_Data';
import Cheque_Type from '../../../../data/Cheque_Type';
import Close_Online from '../../../../data/Close_Online';
import chequeApi from '../../../../apis/chequeApi';
import AccountType_CashDeposits from '../../../../data/AccountType_CashDeposits'
import customerApi from '../../../../apis/customerApi'
import useFetchCategoryPL from '../../../../customHooks/useFetchCategoryPL'

let isValidate = false
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
function getSubString(text){
    let subArr = text.split(' - ')
    return subArr[1]
}


// TEMP CURRENCY
const tempCurrency_Data = [
    {id: 1,Name: 'EUR',},
    {id: 2,Name: 'USD',},
    {id: 3,Name: 'GBP',},
    {id: 4,Name: 'JPY',},
    {id: 5,Name: 'VND',},
]


// ----- MAIN -----
function ChargeCollection_Component({suffixID, forceDisable, object}) {
    // Callback childs -> parent
    const [message, setMessage] = useState('panel1')
    const callbackFunction = (childData) => {setMessage(childData)}
    // Fetch Data 
    const currencyList = useFetchCurrency();
    // SET STATE
    const [customerList, setCustomerList] = useState([])
    const [colorState, setColorState] = useState(0)
    const [isFound, setIsFound] = useState(false)

    // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    const [amtLCYDisabled, setAmtLCYDisabled] = useState(false)
    const [amtFCYDisabled, setAmtFCYDisabled] = useState(false)
    const handleClick = () => {
    setIsDisabled(true);
    };
        
    //FETCH API
    let categoryPLList = useFetchCategoryPL();

    let subCustomer = {}
    let isValidate = false
    let isPopup = false
    // GET SUB OBJECT
    if(!object){
    object = ""
    }else{
        subCustomer = object.DEBITACCOUNT
        isValidate = true
        isPopup = true
    }
      return ( 
        <div
            
        >
          <Box m={2}>
            <div
                onClick={
                    () => {
                    
                        
                    }
                }
            >
                {/* Block 1 - 3.1.1 Charges Validation*/}
                <Box
                    sx={{ 
                        // border: '1px dashed grey' ,
                        display: '',
                        ...( !isValidate  && {
                            display: 'none'
                        })
                    }}
                >
                <Block_Children header2='----------------Validation----------------' 
                >
                    <Select_Object id={'slt_Status_'+suffixID} label='Status'required={true} object={Status_Data} length='35' disabled={object.Status != 1? true:false} dataID={object.Status}/>
                </Block_Children>
                </Box>

                {/* Block 2  MAIN INFORMATION*/}
                {/* Block 2.1 */}
                
                <Block_Children>
                    <div
                        onChange={() => {
                            if(!isPopup){
                                const fetchCustomerList = async () => {
                                    const response = await customerApi.getAll()
                                    setCustomerList(response.data.customer) 
                                }
                                fetchCustomerList();
                            }
                        }}>
                        <TextField_Value 
                            id={'txt_CustomerID_'+suffixID} label='Customer ID' length='25' disabled={isDisabled}  required={true}/>
                    </div>
                    <div
                        style={{display: 'flex',
                        alignItems: 'center',
                        paddingTop: '20px',
                        paddingLeft: '20px',
                        flexWrap: 'wrap',
                        columnGap: '20px'}}
                    >
                        <Button
                        variant='contained'
                        disabled={isDisabled}
                        onClick={() => {
                            if(!isPopup){
                                let data = []
                                let temp 
                                // Fetch again
                            
                                customerList.map((value, index) => {
                                    if (value.customer.id == document.getElementById('txt_CustomerID_'+suffixID).value){
                                        temp = value;     
                                    }
                                })
                                // Thanh cong
                                if (temp != null) {
                                    setColorState(1)
                                    setIsFound(true)
                                    document.getElementById('txt_Address_' + suffixID).value = temp.customer.GB_Street + ', ' + temp.customer.GB_Towndist + ', ' + getSubString(temp.customer.CITYPROVINCE.Name) + ', ' + getSubString(temp.customer.COUNTRY.Code)
                                    document.getElementById('txt_CustomerName_' + suffixID).value = temp.customer.GB_FullName
                                    document.getElementById('txt_LegalID_' + suffixID).value = temp.customer.DocID
                                    document.getElementById('dp_IssuedDate_' + suffixID).value = temp.customer.DocExpiryDate
                                    document.getElementById('txt_PlaceIssue_' + suffixID).value = temp.customer.DocIssuePlace
                                    
                                }
                                // That bai
                                else {
                                    document.getElementById('txt_Address_' + suffixID).value = ''
                                    document.getElementById('txt_CustomerName_' + suffixID).value = ''
                                    document.getElementById('txt_LegalID_' + suffixID).value = ''
                                    document.getElementById('dp_IssuedDate_' + suffixID).value = ''
                                    document.getElementById('txt_PlaceIssue_' + suffixID).value = ''
                                    setColorState(2)
                                    setIsFound(false)
                                }
                            }
                        }}
                    >
                        Confirm
                    </Button>
                    
                    {colorState == 1 && <div style={{display:'flex', color: 'green'}}><DoneIcon sx={{color:'green'}} /></div>}
                    {colorState == 2 &&  <div style={{display:'flex', color: 'red'}}><CloseIcon sx={{color:'red'}} />Customer does not exist</div>}
                    </div>
                    
                </Block_Children>

                <Block_Info> 
                    <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='25' disabled={true} noDown={true} />
                    
                    <TextField_Value id={'txt_LegalID_'+suffixID} label='Legal ID' length='25' disabled={true}  noDown={true}/>
                    <DataPicker_Day id={'dp_IssuedDate_'+suffixID}label='Issued Date'  disabled={true}/>
                    <TextField_Value id={'txt_PlaceIssue_'+suffixID} label='Place of Issue' length='60' disabled={true} noDown={true} />
                    <TextField_Value id={'txt_Address_'+suffixID} label='Address' length='60' disabled={true} noDown={true}/> 
                </Block_Info>
                
                <div
                onClick={() => {
                    if(!isPopup){
                        const currencyID = resolveNameID(currencyList, document.getElementById('slt_Currency_'+suffixID).innerText)
                        if(currencyID){
                            subCurrency_Data.map(value => {
                                if(currencyID == value.id){
                                    document.getElementById('txt_Account_'+suffixID).value = value.Name
                                    if(currencyID == 5){
                                        document.getElementById('txt_ChargeAmtFCY_'+ suffixID).disabled = true
                                        document.getElementById('txt_ChargeAmtFCY_').value = ''
                                        document.getElementById('txt_ChargeAmtLCY_'+ suffixID).disabled  = false
                                        
                                    }else{
                                        document.getElementById('txt_ChargeAmtFCY_'+ suffixID).disabled = false
                                        
                                        document.getElementById('txt_ChargeAmtLCY_'+ suffixID).disabled  = true
                                    }
                                    
                                }
                            })
                        }
                    }
                    
                }}>
                    <Block_Children >
                        <TextField_Value id={'txt_TellerID_'+suffixID} label='Teller ID' length='25' disabled={isDisabled} required={true} value={'VietVictory'}/>
                        <Select_Object id={'slt_AccountType_'+suffixID}label='Account Type'object={AccountType_CashDeposits}length='25'  disabled={true} dataID={1}/>
                        <Select_Object id={'slt_Currency_'+suffixID} label='Currency' object={currencyList} length='25' required={true} disabled={isDisabled}/>
                        <TextField_Value id={'txt_Account_'+suffixID} label='Account' length='25' disabled={isDisabled} required={true} noDown={true}/>
                        
                        
                        <div
                        onChange={() => {
                            if(!isPopup){
                                if(document.getElementById('slt_Currency_'+suffixID).innerText == 'VND'){
                                    const amount = parseFloat(document.getElementById('txt_ChargeAmtLCY_'+suffixID).value)
                                    if(amount){
                                        let vatAmount = amount * 0.1
                                        document.getElementById('txt_VatAmtLCY_'+suffixID).value = vatAmount
                                        document.getElementById('txt_TotalAmtLCY_' + suffixID).value= amount + vatAmount
                                        
                                    }
                                }else{
                                    let amount = parseFloat(document.getElementById('txt_ChargeAmtFCY_'+suffixID).value)
                                    let dealRate = document.getElementById('txt_DealRate_'+ suffixID).value ? parseFloat(document.getElementById('txt_DealRate_'+ suffixID).value) : 1
                                    if(amount){
                                        let vatAmount = amount * 0.1
                                        document.getElementById('txt_VatAmtFCY_' + suffixID).value = vatAmount
                                        document.getElementById('txt_TotalAmtFCY_' + suffixID).value = amount + vatAmount
                                        document.getElementById('txt_VatAmtLCY_'+suffixID).value = vatAmount * dealRate
                                        document.getElementById('txt_TotalAmtLCY_' + suffixID).value= (amount + vatAmount) * dealRate
                                        document.getElementById('txt_ChargeAmtLCY_'+suffixID).value= amount * dealRate
                                    }
                                }
                                
                            }
                        }}>
                            <TextField_Value id={'txt_ChargeAmtLCY_'+suffixID} label='Charge Amount LCY' length='25' disabled={isDisabled} number={true}/>
                            <TextField_Value id={'txt_ChargeAmtFCY_'+suffixID} label='Charge Amount FCY' length='25' disabled={isDisabled} number={true}/>
                            <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='25' disabled={isDisabled} required={true} />
                        </div>
                        
                        <DataPicker_Day id={'dp_ValueDate_'+suffixID}label='Value Date'  disabled={isDisabled}/>
                        <Select_Object id={'slt_Category_'+suffixID} label='Category PL' object={categoryPLList} length='50' required={true} disabled={isDisabled}/>
                        
                    </Block_Children>
                </div>
                
            </div>

            
            <Block_Info>
                <TextField_Value id={'txt_VatAmtLCY_'+suffixID} label='Vat Amount LCY' length='25' disabled={true} noDown={true} />
                <TextField_Value id={'txt_VatAmtFCY_'+suffixID} label='Vat Amount FCY' length='25' disabled={true}  noDown={true}/>
                <TextField_Value id={'txt_TotalAmtLCY_'+suffixID} label='Total Amount LCY' length='25' disabled={true}  noDown={true}/>
                <TextField_Value id={'txt_TotalAmtFCY_'+suffixID} label='Total Amount FCY' length='25' disabled={true} noDown={true} />
            </Block_Info>

            <Block_Children>
                <TextField_Value id={'txt_VatSerialNo_'+suffixID} label='vat Serial No' length='25' disabled={isDisabled} />
                <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='25' disabled={isDisabled} />
            </Block_Children>

        </Box>

        </div>
     );
}

export default ChargeCollection_Component;