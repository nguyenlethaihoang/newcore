import { Button } from "@mui/material";
import { useState } from "react";
import debitAccountApi from "../../../apis/debitAccountApi";
import Block_Children from "../../../components/Block_Children";
import Block_Info from "../../../components/Block_Info";
import DataPicker_Day from "../../../components/DatePicker_Day";
import Select_Object from "../../../components/Select_Object";
import TextField_Value from "../../../components/TextField_Value";
import useFetchCity from "../../../customHooks/useFetchCity";
import BenCom_Outward from "../../../data/BenCom_Outward";
import Close_Online from "../../../data/Close_Online";
import Currency_ForeignExchange from "../../../data/Currency_ForeignExchange";
import ProductID from "../../../data/ProductID";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';


function TransferByAccountComponents({suffixID, object, forceDisable}) {
    const [debitAccountList, setDebitAccountList] = useState([]);
    const [colorState, setColorState] = useState(0)
    const [isFound, setIsFound] = useState(false)

    const cityList = useFetchCity();

    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable)
return ( 
<div>
    {/* Block 1 */}
<Block_Children header2='DEBIT INFORMATION'>
    <Select_Object id={'slt_ProductID_'+suffixID}label='Product ID'required={true}object={ProductID}length='40' disabled={isDisabled}/>
    <Select_Object id={'slt_Currency_'+suffixID}label='Currency'required={true}object={Currency_ForeignExchange}length='20' disabled={isDisabled}/>
    <Select_Object id={'slt_BenCom_'+suffixID}label='Ben Com'required={true}object={BenCom_Outward}length='40' disabled={isDisabled}/>
    {/* <Select_Object id={'slt_CreditAccount_'+suffixID}label='Credit Account' length='40' disabled={isDisabled} noValue={true}/> */}
    <TextField_Value id={'txt_CreditAccount_'+suffixID} label='Credit Account' length='40' disabled={true} noDown={true}/>
    <TextField_Value id={'txt_Amount_'+suffixID} label='Amount' length='20' disabled={isDisabled} number={true}/>
</Block_Children>    
<Block_Children>
    {/* <Select_Object id={'slt_DebitAccount_'+suffixID}label='Debit Account' length='40' disabled={isDisabled} noValue={true} required={true}/> */}
    <TextField_Value id={'txt_DebitAccount_'+suffixID} label='Debit Account' length='40' disabled={isDisabled}/>
    
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
                const fetchDebitAccountList = async () => {
                    const response = await debitAccountApi.getAll();
                    setDebitAccountList(response.data) 
                }
                console.log(debitAccountList)
                fetchDebitAccountList();
                debitAccountList.map((value, index) => {
                    if (value.Account == document.getElementById('txt_DebitAccount_TransferByAccount').value){
                        temp = value;     
                    }
                })
                // Thanh cong
                if (temp != null) {
                    setColorState(1)
                    setIsFound(true)
                    // document.getElementById('txt_CustomerID_CashDeposits').value = temp.id
                    document.getElementById('txt_SendingName_TransferByAccount').value = temp?.Customer?.GB_FullName
                    // document.getElementById('txt_Currency_CashDeposits').value = temp.CURRENCY.Name
                    // setCurrencyState(temp.Currency)
                    // document.getElementById('txt_CustBal_CashDeposits').value = temp.WorkingAmount
                    // document.getElementById('txt_NewCustBal_CashDeposits').value = ''
                    
                }
                // That bai
                else {
                    // document.getElementById('txt_CustomerID_CashDeposits').value = ''
                    // document.getElementById('txt_CustomerName_CashDeposits').value = ''
                    // document.getElementById('txt_Currency_CashDeposits').value = ''
                    // document.getElementById('txt_AmtPaidToCust_CashDeposits').value = ''
                    // document.getElementById('txt_CustBal_CashDeposits').value = ''
                    // document.getElementById('txt_NewCustBal_CashDeposits').value = ''
                    setColorState(2)
                    setIsFound(false)
                }
            }}
        >
            Confirm
        </Button>
        
        {colorState == 1 && <div style={{display:'flex', color: 'green'}}><DoneIcon sx={{color:'green'}} /></div>}
        {colorState == 2 &&  <div style={{display:'flex', color: 'red'}}><CloseIcon sx={{color:'red'}} />Customer Account does not exist</div>}
        </div>
</Block_Children>
<Block_Info>
    <TextField_Value id={'txt_SendingName_'+suffixID} label='Sending Name' length='40' disabled={isDisabled} required={true} noDown={true}/>
    <TextField_Value id={'txt_SendingAddress_'+suffixID} label='Sending Address' length='40' disabled={isDisabled} required={true} noDown={true}/>
    <TextField_Value id={'txt_IDTaxCode_'+suffixID} label='ID/Tax Code' length='20' disabled={isDisabled} noDown={true}/>
</Block_Info>
    
{/* Block 2 */}
<Block_Children header2='BENEFICIARY INFORMATION'>
    <TextField_Value id={'txt_ReceivingName_'+suffixID} label='Receiving Name' length='40' disabled={isDisabled} required={true}/>
    <TextField_Value id={'txt_BenAccount_'+suffixID} label='Ben Account' length='20' disabled={isDisabled} />
    <TextField_Value id={'txt_IDCard_'+suffixID} label='ID Card' length='20' disabled={isDisabled} />
    <DataPicker_Day id={'dp_IsssueDate_'+suffixID}label='Isssue Date' disabled={isDisabled}/>
</Block_Children>
{/* Block 3 */}
<Block_Children>
    <TextField_Value id={'txt_IssuePlace_'+suffixID} label='Issue Place' length='20' disabled={isDisabled} />
    <Select_Object id={'slt_Province_'+suffixID}label='Province' object={cityList}length='40' disabled={isDisabled}/>
    <TextField_Value id={'txt_Phone_'+suffixID} label='Phone' length='20' disabled={isDisabled} />
</Block_Children>
{/* Block 4 */}
<Block_Children>
    <Select_Object id={'slt_BankCode_'+suffixID}label='Bank Code' noValue={true}length='40' disabled={isDisabled}/>
    <TextField_Value id={'txt_BankName_'+suffixID} label='Bank Name' length='40' disabled={isDisabled} />
</Block_Children>
{/* Block 5 */}
<Block_Children header2='OTHER INFORMATION'>
    <TextField_Value id={'txt_Teller_'+suffixID} label='Teller' length='40' disabled={isDisabled} value='vietvictory'/>
    <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='40' disabled={isDisabled}/>
    <Select_Object id={'slt_WaiveCharges_'+suffixID}label='Waive Charges?'object={Close_Online}length='20' disabled={isDisabled}/>
</Block_Children>
</div>
);
}

export default TransferByAccountComponents;