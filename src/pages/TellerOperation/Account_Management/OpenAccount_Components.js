// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import Select_Object from '../../../components/Select_Object';
import AutoComplete_Object from '../../../components/AutoComplete_Object';
import Category_OpenAccount from '../../../data/Category_OpenAccount';
import Block_Button from '../../../components/Block_Button';
// Fetch API by Custom Hook
import useFetchAccountOfficer from '../../../customHooks/useFetchAccountOfficer';
import useFetchCurrency from '../../../customHooks/useFetchCurrency';
import useFetchCustomer from '../../../customHooks/useFetchCustomer';
import useFetchProductLine from '../../../customHooks/useFetchProductLine';
import useFetchChargeCode from '../../../customHooks/useFetchChargeCode';
import useFetchRelationCode from '../../../customHooks/useFetchRelationCode';

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
function OpenAccount_Components({suffixID, forceDisable, object}) {
  // Fetch Data 
const accountOfficerList = useFetchAccountOfficer();
const currencyList = useFetchCurrency();
const customerList = useFetchCustomer();
const productLineList = useFetchProductLine();
const chargeCodeList = useFetchChargeCode();
const relationCodeList = useFetchRelationCode();
// Manage Disable
if (forceDisable === undefined) forceDisable = false
const [isDisabled, setIsDisabled] = useState(forceDisable)
const handleClick = () => {
  setIsDisabled(true);
};
      // SET STATE PRODUCT LINE
          
      const [bioProductLine, setBioProductLine] = useState([]);
      // ------------------ FETCH API ---------------

      // GET SUB OBJECT
      let customerID = ''
      if(!object){
        object = ""
      }
      return ( 
        <div
          onClick={() => {
            let category = resolveNameID(Category_OpenAccount,document.getElementById('slt_Category_'+ suffixID).innerText);
            let subProductLine = []
            
            productLineList.map(item => {
              if(item.Category == category)
              subProductLine.push(item)
            })
            setBioProductLine(subProductLine)
          }}
        >
          <Box m={2}>
            {/* Block 1 - 3.1.1 Open Corporate Customer */}
            <Block_Children>
                    <AutoComplete_Object id={'aut_CustomerID_'+suffixID} label='Customer ID' object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' required={true} disabled={isDisabled} defaultValue={object.CustomerID?`${object.CustomerID} - ${object.Customer?.GB_FullName}`:''}/>
                    <Select_Object id={'slt_Category_'+suffixID} label='Category'required={true}object={Category_OpenAccount}length='25' disabled={isDisabled} dataID={object.Category}/>
                    <Select_Object id={'slt_ProductLine_'+suffixID} label='Product Line'object={bioProductLine}length='25' disabled={isDisabled} dataID={object.ProductLine}/>
                    <Select_Object id={'slt_Currency_'+suffixID} label='Currency'required={true}object={currencyList}length='14' disabled={isDisabled} dataID={object.Currency}/>
                    <TextField_Value id={'txt_AccountTitle_'+suffixID} label='Account Title' length='35' disabled={isDisabled} value={object.AccountTitle}/>
                    <TextField_Value id={'txt_ShortTitle_'+suffixID} label='Short Title' length='25' disabled={isDisabled} value={object.ShortTitle}/>
                    <Select_Object id={'slt_AccountOfficer_'+suffixID} label='Account Officer'object={accountOfficerList}length='25' disabled={isDisabled} dataID={object.AccountOfficer}/>
                    <Select_Object id={'slt_ChargeCode_'+suffixID} label='Charge Code'object={chargeCodeList}length='25' disabled={isDisabled} dataID={object.ChargeCode}/>
            </Block_Children>
            {/* Block 2 - 3.1.1 Open Corporate Customer */}
            <Block_Children header2='JOIN HOLDER'>
                    <AutoComplete_Object id={'aut_IDJoinHolder_'+suffixID} label='ID Join Holder' disabled={isDisabled} object={customerList} length='35' params1='customer' params2='id' params3='customer' params4='GB_FullName' required={true} defaultValue={object.JoinHolder?`${object.JoinHolderID} - ${object.JoinHolder?.GB_FullName}`:''}/>
                    <AutoComplete_Object id={'aut_RelationCode_'+suffixID} label='Relation Code' disabled={isDisabled} object={relationCodeList} length='30' params1='id' params2='Name' required={true} defaultValue={object.RelationCode?`${object.RelationCode} - ${object.RELATION?.Name}`:''}/>
                    <TextField_Value id={'txt_Join Notes_'+suffixID} label='Join Notes' length='25' disabled={isDisabled} value={object.JoinNotes}/>
            </Block_Children>
        </Box>

        </div>
     );
}

export default OpenAccount_Components;