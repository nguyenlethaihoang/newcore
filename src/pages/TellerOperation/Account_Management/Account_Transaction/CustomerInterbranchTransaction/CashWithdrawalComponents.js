import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import Block_Children from '../../../../../components/Block_Children';
import Block_Spacing from '../../../../../components/Block_Spacing'
import Block_Info from '../../../../../components/Block_Info'
import Select_Object from '../../../../../components/Select_Object';
import TextField_Value from '../../../../../components/TextField_Value';
import AccountType_CashDeposits from '../../../../../data/AccountType_CashDeposits';
import DoneIcon from '@mui/icons-material/Done';
import Currency_ForeignExchange from '../../../../../data/Currency_ForeignExchange';
import currencyList_Basic from '../../../../../data/currencyList_Basic';
import Close_Online from '../../../../../data/Close_Online';
import useFetchCurrency from '../../../../../customHooks/useFetchCurrency';
import debitAccountApi from '../../../../../apis/debitAccountApi';
import CloseIcon from '@mui/icons-material/Close';


function CashWithdrawalComponents({suffixID, forceDisable, object}) {
    const [currencyState, setCurrencyState] = useState(object === undefined ? 1 : object?.Account?.Currency) 

    // Borrow Data
    const currencyList = useFetchCurrency();
    //
    const [debitAccountList, setDebitAccountList] = useState([]);
    const [colorState, setColorState] = useState(0)
    const [isFound, setIsFound] = useState(false)
    // Manage Disable
    const [isDisabled, setIsDisable] = useState(forceDisable)
    // Manage Validation Component
    const [isValidation, setIsValidation] = useState(false)
    // if (object === undefined) {
    //     // setIsValidation(false)
    // } else setIsValidation(true)
    
    let checkShow = false
    let popup = false
    if (object == undefined) object = ""; else {
        popup = true
        if (object.Transaction.Status == 1)
            checkShow = true
    }
    // Form control
    const [isSelected01, setIsSelected01] = useState(popup ? object?.Account?.Currency-1 : 1);
    const handleChange01 = (event) => {setIsSelected01(event.target.value); }
    // Fetch lan 1
return ( 
<div
    onChange={() => {
        if (colorState == 1 && isFound == true) {
            document.getElementById('txt_AmountPaid_CashWithdrawal').value = parseFloat(document.getElementById('txt_Amount_CashWithdrawal').value) * parseFloat(document.getElementById('txt_DealRate_CashWithdrawal').value)
            document.getElementById('txt_NewCustBal_CashWithdrawal').value = parseFloat(document.getElementById('txt_CustBal_CashWithdrawal').value) - parseFloat(document.getElementById('txt_AmountPaid_CashWithdrawal').value)
        }
        if (popup == false) {
            const fetchDebitAccountList = async () => {
                const response = await debitAccountApi.getAll();
                setDebitAccountList(response.data) 
            }
            fetchDebitAccountList();
        }
    }}
>
<Block_Spacing>
    {/* Validation Components  */}
    {
       popup 
        &&
        <Block_Info>
            <Block_Children header2='VALIDATION'>
            <Select_Object id={'slt_Status_'+suffixID}label='Status'object={StatusArray}length='25'  disabled={!checkShow} dataID={object?.Transaction?.Status}/>
            </Block_Children>
        </Block_Info>
    }
    {/* Block 1 */}
    <Block_Children>
        <Select_Object id={'slt_AccountType_'+suffixID}label='Account Type'object={AccountType_CashDeposits}length='25'  disabled={true} dataID={1}/>
    </Block_Children>
    {/* Block 2 */}
    <Block_Children>
        <TextField_Value id={'txt_CustomerAccount_'+suffixID} label='Customer Account' length='25' disabled={isDisabled}  required={true} value={object?.Transaction?.Account}/>
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
                fetchDebitAccountList();
                debitAccountList.map((value, index) => {
                    if (value.id == document.getElementById('txt_CustomerAccount_CashWithdrawal').value){
                        temp = value;     
                    }
                })
                // Thanh cong
                if (temp != null) {
                    setColorState(1)
                    setIsFound(true)
                    console.log('temp')
                    console.log(temp)
                    //
                    document.getElementById('txt_NewCustBal_CashDeposits').value = ''
                    //
                    setCurrencyState(temp.Currency)
                    document.getElementById('txt_CustomerID_CashWithdrawal').value = temp.CustomerID
                    document.getElementById('txt_CustomerName_CashWithdrawal').value = temp.Customer.GB_FullName
                    document.getElementById('txt_Currency_CashWithdrawal').value = temp.CURRENCY.Name
                    document.getElementById('txt_CustBal_CashWithdrawal').value = temp.WorkingAmount
                }
                // That bai
                else {
                    document.getElementById('txt_CustomerID_CashDeposits').value = ''

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
    {/* Block 3 */}
    <Block_Info>
        <Block_Children>
            <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='25' disabled={true} noDown={true} value={object?.Account?.Customer?.id}/>
            <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='25' disabled={true} noDown={true} value={object?.Account?.Customer?.GB_FullName}/>
            <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='25' disabled={true} noDown={true} value={currencyList_Basic[parseInt(object?.Account?.Currency)-1]?.Name}/>
        </Block_Children>
    </Block_Info>
    {/* Block 4 */}
    <Block_Children>
        <TextField_Value id={'txt_TellerID_'+suffixID} label='Teller ID' length='25' required={true} value='vietvictory' disabled={isDisabled}/>
        <TextField_Value id={'txt_Amount_'+suffixID} label='Amount' length='25' noDown={true} number={true} value={object?.Transaction?.WithdrawalAmount} disabled={isDisabled}/>
        <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='25' value={object?.Transaction?.Narrative} disabled={isDisabled}/>
    </Block_Children>
    {/* Block 5 */}
    <Block_Children>
        <FormControl sx={{ m: 0, minWidth: "25ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblCurrencyDeposited">Currency Paid</InputLabel>
          <Select
          labelId="idlblCurrencyPaid"
          label='Currency Paid'
          id={"slt_CurrencyPaid_"+suffixID}
          value={object != "" ? object.Transaction.CashAccount : currencyState}
          disabled={true}
          onChange={handleChange01}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {currencyList.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 0, minWidth: "25ch", mt: '20px', mr: '20px'}}>
            <InputLabel id="idlblCashAccount">Cash Account</InputLabel>
            <Select
            labelId="idlblCashAccount"
            label='Cash Account'
            id={"slt_CashAccount_"+suffixID}
            value={object != "" ? object.Transaction.CashAccount :currencyState}
            disabled={true}
            onChange={handleChange01}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {currencyList.map((data, index) => {
                return(
                        <MenuItem value={data.id} key={data.id}>{data.Name}-1001-1125-2002</MenuItem>
                )
            })}
            </Select>
        </FormControl>
    </Block_Children>
    {/* Block 6 */}
    <Block_Children>
        <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='25' value={object != "" ? object?.Transaction?.DealRate : 1} noDown={true} disabled={true} number={true}/>
        <TextField_Value id={'txt_AmountPaid_'+suffixID} label='Amount Paid' length='25' disabled={true} noDown={true} value={object?.Transaction?.PaidAmount}/>
        <TextField_Value id={'txt_CustBal_'+suffixID} label='Cust Bal' length='25' disabled={true} noDown={true} value={object?.Transaction?.InitialAmount}/>
        <TextField_Value id={'txt_NewCustBal_'+suffixID} label='New Cust Bal' length='25' disabled={true} noDown={true} value={object?.Transaction?.NewAmount}/>
    </Block_Children>
    {/* Block 7 */}
    <Block_Children>
        <Select_Object id={'slt_WaiveCharges_'+suffixID}label='Waive Charges?'object={Close_Online}length='25'  disabled={isDisabled} dataID={ object?.Transaction?.WaiveCharges == true ? 1 : 2 | 1}/>
        <TextField_Value id={'txt_PrintLnNoOfPS_'+suffixID} label='Print LnNo Of PS' length='25'  disabled={isDisabled}/>
    </Block_Children>

</Block_Spacing>
</div>
);
}

export default CashWithdrawalComponents;

const StatusArray = [
    {id: 1, Name: 'Pending'},
    {id: 2, Name: 'Authorize'},
    {id: 3, Name: 'Un-Authorize'},

]