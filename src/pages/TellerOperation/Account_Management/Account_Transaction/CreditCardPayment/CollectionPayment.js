import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import Block_Children from "../../../../../components/Block_Children";
import Block_Info from "../../../../../components/Block_Info";
import Block_Button from "../../../../../components/Block_Button";
import Block_Spacing from "../../../../../components/Block_Spacing";
import TextField_Value from "../../../../../components/TextField_Value";
import DebitAccount_Full_List from "../../../../../data/DebitAccount_Full_List";
import CreditAccount_Full_List from "../../../../../data/CreditAccount_Full_List";
import Currency_ForeignExchange from "../../../../../data/Currency_ForeignExchange";
import Select_Object from "../../../../../components/Select_Object";
import Close_Online from "../../../../../data/Close_Online";

function CollectionPayment({suffixID, object, forceDisable}) {
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable);
    // Init Params
    if (object === undefined) object = "";
    // Form control
    const [isSelected, setIsSelected] = useState(1);
    const handleChange = (event) => {setIsSelected(event.target.value); }
return ( 
<Block_Spacing>
<div>
    {/* Block 1 */}
    <Block_Children>
        <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='25' required={true} disabled={isDisabled} value={object != "" ? object.FirstName : ""} />
    </Block_Children>
    {/* Block 2 Info */}
    <Block_Info>
        <Block_Children>
            <TextField_Value id={'txt_FullName_'+suffixID} label='Full Name' length='35' disabled={true} noDown={true}/>
            <TextField_Value id={'txt_Address_'+suffixID} label='Address' length='40' disabled={true} noDown={true}/>
            <TextField_Value id={'txt_LegalID_'+suffixID} label='Legal ID' length='15' disabled={true} noDown={true}/>
            <TextField_Value id={'txt_Telephone_'+suffixID} label='Telephone' length='15' disabled={true} noDown={true}/>
            <TextField_Value id={'txt_IssueDate_'+suffixID} label='Issue Date' length='25' disabled={true} noDown={true}/>
            <TextField_Value id={'txt_IssuePlace_'+suffixID} label='Issue Place' length='25' disabled={true} noDown={true}/>
        </Block_Children>
    </Block_Info>
    {/* Block 3 */}
    <Block_Children>
        <TextField_Value id={'txt_TellerID_'+suffixID} label='Teller ID' length='25' required={true} disabled={isDisabled} value={object != "" ?"" : 'vietvictory'} />
    </Block_Children>
    {/* Block 4 */}
    <Block_Children>
        <FormControl sx={{ m: 0, minWidth: "25ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblDebitCurrency">Debit Currency</InputLabel>
          <Select
          labelId="idlblDebitCurrency"
          label='Debit Currency'
          id={"slt_DebitCurrency_"+suffixID}
          value={isSelected}
          disabled={isDisabled}
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
        <FormControl sx={{ m: 0, minWidth: "25ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblDebitAccount">Debit Account</InputLabel>
          <Select
          labelId="idlblDebitAccount"
          label='Debit Account'
          id={"slt_DebitAccount_"+suffixID}
          value={isSelected}
          disabled={isDisabled}
          onChange={handleChange}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {DebitAccount_Full_List.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
        </FormControl>
        <TextField_Value id={'txt_DebitAmt_'+suffixID} label='Debit Amt' length='25' disabled={isDisabled}  />
    </Block_Children>
    {/* Block 5  */}
    <Block_Children>
        <FormControl sx={{ m: 0, minWidth: "25ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblCreditAccount">Credit Account</InputLabel>
          <Select
          labelId="idlblCreditAccount"
          label='Credit Account'
          id={"slt_CreditAccount_"+suffixID}
          value={isSelected}
          disabled={isDisabled}
          onChange={handleChange}
          >
          <MenuItem value="">
               <em>None</em>
          </MenuItem>
          {CreditAccount_Full_List.map((data, index) => {
               return(
                    <MenuItem value={data.id} key={data.id}>{data.Name}</MenuItem>
               )
          })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 0, minWidth: "25ch", mt: '20px', mr: '20px' }}>
          <InputLabel id="idlblCreditCurrency">Credit Currency</InputLabel>
          <Select
          labelId="idlblCreditCurrency"
          label='Credit Currency'
          id={"slt_CreditCurrency_"+suffixID}
          value={isSelected}
          disabled={isDisabled}
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
        <TextField_Value id={'txt_DealRate_'+suffixID} label='Deal Rate' length='25' disabled={isDisabled}  />
    </Block_Children>
    <Block_Children>
        <Block_Info>
            <TextField_Value id={'txt_CreditAmount_'+suffixID} label='Credit Amount' length='25' disabled={true}  />
        </Block_Info>
    </Block_Children>
    <Block_Children>
        <TextField_Value id={'txt_CreditCardNumber_'+suffixID} label='Credit Card Number' length='25' disabled={isDisabled}  />
        <Select_Object id={'slt_WaiveCharges_'+suffixID}label='Waive Charges?'object={Close_Online}length='25'  disabled={isDisabled} />
        <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='40' disabled={isDisabled}  />
        
    </Block_Children>   
    <Block_Button>
        <Button
            variant="contained"
        >
            Save
        </Button>
    </Block_Button>
</div>
</Block_Spacing>
);
}

export default CollectionPayment;