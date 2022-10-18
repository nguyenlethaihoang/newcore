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
import DataPicker_Day from '../../../../components/DatePicker_Day';
import Block_Info from '../../../../components/Block_Info';
// Fetch API by Custom Hook
import useFetchCurrency from '../../../../customHooks/useFetchCurrency';
import Status_Data from '../../../../data/Status_Data';
import AccountType_CashDeposits from '../../../../data/AccountType_CashDeposits'
import debitAccountApi from '../../../../apis/debitAccountApi'
import useFetchCategoryPL from '../../../../customHooks/useFetchCategoryPL'
import { gridColumnsTotalWidthSelector } from '@mui/x-data-grid';

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




// ----- MAIN -----
function ChargeCollection_Component({suffixID, forceDisable, object, account}) {
    // Callback childs -> parent
    const [message, setMessage] = useState('panel1')
    const callbackFunction = (childData) => {setMessage(childData)}
    // Fetch Data 
    const currencyList = useFetchCurrency();
    // SET STATE
    const [debitAccountList, setDebitAccountList] = useState([])
    const [colorState, setColorState] = useState(0)
    const [isFound, setIsFound] = useState(false)

    // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    const handleClick = () => {
    setIsDisabled(true);
    };
    
    console.log('account')
    console.log(account)
    //FETCH API
    let categoryPLList = useFetchCategoryPL();
    
    let isValidate = false
    let isPopup = false
    let subCustomer = {}
    // GET SUB OBJECT
    if(!object){
    object = ""
    }else{
        isValidate = true
        isPopup = true

    }
    if(!account){
        account = ''
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
                    <Select_Object id={'slt_AccountType_'+suffixID}label='Account Type'object={AccountType_CashDeposits}length='25'  disabled={true} dataID={1}/>
                </Block_Children>
                
                <Block_Children>
                    <div
                        onChange={() => {
                            if(!isPopup){
                                const fetchDebitAccountList = async () => {
                                    const response = await debitAccountApi.getAll();
                                    setDebitAccountList(response.data) 
                                }
                                fetchDebitAccountList();
                            }
                        }}
                    >
                        <TextField_Value id={'txt_DebitAccount_'+suffixID} label='Debit Account' length='25' disabled={isDisabled}  required={true} value={object.Account}/>
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
                            let data = []
                            let temp 
                            // Fetch again
                            debitAccountList.map((value, index) => {
                                if (value.id == document.getElementById('txt_DebitAccount_'+suffixID).value){
                                    temp = value;     
                                }
                            })
                            console.log('temp')
                            console.log(temp)
                            // Thanh cong
                            if (temp != null) {
                                setColorState(1)
                                setIsFound(true)
                                document.getElementById('txt_CustomerID_' + suffixID).value = temp.CustomerID
                                document.getElementById('txt_CustomerName_' + suffixID).value = temp.Customer.GB_FullName
                                document.getElementById('txt_Currency_' + suffixID).value = temp.CURRENCY.Name
                                document.getElementById('txt_DebitActInfo_' + suffixID).value = `TKTT - ${temp.CURRENCY.Name} - ${temp.Customer?.GB_FullName}`
                                
                            }
                            // That bai
                            else {
                                document.getElementById('txt_CustomerID_' + suffixID).value = ''
                                document.getElementById('txt_CustomerName_' + suffixID).value = ''
                                document.getElementById('txt_Currency_' + suffixID).value = ''
                                document.getElementById('txt_DebitActInfo_' + suffixID).value = ''
                                setColorState(2)
                                setIsFound(false)
                            }
                        }}
                    >
                        Confirm
                    </Button>
                    
                    {colorState == 1 && <div style={{display:'flex', color: 'green'}}><DoneIcon sx={{color:'green'}} /></div>}
                    {colorState == 2 &&  <div style={{display:'flex', color: 'red'}}><CloseIcon sx={{color:'red'}} />Debit Account does not exist</div>}
                    </div>
                    
                </Block_Children>

                <Block_Info>
                    <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='25' disabled={true} noDown={true} value={account.CustomerID}/>
                    <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='25' disabled={true} noDown={true} value={account.Customer?.GB_FullName}/>
                    <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='25' disabled={true}  noDown={true} value={account.CURRENCY?.Name}/> 
                    <TextField_Value id={'txt_DebitActInfo_'+suffixID} label='' length='45' disabled={true}  noDown={true} value={`TKTT - ${account.CURRENCY?.Name} - ${account.Customer?.GB_FullName}`}/>
                
                </Block_Info>
            
                <Block_Children header2='CHARGE INFORMATION'>
                    <div
                        onChange={() => {
                            if(!isPopup){
                                if(document.getElementById('txt_Currency_'+suffixID).value == 'VND'){
                                    document.getElementById('txt_ChargeAmtFCY_'+ suffixID).disabled = true
                                    document.getElementById('txt_ChargeAmtFCY_'+ suffixID).value = ''
                                    document.getElementById('txt_ChargeAmtLCY_'+ suffixID).disabled  = false
                                    const amount = parseFloat(document.getElementById('txt_ChargeAmtLCY_'+suffixID).value)
                                    if(amount){
                                        let vatAmount = amount * 0.1
                                        document.getElementById('txt_VatAmtLCY_'+suffixID).value = vatAmount
                                        document.getElementById('txt_TotalAmtLCY_' + suffixID).value= amount + vatAmount
                                        document.getElementById('txt_VatAmtFCY_'+suffixID).value = 0
                                        document.getElementById('txt_TotalAmtFCY_' + suffixID).value= 0
                                    }
                                }else{
                                    document.getElementById('txt_ChargeAmtFCY_'+ suffixID).disabled = false
                                        
                                    document.getElementById('txt_ChargeAmtLCY_'+ suffixID).disabled  = true
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
                        }}
                    >
                        <TextField_Value id={'txt_ChargeAmtLCY_'+suffixID} label='Charge Amount LCY' length='25' disabled={isDisabled} number={true} value={object.ChargeAmountLCY}/>
                        <TextField_Value id={'txt_ChargeAmtFCY_'+suffixID} label='Charge Amount FCY' length='25' disabled={isDisabled}  number={true} value={object.ChargeAmountFCY}/>
                        <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='25' disabled={isDisabled} value={object.DealRate} />
                    </div>
                    
                    <DataPicker_Day id={'dp_ValueDate_'+suffixID}label='Value Date'  disabled={isDisabled} value={object.ValueDate}/>
                    <Select_Object id={'slt_Category_'+suffixID} label='Category PL' object={categoryPLList} length='25'disabled={isDisabled} dataID={object.Category}/>
                    
                </Block_Children>
            </div>

            
            <Block_Info>
                <TextField_Value id={'txt_VatAmtLCY_'+suffixID} label='Vat Amount LCY' length='25' disabled={true} noDown={true} value={object.VatAmountLCY}/>
                <TextField_Value id={'txt_VatAmtFCY_'+suffixID} label='Vat Amount FCY' length='25' disabled={true}  noDown={true} value={object.VatAmountFCY}/>
                <TextField_Value id={'txt_TotalAmtLCY_'+suffixID} label='Total Amount LCY' length='25' disabled={true}  noDown={true} value={object.TotalAmountLCY}/>
                <TextField_Value id={'txt_TotalAmtFCY_'+suffixID} label='Total Amount FCY' length='25' disabled={true} noDown={true} value={object.TotalAmountFCY}/>
            </Block_Info>

            <Block_Children>
                <TextField_Value id={'txt_VatSerialNo_'+suffixID} label='Vat Serial No' length='25' disabled={isDisabled} value={object.VatSerialNo}/>
                <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='50' disabled={isDisabled} value={object.Narrative}/>
            </Block_Children>

        </Box>

        </div>
     );
}

export default ChargeCollection_Component;