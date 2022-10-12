import chequeApi from "../../../../apis/chequeApi";
import Accordian_Children from "../../../../components/Accordian_Children";
// COMPONENT
import IssueCheque_Components from "./IssueCheque_Components";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import Block_Button from '../../../../components/Block_Button';
import Alert_String from '../../../../components/Alert_String';
import Message_String from '../../../../components/Message_String';
import { useState, useEffect } from 'react';
import useFetchCurrency from '../../../../customHooks/useFetchCurrency'
import IssueEnquiry_Component from './IssueEnquiry_Component'
import WithdrawalCheque_Component from './WithdrawalCheque_Component'
import WithdrawalEnquiry_Component from './WithdrawalEnquiry_Component'
import Cheque_Type from "../../../../data/Cheque_Type";
import Close_Online from "../../../../data/Close_Online"

let arrError = []
let apiErrorMessage = 'Issue Cheque Failed'
// ------------------HANDLER FUNCTION -------------
// ------------------- CONVERT DAY DATA ------------------------
function convertDatetime(date){
        let dateArr = date.split('/')
        console.log('Date Arr')
        console.log(dateArr)
        let dateConverted = dateArr[2] + '-'+ dateArr[1] + '-' + dateArr[0]
        console.log('Date Str')
        console.log(dateConverted)
        return dateConverted
      }
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
// reset Data
function resetData(){
        document.getElementById('txt_ChequeID_IssueCheque').value = ''
        document.getElementById('dp_IssueDate_IssueCheque').value = ''
        document.getElementById('txt_QuantityIssued_IssueCheque').value = ''
        document.getElementById('txt_ChequeNoStart_IssueCheque').value = ''
}
function resetDataWithdrawal(){
        document.getElementById('txt_Currency_WithdrawalCheque').value = ''
        document.getElementById('txt_ChequeID_WithdrawalCheque').value = ''
        document.getElementById('txt_ChequeNo_WithdrawalCheque').value = ''
        document.getElementById('txt_AmountLCY_WithdrawalCheque').value = ''
        document.getElementById('txt_TellerID_WithdrawalCheque').value = ''
        document.getElementById('txt_Narrative_WithdrawalCheque').value = ''
        document.getElementById('txt_BeneficiaryName_WithdrawalCheque').value = ''
        document.getElementById('txt_BeneficiaryAddress_WithdrawalCheque').value = ''
        document.getElementById('txt_BeneficiaryLegalID_WithdrawalCheque').value = ''
        document.getElementById('txt_PlaceIssue_WithdrawalCheque').value = ''
        document.getElementById('dp_IssueDated_WithdrawalCheque').value = ''

}
// get working account
function getWorkingAccount(text){
        try{
                let tempArr = text.split('.')
                return tempArr[1]

        }catch{
                return null
        }
}
function checkChequeID(text){
        try{
                let tempArr = text.split('.')
                if(tempArr[0] != 'CC')
                   throw 'Cheque ID invalid'
                if(tempArr[2].length != 6)
                   throw 'Cheque ID invalid'
                return true
        }
        catch(err){
                return false
        }
}

// ------------------ DATA TEMP ---------------
const ChequeStatus_Data = [
        {
            id: 1,
            Name: '10 - ISSUE',
        }
    ]
