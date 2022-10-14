import Accordian_Children from "../../../../components/Accordian_Children";
import CashDepositsComponents from "./CustomerInterbranchTransaction/CashDepositsComponents";
import Block_Button from '../../../../components/Block_Button'
import { Button } from "@mui/material";
import Close_Online from "../../../../data/Close_Online";
import useFetchCurrency from "../../../../customHooks/useFetchCurrency";
import cashDepositsApi from "../../../../apis/cashDepositsApi";
import { useState } from "react";
import Message_String from "../../../../components/Message_String";
import Alert_String from "../../../../components/Alert_String";
import Block_Children from "../../../../components/Block_Children";
import SaveIcon from '@mui/icons-material/Save';
import EnquiryCustomerTranComponents from "./CustomerInterbranchTransaction/EnquiryCustomerTranComponents";
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import CashWithdrawalComponents from "./CustomerInterbranchTransaction/CashWithdrawalComponents";
import currencyList_Basic from "../../../../data/currencyList_Basic";
import TransferWithdrawalComponents from "./CustomerInterbranchTransaction/TransferWithdrawalComponents";
import CollectionPayment from "./CreditCardPayment/CollectionPayment";

function Account_Transaction() {
    const currencyList = useFetchCurrency();

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

return ( 
<div>
    {/*  Customer/Interbranch Transaction  */}
    <Accordian_Children title='1. Customer/Interbranch Transaction' label='label1' >  
        {/*  Cash Deposits  */}
        <Accordian_Children title='1.1. Cash Deposits' label='label1' >
                <CashDepositsComponents suffixID={'CashDeposits'}/> 
                <Block_Button>
                    <Button
                        variant="contained"
                        endIcon={<SaveIcon />}
                        onClick={ async () => {
                            // Temp object for storing
                            let params = {}
                            params.CustomerAccount = document.getElementById('txt_CustomerAccount_CashDeposits').value
                            params.AmountDeposited =  document.getElementById('txt_AmountDeposited_CashDeposits').value
                            params.DealRate = document.getElementById('txt_DealRate_CashDeposits').value
                            params.WaiveCharges = resolveNameID(Close_Online,document.getElementById('slt_WaiveCharges_CashDeposits').innerText)
                            params.CurrencyDeposited =  resolveNameID(currencyList,document.getElementById('slt_CurrencyDeposited_CashDeposits').innerText)
                            params.Narrative = document.getElementById('txt_Narrative_CashDeposits').value
                            params.TellerID = document.getElementById('txt_TellerID_CashDeposits').value
                            params.CashAccount = resolveNameID(currencyList,document.getElementById('slt_CurrencyDeposited_CashDeposits').innerText)
                            
                            arrError = []
                            if(!params.CustomerAccount){
                                arrError.push('Customer Account is required')
                            }
                            if(!params.TellerID){
                                arrError.push('Teller ID is required')
                            }
                            if(!params.DealRate){
                                arrError.push('Deal Rate is required')
                            }
                            if(!params.AmountDeposited){
                                arrError.push('Amount Deposited is required')
                            }
                            if (
                                arrError.length == 0
                            ) {
                            
                                const res = await cashDepositsApi.postCreate(params);
                                if(res != 'fail') {
                                    setIsNotification_Success_01(true); 
                                    setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
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
                    <Button
                        variant="outlined"
                        endIcon={<DeleteIcon />}
                        onClick={() => {
                            document.getElementById('txt_CustomerAccount_CashDeposits').value = ''
                            document.getElementById('txt_CustomerID_CashDeposits').value = ''
                            document.getElementById('txt_CustomerName_CashDeposits').value = ''
                            document.getElementById('txt_Currency_CashDeposits').value = ''
                            document.getElementById('txt_AmtPaidToCust_CashDeposits').value = ''
                            document.getElementById('txt_CustBal_CashDeposits').value = ''
                            document.getElementById('txt_NewCustBal_CashDeposits').value = ''
                            document.getElementById('txt_AmountDeposited_CashDeposits').value = ''
                            document.getElementById('txt_DealRate_CashDeposits').value = '1'
                            document.getElementById('txt_Narrative_CashDeposits').value = ''
                            document.getElementById('txt_PrintLnNoOfPS_CashDeposits').value = ''
                        }}
                    >
                        Reset
                    </Button>
                </Block_Button> 
                {isNotification_Success_01 && <Message_String type='success' text='Add Cash Deposit Successfully'/>}                  
                {isNotification_Failed_01 && <Message_String type='error' text='Add Cash Deposit Failed'/>}  
                {isNotification_Message_01 && <Alert_String arrError={arrError}/>}   
        </Accordian_Children>
        {/*  Cash Withdrawal  */}
        <Accordian_Children title='1.2. Cash Withdrawal' label='label1' >  
                <CashWithdrawalComponents suffixID={'CashWithdrawal'}/>
                <Block_Button>
                    <Button
                        variant="contained"
                        onClick={async() => {
                            // Temp object for storing
                            let params = {}
                            // params.AccountType = document.getElementById('').value
                            params.AccountType = 1;
                            params.Account = document.getElementById('txt_CustomerAccount_CashWithdrawal').value
                            params.Amount = document.getElementById('txt_Amount_CashWithdrawal').value
                            params.Narrative = document.getElementById('txt_Narrative_CashWithdrawal').value
                            params.TellerID = document.getElementById('txt_TellerID_CashWithdrawal').value
                            params.CashAccount = resolveNameID(currencyList_Basic,document.getElementById('slt_CurrencyPaid_CashWithdrawal').innerText)
                            params.DealRate = document.getElementById('txt_DealRate_CashWithdrawal').value
                            params.WaiveCharges = resolveNameID(Close_Online,document.getElementById('slt_WaiveCharges_CashWithdrawal').innerText)
                            
                            arrError = []
                            if(!params.Account){
                                arrError.push('Customer Account is required')
                            }
                            if(!params.TellerID){
                                arrError.push('Teller ID is required')
                            }
                            if(!params.CashAccount){
                                arrError.push('Currency Paid is required')
                            }
                            if(parseFloat(document.getElementById('txt_NewCustBal_CashWithdrawal').value) < 0){
                                arrError.push('New Cust Bal cannot be less than 0')
                            }
                            if (arrError.length == 0) {
                                const res = await cashDepositsApi.postCreateWithdrawal(params);
                                if(res != 'fail') {
                                    setIsNotification_Success_02(true); 
                                    setTimeout(() => {setIsNotification_Success_02(false)}, 5000);
                                } else {
                                        setIsNotification_Failed_02(true)
                                        setTimeout(() => {setIsNotification_Failed_02(false)}, 5000); 
                                }
                            }
                            else {
                                setIsNotification_Message_02(true)
                                setTimeout(() => {setIsNotification_Message_02(false)}, 5000);
                            }
                        }}
                    >
                        Save
                    </Button>
                </Block_Button>
                {isNotification_Success_02 && <Message_String type='success' text='Add Cash Withdrawal Successfully'/>}                  
                {isNotification_Failed_02 && <Message_String type='error' text='Add Cash Withdrawal Failed'/>}  
                {isNotification_Message_02 && <Alert_String arrError={arrError}/>}  
        </Accordian_Children>
        {/*  Transfer Withdrawal  */}
        <Accordian_Children title='1.3. Transfer Withdrawal' label='label1' >  
                <TransferWithdrawalComponents suffixID={'Transfer'}/>
                <Block_Button>
                    <Button
                        variant='contained'
                        onClick={async () => {

                            // Temp object for storing
                            let params = {}
                            // params.AccountType = document.getElementById('').value
                            params.AccountType = 1;
                            params.DebitAccount = document.getElementById('txt_DebitAccount_Transfer').value
                            params.TransferAmount = document.getElementById('txt_DebitAmt_Transfer').value
                            params.CreditAccount = document.getElementById('txt_CreditAccount_Transfer').value
                            params.DealRate = document.getElementById('txt_DealRate_Transfer').value
                            params.ValueDate = document.getElementById('dp_ValueDate_01_Transfer').value
                            params.WaiveCharges = document.getElementById('slt_WaiveCharges_Transfer').innerText == 'YES' ? true : false;
                            params.Narrative = document.getElementById('txt_Narrative_Transfer').value
                            arrError = []
                            if(!params.DebitAccount){
                                arrError.push('Debit Account is required')
                            }
                            if(!params.CreditAccount){
                                arrError.push('Credit Account is required')
                            }
                            if(!params.TransferAmount){
                                arrError.push('Debit Amt is required')
                            }
                            if(!params.DealRate){
                                arrError.push('Deal Rate is required')
                            }
                            if (arrError.length == 0) {
                                const res = await cashDepositsApi.postCreateTransfer(params);
                                if(res != 'fail') {
                                    setIsNotification_Success_03(true); 
                                    setTimeout(() => {setIsNotification_Success_03(false)}, 5000);
                                } else {
                                        setIsNotification_Failed_03(true)
                                        setTimeout(() => {setIsNotification_Failed_03(false)}, 5000); 
                                }
                            }
                            else {
                                setIsNotification_Message_03(true)
                                setTimeout(() => {setIsNotification_Message_03(false)}, 5000);
                            }
                        }}  
                    >
                        Save
                    </Button>
                </Block_Button>
                {isNotification_Success_03 && <Message_String type='success' text='Add Transfer Withdrawal Successfully'/>}                  
                {isNotification_Failed_03 && <Message_String type='error' text='Add Transfer Withdrawal Failed'/>}  
                {isNotification_Message_03 && <Alert_String arrError={arrError}/>}  
        </Accordian_Children>
        {/*  Enquiry  */}
        <Accordian_Children title='1.4. Enquiry' label='label1' >  
            <EnquiryCustomerTranComponents suffixID={'EnquiryCustomerTranComponents'}/>
        </Accordian_Children>
    </Accordian_Children>
    {/*  Credit Card Payment  */}
    <Accordian_Children title='2. Credit Card Payment' label='label1'> 
        {/*  Collection For Credit Card Payment  */}
        <Accordian_Children title='2.1. Collection For Credit Card Payment' label='label1' >  
            <CollectionPayment />
        </Accordian_Children>
        {/*  Transfer For Credit Card Payment  */}
        <Accordian_Children title='2.2. Transfer For Credit Card Payment' label='label1' >  
        </Accordian_Children>
        {/*  Enquiry  */}
        <Accordian_Children title='2.3. Enquiry' label='label1' >  
                
        </Accordian_Children> 
    </Accordian_Children>
</div>
);
}

export default Account_Transaction;


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