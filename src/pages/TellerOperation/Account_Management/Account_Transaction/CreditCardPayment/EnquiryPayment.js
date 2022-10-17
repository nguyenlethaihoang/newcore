import { Button } from "@mui/material";
import { useState } from "react";
import Block_Button from "../../../../../components/Block_Button";
import Block_Children from "../../../../../components/Block_Children";
import Block_Spacing from "../../../../../components/Block_Spacing";
import Select_Object from "../../../../../components/Select_Object";
import TextField_Value from "../../../../../components/TextField_Value";
import Currency_ForeignExchange from "../../../../../data/Currency_ForeignExchange";

function EnquiryPayment({suffixID, object, forceDisabled}) {
    // Manage disable
    const [isDisabled, setIsDisabled] = useState(forceDisabled)
return ( 
<div>
<Block_Spacing>
    <Block_Children>
        <Select_Object id={'slt_PaymentType_'+suffixID}label='Payment Type'object={PaymentType} length='40'  disabled={isDisabled} />
    </Block_Children>
    <Block_Children>
        <TextField_Value id={'txt_ReferenceID_'+suffixID} label='Reference ID' length='25' disabled={isDisabled}  />
        <TextField_Value id={'txt_DebitAccountID_'+suffixID} label='Debit Account ID' length='25' disabled={isDisabled}  />
        <Select_Object id={'slt_DebitCurrency_'+suffixID}label='Debit Currency'object={Currency_ForeignExchange} length='25'  disabled={isDisabled} />
        <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='25' disabled={isDisabled}  />
        <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='23' disabled={isDisabled}  />
        <TextField_Value id={'txt_LegalID_'+suffixID} label='Legal ID' length='15' disabled={isDisabled}  />
        <TextField_Value id={'txt_DebitAmount_'+suffixID} label='Debit Amount' length='20' disabled={isDisabled}  />
        <TextField_Value id={'txt_From_'+suffixID} label='From' length='20' disabled={isDisabled}  />
        <TextField_Value id={'txt_To_'+suffixID} label='To' length='20' disabled={isDisabled}  />
    </Block_Children>
    <Block_Button>
        <Button
            variant='contained'
        >
            Search
        </Button>
    </Block_Button>
</Block_Spacing>
</div>
);
}

export default EnquiryPayment;

const PaymentType = [
    {id: 1, Name: 'Collection for Credit Card Payment'},
    {id: 2, Name: 'Transfer for Credit Card Payment'},
]