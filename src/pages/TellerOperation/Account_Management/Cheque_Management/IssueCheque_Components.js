// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Block_Children from '../../../../components/Block_Children'; 
import TextField_Value from '../../../../components/TextField_Value'; 
import Select_Object from '../../../../components/Select_Object'; 
import AutoComplete_Object from '../../../../components/AutoComplete_Object'; 
import Category_OpenAccount from '../../../../data/Category_OpenAccount';
import Block_Button from '../../../../components/Block_Button';
import DataPicker_Day from '../../../../components/DatePicker_Day';
// Fetch API by Custom Hook
import useFetchCurrency from '../../../../customHooks/useFetchCurrency';
import Status_Data from '../../../../data/Status_Data';
// rersolve from text to id with Name
let isValidate = false
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
  // rersolve from text to id with Name Customer
  function resolveStrtoID(text) {
    let subArr = text.toString().split(" - ");
    let subStr = subArr[0]
    if(subStr){
        return subStr
    }
    return null
}


// ----- MAIN -----
function IssueCheque_Components({suffixID, forceDisable, object}) {
// Callback childs -> parent
const [message, setMessage] = useState('panel1')
const callbackFunction = (childData) => {setMessage(childData)}
  // Fetch Data 
const currencyList = useFetchCurrency();
// Manage Disable
if (forceDisable === undefined) forceDisable = false
const [isDisabled, setIsDisabled] = useState(forceDisable)
const handleClick = () => {
  setIsDisabled(true);
};
// SET STATE PRODUCT LINE
    
// ------------------ FETCH API ---------------

// ------------------ DATA TEMP ---------------
const ChequeStatus_Data = [
    {
        id: 1,
        Name: '10 - ISSUE',
    }
]
console.log('object')
console.log(object)

// GET SUB OBJECT
if(!object){
  object = ""
}else{
  isValidate = true
}
      return ( 
        <div
        >
          <Box m={2}>
            {/* Block 1 - 3.1.1 Issue Cheque*/}
            <Block_Children>
                    <TextField_Value id={'txt_ChequeID_'+suffixID} label='Cheque ID' length='35' disabled={isDisabled} required={true} value={object.ChequeID} />
                    <Select_Object id={'slt_ChequeStatus_'+suffixID} label='Cheque Status'required={true} object={ChequeStatus_Data} length='25' disabled={isDisabled} dataID={object.ChequeStatus}/>
                    <Select_Object id={'slt_Currency_'+suffixID} label='Currency Account' object={currencyList} length='25' disabled={true} dataID='5'/>
                    <DataPicker_Day id={'dp_IssueDate_'+suffixID}label='Issue Date' defaultValue={object.IssueDate}/>
                    <TextField_Value id={'txt_QuantityIssued_'+suffixID} label='Quantity of Issued' length='35' disabled={isDisabled} required={true} value={object.IssuedQuantity? object.IssuedQuantity : 5}/>
                    <TextField_Value id={'txt_ChequeNoStart_'+suffixID} label='Cheque No Start' length='25' disabled={isDisabled} required={true} value={object.ChequeNoStart}/>
            </Block_Children>
            {/* Block 1 - 3.1.1 Issue Validation*/}
            <Box
                sx={{ 
                    // border: '1px dashed grey' ,
                    display: '',
                    ...( !isValidate  && {
                        display: 'none'
                    })
                }}
            >
              <Block_Children header2='----------------Validation----------------' 
              >
                <Select_Object id={'slt_Status_'+suffixID} label='Status'required={true} object={Status_Data} length='35' disabled={object.Status != 1? true:false} dataID={object.Status}/>
              </Block_Children>
            </Box>

        </Box>

        </div>
     );
}

export default IssueCheque_Components;