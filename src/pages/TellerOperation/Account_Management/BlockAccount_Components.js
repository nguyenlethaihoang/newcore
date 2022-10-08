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
function BlockAccount_Components({suffixID, forceDisable}) {
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
            {/* Block 1 - 3.1.2 Enquiry - Block Account */}
           <Block_Children>
                <AutoComplete_Object id={'aut_CustomerID_'+suffixID} label='Customer ID' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' required={true} disabled={true}/>
                <TextField_Value id={'txt_Account_'+suffixID} label='Account' length='30' disabled={true}/>
                <TextField_Value id={'txt_Amount_'+suffixID} label='Amount' length='30' value='0'/>
           </Block_Children>
            {/* Block 2 - 3.1.2 Enquiry - Block Account */}
           <Block_Children>
               <Block_Button>
                    <CheckBox_Value label='Blocked'/>   
               </Block_Button>
           </Block_Children>
           {/* Block 3 - 3.1.2 Enquiry - Block Account */}
           <Block_Children>
               <DataPicker_Day id={'dp_FromDate_'+suffixID}label='From Date'disabled={isDisabled}/>
               <DataPicker_Day id={'dp_ToDate_'+suffixID}label='To Date'disabled={isDisabled}/>
               <TextField_Value id={'txt_Description_'+suffixID} label='Description' length='30' disabled={true} value='PHONG TOA TK:'/>
           </Block_Children>


        </Box>
        
        </div>
     );
}

export default BlockAccount_Components;