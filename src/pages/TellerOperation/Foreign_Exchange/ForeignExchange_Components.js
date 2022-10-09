// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
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
// ----- MAIN -----
function ForeignExchange_Components({suffixID, forceDisable}) {
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
          <Box m={2}>
            {/* Block 1 - Foreign Exchange */}
           <Block_Children>
                <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='40' required={true} disabled={isDisabled}/>
                <TextField_Value id={'txt_Address_'+suffixID} label='Address' length='40' required={true} disabled={isDisabled}/>
                <TextField_Value id={'txt_PhoneNumber_'+suffixID} label='Phone Number' length='20' disabled={isDisabled}/>
           </Block_Children>
            {/* Block 2 - Foreign Exchange */}
           <Block_Children>
                <TextField_Value id={'txt_TellerID_'+suffixID} label='Teller ID' length='20' required={true} value='vietvictory' disabled={isDisabled}/>
                {/* <Select_Object id={'slt_DebitCurrency_'+suffixID} label='Debit Currency'required={true}object={}length='25' disabled={isDisabled}/> */}
                {/* <Select_Object id={'slt_DebitAccount_'+suffixID} label='Debit Account'required={true}object={}length='25' disabled={isDisabled}/> */}
                <TextField_Value id={'txt_DebitAmtLCY_'+suffixID} label='Debit Amt LCY' length='25' required={true} disabled={true}/>
                <TextField_Value id={'txt_DebitAmtFCY_'+suffixID} label='Debit Amt FCY' length='25' disabled={isDisabled}/>
                <TextField_Value id={'txt_DebitDealRate_'+suffixID} label='Debit Deal Rate' length='25' disabled={true}/>
           </Block_Children>
            {/* Block 3 - Foreign Exchange */}
            <Block_Children>
                {/* <Select_Object id={'slt_CurrencyPaid_'+suffixID} label='Currency Paid'required={true}object={}length='25' disabled={isDisabled}/> */}
                <TextField_Value id={'txt_TellerID_'+suffixID} label='Teller ID' length='20' value='vietvictory' disabled={isDisabled}/>
                {/* <Select_Object id={'slt_CreditAccount_'+suffixID} label='Credit Account'required={true}object={}length='25' disabled={isDisabled}/> */}
            </Block_Children>
        </Box>
        
        </div>
     );
}

export default ForeignExchange_Components;