// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Block_Children from '../../../../components/Block_Children'; 
import TextField_Value from '../../../../components/TextField_Value'; 
import Select_Object from '../../../../components/Select_Object'; 
import AutoComplete_Object from '../../../../components/AutoComplete_Object'; 
import Category_OpenAccount from '../../../../data/Category_OpenAccount';
import Block_Button from '../../../../components/Block_Button';
import DataPicker_Day from '../../../../components/DatePicker_Day';
import Block_Info from '../../../../components/Block_Info';
// Fetch API by Custom Hook
import useFetchCurrency from '../../../../customHooks/useFetchCurrency';
import Status_Data from '../../../../data/Status_Data';
import Cheque_Type from '../../../../data/Cheque_Type';
import Close_Online from '../../../../data/Close_Online';
import chequeApi from '../../../../apis/chequeApi';
import { ControlPointSharp } from '@mui/icons-material';

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

// GET CHEQUE



// ----- MAIN -----
function TransferCheque_Component({suffixID, forceDisable, object}) {
    // Callback childs -> parent
    const [message, setMessage] = useState('panel1')
    const callbackFunction = (childData) => {setMessage(childData)}
    // Fetch Data 
    const currencyList = useFetchCurrency();
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)
    const handleClick = () => {
    setIsDisabled(true);
    };
        
    // ------------------ FETCH API ---------------
    const [chequeDB, setChequeDB] = useState([]);
    useEffect(() => 
    {
        const fetchChequeDB = async () => {
        const response = await chequeApi.enquiryIssue({});
        console.log('cheque')
        console.log(response.data)
        setChequeDB(response.data) 
        }
        fetchChequeDB();
    }, [])
    // ------------------ DATA TEMP ---------------
    const ChequeStatus_Data = [
        {
            id: 1,
            Name: '10 - ISSUE',
        }
    ]

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
    console.log('withdrawal Object')
    console.log(object)
      return ( 
        <div
            
        >
          <Box m={2}>
            {/* Block 1 - 3.1.1 Withdrawal Cheque*/}
            <div
                onClick={
                    () => {
                        
                        if(!isPopup){
                            console.log('isPopup')
                            let chequeIDEle = document.getElementById('txt_ChequeID_'+suffixID).value 
                            if(chequeIDEle){
                                chequeDB.map(value => {
                                    if(chequeIDEle == value.ChequeID){
                                        console.log('set')
                                        console.log(value.Currency)
                                        console.log(value.DEBITACCOUNT.WorkingAmount)
                                        document.getElementById('txt_Currency_'+suffixID).value=value.CURRENCY.Name
                                        document.getElementById('txt_CustomerName_'+suffixID).value=value.DEBITACCOUNT.Customer.GB_FullName
                                        document.getElementById('txt_OldAmount_'+suffixID).value=value.DEBITACCOUNT.WorkingAmount
                                        let amountLCY = document.getElementById('txt_AmountLCY_'+suffixID).value 
                                        document.getElementById('txt_AmountPaid_'+suffixID).value=amountLCY
                                        document.getElementById('txt_ChequeNoTemp_'+suffixID).value= `${value.ChequeNoStart} - ${value.ChequeNoEnd}`
                                        if(parseInt(amountLCY)){
                                            document.getElementById('txt_NewAmount_'+suffixID).value=value.DEBITACCOUNT.WorkingAmount - parseInt(amountLCY)
                                        }
                                    }
                                    
                                })
                            }else{
                                console.log('none')
                            }
                        }
                        
                    }
                }
            >
                {/* Block 1 - 3.1.1 Withdrawal Validation*/}
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
            
                <Block_Children header2='CUSTOMER'>
                    <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='25' disabled={true} value={object.Currencyt?.Name? object.Currencyt.Name : ''} noDown={true}/>
                    <TextField_Value id={'txt_ChequeID_'+suffixID} label='Cheque ID' length='25' disabled={isDisabled} required={true} value={object.ChequeID}/>
                    
                    <TextField_Value id={'txt_AmountLCY_'+suffixID} label='Amount LCY' length='25' disabled={isDisabled} required={true} value={object.AmountLCY}/>
                    
                    <Select_Object id={'slt_ChequeType_'+suffixID} label='Cheque Type' object={Cheque_Type} length='25' required={true} disabled={isDisabled} dataID={object.ChequeType == 'CC'? 1 : 2}/>
                    <TextField_Value id={'txt_ChequeNo_'+suffixID} label='Cheque No' length='25' disabled={isDisabled} required={true} value={object.ChequeNo}/>
                    <TextField_Value id={'txt_ChequeNoTemp_'+suffixID} label='Cheque Serial' length='25' disabled={true} noDown={true} value={object.ChequeNo? '': ''}/>
                </Block_Children>
            </div>

            
            <Block_Info>
                <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='25' disabled={true} noDown={true} value={subCustomer.Customer?.GB_FullName}/>
                <TextField_Value id={'txt_OldAmount_'+suffixID} label='Old Customer Balance' length='25' disabled={true} value={object.OldBalance? object.OldBalance : 0} noDown={true}/>
                <TextField_Value id={'txt_NewAmount_'+suffixID} label='New Customer Balance' length='25' disabled={true} value={object.NewBalance? object.NewBalance : 0} noDown={true}/>
                <TextField_Value id={'txt_AmountPaid_'+suffixID} label='Amount Paid to Customer' length='25' disabled={true} noDown={true} value={object.PaidAmount}/>
            </Block_Info>

            <Block_Children header2="WITHDRAWAL INFORMATION">
                <TextField_Value id={'txt_TellerID_'+suffixID} label='Teller ID' length='25' disabled={isDisabled} required={true} value={object.TellerID? object.TellerID:'VietVictory'}/>
                <Select_Object id={'slt_CurrencyPaid_'+suffixID} label='Currency Paid'required={true} object={currencyList} length='25' disabled={isDisabled} value={object.CurrencyPaidt?.Name}/>
                <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='25' disabled={isDisabled} value={object.DealRate? object.DealRate:1}/>
                
                <Select_Object id={'slt_Waive_'+suffixID} label='Waive Charges' object={Close_Online} length="25" dataID={1} disabled={isDisabled}/>
                <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='25' disabled={isDisabled} value={object.Narrative}/>
            </Block_Children>

            <Block_Children header2='BENEFICIARY INFORMATION'>
                <TextField_Value id={'txt_BeneficiaryName_'+suffixID} label='Beneficiary Name:' length='25' disabled={isDisabled} value={object.BeneficiaryName}/>
                <TextField_Value id={'txt_BeneficiaryAddress_'+suffixID} label='Address' length='25' disabled={isDisabled} value={object.BeneficiaryAddress}/>
                <TextField_Value id={'txt_BeneficiaryLegalID_'+suffixID} label='Legal ID' length='25' disabled={isDisabled} value={object.BeneficiaryLegalID}/>
                <TextField_Value id={'txt_PlaceIssue_'+suffixID} label='Place of Issue' length='25' disabled={isDisabled} value={object.PlaceOfIssue}/>
                <DataPicker_Day id={'dp_IssueDated_'+suffixID}label='Issued Date' defaultValue={object.IssueDate} value={object.IssuedDate? object.IssuedDate: ''} disabled={isDisabled}/>
            </Block_Children>

        </Box>

        </div>
     );
}

export default TransferCheque_Component;