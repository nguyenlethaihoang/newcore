// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import DataPicker_Day from '../../../components/DatePicker_Day';
import AutoComplete_Object from '../../../components/AutoComplete_Object';
import Block_Button from '../../../components/Block_Button';
import CheckBox_Value from '../../../components/CheckBox_Value';
// Fetch API by Custom Hook
import useFetchAccountOfficer from '../../../customHooks/useFetchAccountOfficer';
import useFetchCurrency from '../../../customHooks/useFetchCurrency';
import useFetchCustomer from '../../../customHooks/useFetchCustomer';
import useFetchProductLine from '../../../customHooks/useFetchProductLine';
import useFetchChargeCode from '../../../customHooks/useFetchChargeCode';
import useFetchRelationCode from '../../../customHooks/useFetchRelationCode';
import Select_Object from '../../../components/Select_Object';
import Account_ForeignExchange from '../../../data/Account_ForeignExchange'
import Currency_ForeignExchange from '../../../data/Currency_ForeignExchange'
// ----- MAIN -----
function ForeignExchange_Components({suffixID, forceDisable}) {
     const [isDisabledOfCurrency, setIsDisabledOfCurrency] = useState(true)
     // Automation Select
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
        <div>
          <Box m={2}
          >
            {/* Block 1 - Foreign Exchange */}
           <Block_Children>
                <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='40' required={true} disabled={isDisabled}/>
                <TextField_Value id={'txt_Address_'+suffixID} label='Address' length='40' required={true} disabled={isDisabled}/>
                <TextField_Value id={'txt_PhoneNumber_'+suffixID} label='Phone Number' length='20' disabled={isDisabled}/>
           </Block_Children>
            {/* Block 2 - Foreign Exchange */}
           <Block_Children>
                <TextField_Value id={'txt_TellerID_'+suffixID} label='Teller ID' length='20' required={true} value='vietvictory' disabled={isDisabled}/>
                
                {/* Automation Select  */}
                <FormControl sx={{ m: 0, minWidth: "20ch", mt: '20px', mr: '20px' }}>
                    <InputLabel id="idlblDebitCurrency">Debit Currency</InputLabel>
                    <Select
                    labelId="idlblDebitCurrency"
                    label='Debit Currency'
                    id={"slt_DebitCurrency_"+suffixID}
                    value={isSelected}
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
               <FormControl sx={{ m: 0, minWidth: "20ch", mt: '20px', mr: '20px'}}>
                    <InputLabel id="idlblDebitAccount">Debit Account</InputLabel>
                    <Select
                    labelId="idlblDebitAccount"
                    label='Debit Currency'
                    id={"slt_DebitAccount_"+suffixID}
                    value={isSelected}
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
               <TextField_Value id={'txt_DebitAmtLCY_'+suffixID} label='Debit Amt LCY' length='25' required={true} disabled={isDisabled?isDisabled:isDisabledOfCurrency}/>
                <TextField_Value id={'txt_DebitAmtFCY_'+suffixID} label='Debit Amt FCY' length='25' disabled={isDisabled?isDisabled:!isDisabledOfCurrency}/>
                <TextField_Value id={'txt_DebitDealRate_'+suffixID} label='Debit Deal Rate' length='25' disabled={isDisabled?isDisabled:isDisabledOfCurrency}/>
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
                    value={isSelected01}
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
                    value={isSelected01}
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
                {/* <Select_Object id={'slt_CurrencyPaid_'+suffixID} label='Currency Paid'required={true}object={}length='25' disabled={isDisabled}/> */}
                <TextField_Value id={'txt_TellerID_'+suffixID} label='Teller ID' length='20' value='vietvictory' disabled={isDisabled}/>
                {/* <Select_Object id={'slt_CreditAccount_'+suffixID} label='Credit Account'required={true}object={}length='25' disabled={isDisabled}/> */}
                <TextField_Value id={'txt_CreditDealRate_'+suffixID} label='Credit Deal Rate' length='25' disabled={isDisabled?isDisabled:!isDisabledOfCurrency}/>
                <TextField_Value id={'txt_AmountPaidToCust_'+suffixID} label='Amount Paid To Cust' length='30' disabled={true}/>
                <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='40' disabled={isDisabled}/>
            </Block_Children>
        </Box>
        
        </div>
     );
}

export default ForeignExchange_Components;