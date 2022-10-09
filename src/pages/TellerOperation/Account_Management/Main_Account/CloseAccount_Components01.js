// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Block_Children from '../../../../components/Block_Children';
import TextField_Value from '../../../../components/TextField_Value';
import Select_Object from '../../../../components/Select_Object';
import Close_Online from '../../../../data/Close_Online';

function CloseAccount_Components01({suffixID, forceDisable, object, closure}) {
// SET DEFAULT VALUE

let closedAmount = 0 
let disable = false
if(!closure){
     closure=''
}else{
     closedAmount = closure.RemainingAmount
     disable = true
}
if(!object){
     object=''
}

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
           <Block_Children>
                <Select_Object id={'slt_CloseOnline_'+suffixID} label='Close Online'object={Close_Online}length='20' disabled={isDisabled}/>
           </Block_Children>
            {/* Block 2 - 3.1.2 Enquiry - Close Account  */}
           <Block_Children>
                <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='15' disabled={true} value={object.CURRENCY.Name}/>
                <TextField_Value id={'txt_WorkingBallance_'+suffixID} label='WorkingBallance' length='30' disabled={true} value={closedAmount}/>
                <TextField_Value id={'txt_StandingOrders_'+suffixID} label='StandingOrders' length='20' disabled={true} value='NO'/>
                <TextField_Value id={'txt_UnclearedEntries_'+suffixID} label='Uncleared Entries' length='20' disabled={true} value='NO'/>
                <TextField_Value id={'txt_ChequesOS_'+suffixID} label='Cheques OS' length='15' disabled={true} value='NO'/>
                <TextField_Value id={'txt_BankCards_'+suffixID} label='Bank Cards' length='15' disabled={true} value='NO'/>
                <TextField_Value id={'txt_CCChgsOS_'+suffixID} label='CC Chgs OS' length='15' disabled={true} value='0'/>
                <TextField_Value id={'txt_TotalCreditInterest_'+suffixID} label='Total Credit Interest' length='30' disabled={true} value='0'/>
                <TextField_Value id={'txt_TotalDebitInterest_'+suffixID} label='Total Debit Interest' length='30' disabled={true}/>
                <TextField_Value id={'txt_TotalCharges_'+suffixID} label='Total Charges' length='30' disabled={true}/>
                <TextField_Value id={'txt_TotalVAT_'+suffixID} label='Total VAT' length='30' disabled={true}/>
                <TextField_Value id={'txt_IntCAPToAC_'+suffixID} label='Int CAP To AC' length='30' disabled={true}/>
                <TextField_Value id={'txt_TransRefNext_'+suffixID} label='Trans Ref Next' length='30' disabled={true}/>
           </Block_Children>

        </Box>
        
        </div>
     );
}

export default CloseAccount_Components01;