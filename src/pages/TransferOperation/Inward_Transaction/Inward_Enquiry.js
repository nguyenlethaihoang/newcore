// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
 
// Components
import Block_Children from '../../../components/Block_Children'; 
import TextField_Value from '../../../components/TextField_Value'; 
import Select_Object from '../../../components/Select_Object';
//DATA
import InwardType from '../../../data/Inward_Type'
import CurrencyData from '../../../data/Currency_ForeignExchange'



// --------- CONVERT -------------------
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


function TransferEnquiry_Component({suffixID, forceDisable, object}){
    if(!object){
        object = ""
    }
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)

      // Config Table
    return (
        <div>
            <Box m={2}>
            {/* Block 1 - Enquiry Issue Cheque */}
            <Block_Children>
                <Select_Object id={'slt_TransactionType_'+suffixID} label='Transaction Type'object={InwardType}length='35' disabled={isDisabled}/>
                <TextField_Value id={'txt_BOName_'+suffixID} label='BO Name' length='35'  disabled={isDisabled}/>
                <TextField_Value id={'txt_FOName_'+suffixID} label='FO Name' length='35'disabled={isDisabled}/>
                <TextField_Value id={'txt_FOLegalID_'+suffixID} label='FO Legal ID' length='35'disabled={isDisabled}/>
                <TextField_Value id={'txt_RefID_'+suffixID} label='Ref ID' length='35'disabled={isDisabled}/>
                <Select_Object id={'slt_CreditCurrency_'+suffixID} label='Credit Currency'object={CurrencyData}length='35' disabled={isDisabled}/>
                <TextField_Value id={'txt_Amountfr_'+suffixID} label='Amount from' length='20'disabled={isDisabled} number={true}/>
                <TextField_Value id={'txt_Amountto_'+suffixID} label='Amount to' length='20'disabled={isDisabled} number={true}/>    
            </Block_Children>
        
        </Box>
      </div>
    )
};

export default TransferEnquiry_Component;