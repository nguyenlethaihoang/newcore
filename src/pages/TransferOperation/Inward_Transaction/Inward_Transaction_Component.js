//COMPONENT
import Block_Children from "../../../components/Block_Children"
import DataPicker_Day from "../../../components/DatePicker_Day";
import Select_Object from "../../../components/Select_Object";
import TextField_Value from "../../../components/TextField_Value";
import { Box, Button, IconButton } from '@mui/material';
//DATA
import InwardTypeData from "../../../data/Inward_Type"
import Currency_ForeignExchange from "../../../data/Currency_ForeignExchange"
import Status_Data from '../../../data/Status_Data';
//REACT
import { useRef, useState } from "react";

function Inward_Transaction_Component({suffixID, object, forceDisable}) {
    //SET UP COMPONENT
    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable)

    const [isDisabledDebitLCY, setDisabledDebitLCY] = useState(true)
    const [isDisabledDebitFCY, setDisabledDebitFCY] = useState(true)
    const [isDisabledCreditLCY, setDisabledCreditLCY] = useState(true)
    const [isDisabledCreditFCY, setDisabledCreditFCY] = useState(true)

    //CHECK OBJECT
    let isValidate = false
    if(object){
        isValidate = true
    }

    return(
        <div>

            {/* Validation*/}
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
                    <Select_Object id={'slt_Status_'+suffixID} label='Status'required={true} object={Status_Data} length='35' disabled={object?.Status != 1? true:false} dataID={object?.Status}/>
                </Block_Children>
                </Box>

            <Block_Children header2="INWARD">
                <Select_Object id={'slt_InwardType_'+suffixID}label='Inward Type'required={true} object={InwardTypeData} length='30' disabled={isDisabled} dataID={object?.Type}/>
                <TextField_Value id={'txt_ClearingID_'+suffixID} label='Clearing ID' length='30' disabled={isDisabled} value={object?.ClearingID}/>

            </Block_Children>
            
            <div
                onClick={() => {
                    if(!object){
                        let currency = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_DebitCurrency_'+suffixID).innerText)
                        let dealRate = document.getElementById('txt_DealRate_'+suffixID).value
                        if(currency != 12) {
                            setDisabledDebitLCY(true)
                            setDisabledDebitFCY(false)
                            document.getElementById('txt_DebitAmtLCY_'+suffixID).value = 0

                            if(dealRate != 0)
                                document.getElementById('txt_DebitAmtLCY_'+suffixID).value = document.getElementById('txt_DebitAmtFCY_'+suffixID).value * dealRate

                        }else {
                            setDisabledDebitLCY(false)
                            setDisabledDebitFCY(true)
                            document.getElementById('txt_DebitAmtFCY_'+suffixID).value = 0
                        }
                    }
                
                }}
                >
                <Block_Children header2="DEBIT ACCOUNT">
                    <Select_Object  id={'slt_DebitCurrency_'+suffixID}label='Debit Currency'required={true}object={Currency_ForeignExchange}length='30' disabled={isDisabled} dataID={object?.DebitCurrency}/>
                    <TextField_Value id={'txt_DebitAccount_'+suffixID} label='Dedit Account' length='30' disabled={isDisabled} value={object?.DebitAccount}/>
                    <TextField_Value id={'txt_DebitAmtLCY_'+suffixID} label='Debit Amount LCY' length='30' disabled={isDisabledDebitLCY} number={true} noDown={true} value={object?.DebitAmtLCY}/>
                    <TextField_Value id={'txt_DebitAmtFCY_'+suffixID} label='Debit Amount FCY' length='30' disabled={isDisabledDebitFCY} number={true} noDown={true} value={object?.DebitAmtFCY}/>
                    <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='30' disabled={isDisabled} number={true} value={object?.DealRate}/>
                </Block_Children>
            </div>
            
            <div
            
                onClick={() => {
                    if(!object){
                        let currency = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_CreditCurrency_'+suffixID).innerText)
                        if(currency != 12){
                            setDisabledCreditFCY(false)
                            setDisabledCreditLCY(true)
                            document.getElementById('txt_CreditAmtLCY_'+suffixID).value = 0
                        }else {
                            setDisabledCreditFCY(true)
                            setDisabledCreditLCY(false)
                            document.getElementById('txt_CreditAmtFCY_'+suffixID).value = 0
                        }
                    }
                    
                }}
            >
                <Block_Children header2="CREDIT ACCOUNT">
                    <Select_Object id={'slt_CreditCurrency_'+suffixID}label='Credit Currency'required={true}object={Currency_ForeignExchange}length='30' disabled={isDisabled} dataID={object?.CreditCurrency}/>
                    <TextField_Value id={'txt_CreditAccount_'+suffixID} label='Credit Account' length='30' disabled={isDisabled} value={object?.CreditAccount}/>
                    <TextField_Value id={'txt_CreditAmtLCY_'+suffixID} label='Credit Amount LCY' length='30' disabled={isDisabledCreditLCY} number={true} noDown={true} value={object?.CreditAmtLCY}/>
                    <TextField_Value id={'txt_CreditAmtFCY_'+suffixID} label='Credit Amount FCY' length='30' disabled={isDisabledCreditFCY} number={true} noDown={true} value={object?.CreditAmtFCY}/>
                </Block_Children>
            </div>

            <Block_Children header2="BENEFICIARY INFORMATION">
                <TextField_Value id={'txt_BOName_'+suffixID} label='BO Name' length='30' disabled={isDisabled} value={object?.BOName}/>
                <TextField_Value id={'txt_FOName_'+suffixID} label='FO Name' length='30' disabled={isDisabled} value={object?.FOName}/>
                <TextField_Value id={'txt_LegalID_'+suffixID} label='Legal ID' length='30' disabled={isDisabled} value={object?.LegalID}/>
                <TextField_Value id={'txt_Telephone_'+suffixID} label='Telephone' length='30' disabled={isDisabled} number={true} value={object?.Telephone}/>
                <TextField_Value id={'txt_IssuePlace_'+suffixID} label='Issue Place' length='30' disabled={isDisabled} value={object?.IssuePlace}/>
                <DataPicker_Day id={'dp_IssueDate_'+suffixID}label='Isssue Date' disabled={isDisabled} value={object?.IssueDate}/>
                <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='50' disabled={isDisabled} value={object?.Narrative}/>
            </Block_Children>
           
           
        </div>
    )
}

export default Inward_Transaction_Component;



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