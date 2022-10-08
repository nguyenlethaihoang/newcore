// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import DataPicker_Day from '../../../components/DatePicker_Day';
import Select_Object from '../../../components/Select_Object';
import AutoComplete_Object from '../../../components/AutoComplete_Object';
import Category_OpenAccount from '../../../data/Category_OpenAccount';

// APIs
import useFetchCurrency from '../../../customHooks/useFetchCurrency';



function CloseAccount_Components02({suffixID, forceDisable, object}) {
// Fetch Data
const currencyList = useFetchCurrency();
// Manage Disable
if (forceDisable === undefined) forceDisable = false
const [isDisabled, setIsDisabled] = useState(forceDisable)
const handleClick = () => {
  setIsDisabled(true);
};
    return ( 
        <div>
          <Box m={2}>
            {/* Block 1 - 3.1.2 Enquiry - Close Account */}
            <Block_Children header2='DEBIT INFORMATION'>
                <TextField_Value id={'txt_Customer_'+suffixID} label='Customer' length='40' disabled={true}/>
                <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='15' disabled={true}/>
                <TextField_Value id={'txt_CloseAccount_'+suffixID} label='Close Account' length='20' disabled={true}/>
                <TextField_Value id={'txt_DebitAmount_'+suffixID} label='Debit Amount' length='30' disabled={true}/>
                <DataPicker_Day id={'dp_DebitDate_'+suffixID}label='Debit Date' disabled={true}/>
            </Block_Children>
            {/* Block 2 - 3.1.2 Enquiry - Close Account */}
            <Block_Children header2='CREDIT INFORMATION'>
                <Select_Object id={'slt_CreditCurrency_'+suffixID}label='Credit Currency'dataID='10' object={currencyList}length='15'/>
                {/* <Select_Object id={'slt_AccountPaid_'+suffixID}label='Account Paid'dataID='10' object={{id:'1',Name:''}}length='25'/> */}
            </Block_Children>
        </Box>
        
        </div>
     );
}

export default CloseAccount_Components02;