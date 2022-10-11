// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
// Fetch API by Custom Hook
import useFetchAccountOfficer from '../../../customHooks/useFetchAccountOfficer';
import useFetchCurrency from '../../../customHooks/useFetchCurrency';
import useFetchCustomer from '../../../customHooks/useFetchCustomer';
import Account_ForeignExchange from '../../../data/Account_ForeignExchange'
import Currency_ForeignExchange from '../../../data/Currency_ForeignExchange'
// ----- MAIN -----
function ForeignExchange_Components({suffixID, forceDisable, object}) {
     const [isDisabledOfCurrency, setIsDisabledOfCurrency] = useState(true)

     if (object == undefined) object = ""; else {

     }

     // Automation Select - Acount and Currency
     const [isSelected, setIsSelected] = useState('');
     const handleChange = (event) => {
          if (event.target.value == 12) {
               setIsDisabledOfCurrency(false)
          } else 
               setIsDisabledOfCurrency(true)
          setIsSelected(event.target.value); 
     }
     const [isSelected01, setIsSelected01] = useState('');
     const handleChange01 = (event) => {setIsSelected01(event.target.value); }
     // Fetch Data 
     const accountOfficerList = useFetchAccountOfficer();
     const currencyList = useFetchCurrency();
     const customerList = useFetchCustomer();
     // Manage Disable
     if (forceDisable === undefined) forceDisable = false
     const [isDisabled, setIsDisabled] = useState(forceDisable)
     const handleClick = () => {
     setIsDisabled(true);
     };
return ( 
<div
     onChange={() => {
          if (!isDisabledOfCurrency && document.getElementById('txt_DebitAmtLCY_ForeignExchange').value.length != 0 && document.getElementById('txt_DebitDealRate_ForeignExchange').value.length != 0) {
               document.getElementById('txt_DebitAmtFCY_ForeignExchange').value = document.getElementById('txt_DebitAmtLCY_ForeignExchange').value / document.getElementById('txt_DebitDealRate_ForeignExchange').value
               document.getElementById('txt_CreditDealRate_ForeignExchange').value = document.getElementById('txt_AmountPaidToCust_ForeignExchange').value = ''
          }
          if (isDisabledOfCurrency && document.getElementById('txt_CreditDealRate_ForeignExchange').value.length != 0 && document.getElementById('txt_DebitAmtFCY_ForeignExchange').value.length != 0)
          {
               document.getElementById('txt_DebitAmtLCY_ForeignExchange').value = document.getElementById('txt_AmountPaidToCust_ForeignExchange').value = document.getElementById('txt_CreditDealRate_ForeignExchange').value * document.getElementById('txt_DebitAmtFCY_ForeignExchange').value
               document.getElementById('txt_DebitDealRate_ForeignExchange').value = ''
          }
     }}
>
<Box m={2}>
     {/* Block 1 - Foreign Exchange */}
     <Block_Children>
          <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='40' required={true} disabled={isDisabled} value={object?.CustomerName}/>
          <TextField_Value id={'txt_Address_'+suffixID} label='Address' length='40' required={true} disabled={isDisabled} value={object?.Address}/>
          <TextField_Value id={'txt_PhoneNumber_'+suffixID} label='Phone Number' length='20' disabled={isDisabled}  value={object?.PhoneNo}/>
     </Block_Children>
     {/* Block 2 - Foreign Exchange */}
     <Block_Children>
          <TextField_Value id={'txt_TellerID_'+suffixID} label='Teller ID' length='20' required={true} value={'vietvictory'} disabled={isDisabled} />
          {/* Automation Select  Debit Currency*/}
          <FormControl sx={{ m: 0, minWidth: "20ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblDebitCurrency">Debit Currency</InputLabel>
          <Select
          labelId="idlblDebitCurrency"
          label='Debit Currency'
          id={"slt_DebitCurrency_"+suffixID}
          required={true}
          disabled={isDisabled}
          value={object == "" ? isSelected : object.DebitCurrencyID}
          onChange={handleChange}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {Currency_ForeignExchange.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
     </FormControl>
     {/* Automation Select Debit Account*/}
     <FormControl sx={{ m: 0, minWidth: "20ch", mt: '20px', mr: '20px'}}>
          <InputLabel id="idlblDebitAccount">Debit Account</InputLabel>
          <Select
          labelId="idlblDebitAccount"
          required={true}
          label='Debit Currency'
          id={"slt_DebitAccount_"+suffixID}
          value={object == "" ? isSelected : object.DebitCurrencyID}
          disabled={isDisabled}
          onChange={handleChange}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {Account_ForeignExchange.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
     </FormControl> 
          <TextField_Value id={'txt_DebitAmtLCY_'+suffixID} label='Debit Amt LCY' length='25' required={true} disabled={isDisabled?isDisabled:isDisabledOfCurrency} number={true} noDown={true} value={object?.DebitAmtLCY == '0' ? '' : object?.DebitAmtLCY}/> 
          <TextField_Value id={'txt_DebitAmtFCY_'+suffixID} label='Debit Amt FCY' length='25' disabled={isDisabled?isDisabled:!isDisabledOfCurrency}  number={true} noDown={true} value={object?.DebitAmtFCY == '0' ? '' : object?.DebitAmtFCY}/>
          <TextField_Value id={'txt_DebitDealRate_'+suffixID} label='Debit Deal Rate' length='25' disabled={isDisabled?isDisabled:isDisabledOfCurrency} number={true} noDown={true} value={object?.DebitDealRate == '0' ? '' : object?.DebitDealRate}/>  
     </Block_Children>
     {/* Block 3 - Foreign Exchange */}
     <Block_Children>
     {/* Automation Select  */}
     <FormControl sx={{ m: 0, minWidth: "20ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblCurrencyPaid">Currency Paid</InputLabel>
          <Select
          labelId="idlblCurrencyPaid"
          label='Debit Currency'
          id={"slt_CurrencyPaid_"+suffixID}
          value={object == "" ? isSelected01 : object.CurrencyPaidID}
          disabled={isDisabled}
          onChange={handleChange01}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {Currency_ForeignExchange.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
     </FormControl>
     <FormControl sx={{ m: 0, minWidth: "20ch", mt: '20px', mr: '20px'}}>
          <InputLabel id="idlblCreditAccount">Credit Account</InputLabel>
          <Select
          labelId="idlblCreditAccount"
          label='Debit Currency'
          id={"slt_CreditAccount_"+suffixID}
          value={object == "" ? isSelected01 : object.CurrencyPaidID}
          disabled={isDisabled}
          onChange={handleChange01}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {Account_ForeignExchange.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
     </FormControl> 
          <TextField_Value id={'txt_TellerID02_'+suffixID} label='Teller ID' length='20' value='vietvictory' disabled={isDisabled}/>
          <TextField_Value id={'txt_CreditDealRate_'+suffixID} label='Credit Deal Rate' length='25' disabled={isDisabled?isDisabled:!isDisabledOfCurrency} number={true} noDown={true} value={object?.CreditDealRate == '0' ? '' : object?.CreditDealRate}/>
          <TextField_Value id={'txt_AmountPaidToCust_'+suffixID} label='Amount Paid To Cust' length='30' disabled={true} noDown={true} value={object?.AmountPaidToCust == '0' ? '' : object?.AmountPaidToCust}/>
          <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='40' disabled={isDisabled} value={object?.Narrative == '0' ? '' : object?.Narrative}/>
     </Block_Children>
</Box>

</div>
);
}

export default ForeignExchange_Components;