function Cheque_Management() {

  const currencyList = useFetchCurrency();
        
  const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
  const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
  const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
return ( 
<div>
    {/*  Cheque Issuance  */}
    <Accordian_Children title='Cheque Issuance' label='label1' >  
            {/*  Issuance  */}
            <Accordian_Children title='Issuance' label='label1' >  
                <IssueCheque_Components suffixID="IssueCheque" />
                <Block_Button>
                        <Button
                                variant='contained'
                                endIcon={<SaveIcon />}
                                onClick={async () => {
                                        let params = {}
                                        params.ChequeID = document.getElementById('txt_ChequeID_IssueCheque').value
                                        params.WorkingAccount = getWorkingAccount(params.ChequeID)
                                        params.Currency = resolveNameID(currencyList, document.getElementById('slt_Currency_IssueCheque').innerText);
                                        params.ChequeStatus = resolveNameID(ChequeStatus_Data, document.getElementById('slt_ChequeStatus_IssueCheque').innerText);
                                        params.IssueDate = convertDatetime(document.getElementById('dp_IssueDate_IssueCheque').value)
                                        params.IssueQuantity = document.getElementById('txt_QuantityIssued_IssueCheque').value
                                        params.ChequeNoStart = document.getElementById('txt_ChequeNoStart_IssueCheque').value
                                        arrError = []
                                        console.log('params')
                                        console.log(params)
                                        if(!checkChequeID(params.ChequeID)){
                                                arrError.push('ChequeID invalid')
                                        }
                                        if(!params.ChequeStatus){
                                                arrError.push('Cheque Status is required')
                                        }
                                        if(!params.ChequeNoStart){
                                                arrError.push('Cheque No Start is required')
                                        }
                                        if(!params.IssueQuantity){
                                                arrError.push('Issue Quantity is required')
                                        }
                                        if (
                                                arrError.length == 0
                                        ) {
                                        
                                                const res = await chequeApi.issue(params);
                                                if(res == 'success') {
                                                        setIsNotification_Success_01(true); 
                                                        setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                                                        resetData()
                                                } else {
                                                        apiErrorMessage = res
                                                        console.log('message')
                                                        console.log(apiErrorMessage)
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
                        <Button onClick={resetData}>
                                Cancel
                        </Button>
                        {isNotification_Success_01 && <Message_String type='success' text='Issue Cheque Successfully'/>}                  
                        {isNotification_Failed_01 && <Message_String type='error' text={apiErrorMessage}/>}  
                        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}   
                        </Block_Button>
            </Accordian_Children>
            {/*  Enquiry  */}
            <Accordian_Children title='Enquiry' label='label1' >  
                <IssueEnquiry_Component suffixID='IssueEnquiry' />
                
            </Accordian_Children>
    </Accordian_Children>
    {/*  Cheque Withdrawal  */}
    <Accordian_Children title='Cheque Withdrawal' label='label1' >  
           {/*  Withrawal  */}
           <Accordian_Children title='Withrawal' label='label1' > 
                <WithdrawalCheque_Component suffixID='WithdrawalCheque'/>
                <Block_Button>
                        <Button
                                variant='contained'
                                endIcon={<SaveIcon />}
                                onClick={async () => {
                                        let params = {}
                                        params.ChequeID = document.getElementById('txt_ChequeID_WithdrawalCheque').value
                                        params.ChequeNo = document.getElementById('txt_ChequeNo_WithdrawalCheque').value
                                        params.AmountLCY = document.getElementById('txt_AmountLCY_WithdrawalCheque').value
                                        params.ChequeType = resolveNameID(Cheque_Type, document.getElementById('slt_ChequeType_WithdrawalCheque').innerText);
                                        params.TellerID = document.getElementById('txt_TellerID_WithdrawalCheque').value
                                        params.DealRate = document.getElementById('txt_DealRate_WithdrawalCheque').value
                                        params.WaiveCharges = resolveNameID(Close_Online, document.getElementById('slt_Waive_WithdrawalCheque').innerText);
                                        params.Narrative =  document.getElementById('txt_Narrative_WithdrawalCheque').value
                                        params.Currency = resolveNameID(currencyList, document.getElementById('txt_Currency_WithdrawalCheque').innerText);
                                        params.CurrencyPaid =  resolveNameID(currencyList, document.getElementById('slt_CurrencyPaid_WithdrawalCheque').innerText);
                                        params.BeneficiaryName = document.getElementById('txt_BeneficiaryName_WithdrawalCheque').value
                                        params.BeneficiaryAddress = document.getElementById('txt_BeneficiaryAddress_WithdrawalCheque').value
                                        params.BeneficiaryLegalID = document.getElementById('txt_BeneficiaryLegalID_WithdrawalCheque').value
                                        params.IssuedDate = document.getElementById('txt_DealRate_WithdrawalCheque').value
                                        params.PlaceOfIssue = convertDatetime(document.getElementById('dp_IssueDated_WithdrawalCheque').value)

                                        arrError = []
                                        console.log('params')
                                        console.log(params)
                                        if(!checkChequeID(params.ChequeID)){
                                                arrError.push('ChequeID invalid')
                                        }
                                        if(!params.ChequeStatus){
                                                arrError.push('Cheque Status is required')
                                        }
                                        if(!params.ChequeNoStart){
                                                arrError.push('Cheque No Start is required')
                                        }
                                        if(!params.IssueQuantity){
                                                arrError.push('Issue Quantity is required')
                                        }
                                        if (
                                                arrError.length == 0
                                        ) {
                                        
                                                const res = await chequeApi.issue(params);
                                                if(res == 'success') {
                                                        setIsNotification_Success_01(true); 
                                                        setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                                                        resetDataWithdrawal()
                                                } else {
                                                        apiErrorMessage = res
                                                        console.log('message')
                                                        console.log(apiErrorMessage)
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
                        <Button onClick={resetDataWithdrawal}>
                                Cancel
                        </Button>
                        {isNotification_Success_01 && <Message_String type='success' text='Withdrawal Cheque Successfully'/>}                  
                        {isNotification_Failed_01 && <Message_String type='error' text={apiErrorMessage}/>}  
                        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}   
                        </Block_Button>
           </Accordian_Children>
           {/*  Enquiry  */}
           <Accordian_Children title='Enquiry' label='label1' > 
                <WithdrawalEnquiry_Component suffixID='WithdrawalEnquiry' />
           </Accordian_Children> 
    </Accordian_Children>
    {/*  Cheque Transfer  */}
    <Accordian_Children title='Cheque Transfer' label='label1' >  
            {/*  Transfer  */}
           <Accordian_Children title='Transfer' label='label1' > 
           </Accordian_Children>
           {/*  Enquiry  */}
           <Accordian_Children title='Enquiry' label='label1' > 
           </Accordian_Children>
    </Accordian_Children>
    {/*  Enquiry Cheque  */}
    <Accordian_Children title='Enquiry Cheque' label='label1' >  
    </Accordian_Children>
    {/*  Payment Stop  */}
    <Accordian_Children title='Payment Stop' label='label1' >  
    </Accordian_Children>
    {/*  Enquiry Payment Stop  */}
    <Accordian_Children title='Enquiry Payment Stop' label='label1' >  
    </Accordian_Children>
    {/*  Cancel Stop Payment  */}
    <Accordian_Children title='Cancel Stop Payment' label='label1' >  
    </Accordian_Children>
    {/*  Enquiry Cancel Stop Payment  */}
    <Accordian_Children title='Enquiry Cancel Stop Payment' label='label1' >  
    </Accordian_Children>
    {/*  Returned Cheque  */}
    <Accordian_Children title='Returned Cheque' label='label1' >  
    </Accordian_Children>
    {/*  Enquiry Returned Cheque  */}
    <Accordian_Children title='Enquiry Returned Cheque' label='label1' >  
    </Accordian_Children>
</div>

)}


export default Cheque_Management