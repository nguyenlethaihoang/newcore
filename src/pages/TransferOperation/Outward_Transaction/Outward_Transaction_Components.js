import { useState } from "react";
import Block_Children from "../../../components/Block_Children";
import Select_Object from "../../../components/Select_Object";
import TextField_Value from "../../../components/TextField_Value";
import BenCom_Outward from "../../../data/BenCom_Outward";
import Currency_ForeignExchange from "../../../data/Currency_ForeignExchange";
import ProductID from "../../../data/ProductID";
import TransactionType from "../../../data/TransactionType";

function Outward_Transaction_Components({suffixID, forceDisable, object}) {
    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable)
return ( 
<div>
    {/* Block 1 */}
<Block_Children>
    <Select_Object id={'slt_ProductID_'+suffixID} label='Product ID' object={ProductID} length='40' disabled={isDisabled}/>
    <Select_Object id={'slt_TransactionType_'+suffixID} label='Transaction Type' object={TransactionType} length='20' disabled={isDisabled}/>
    <TextField_Value id={'txt_SendingName_'+suffixID} label='Sending Name' length='40' disabled={isDisabled} />
    <TextField_Value id={'txt_RecevingLegalID_'+suffixID} label='Receving Legal ID' length='20' disabled={isDisabled} />
    <TextField_Value id={'txt_ReceivingName_'+suffixID} label='Receiving Name' length='40' disabled={isDisabled} />
    <TextField_Value id={'txt_BenAccount_'+suffixID} label='Ben Account' length='40' disabled={isDisabled} />
    <TextField_Value id={'txt_ReferenceID_'+suffixID} label='Reference ID' length='20' disabled={isDisabled} />
    <Select_Object id={'slt_BenCom_'+suffixID}label='Ben Com' object={BenCom_Outward}length='40' disabled={isDisabled}/>
    <Select_Object id={'slt_Currency_'+suffixID}label='Currency' object={Currency_ForeignExchange}length='20' disabled={isDisabled}/>
    <TextField_Value id={'txt_Amount_'+suffixID} label='Amount' length='20' disabled={isDisabled} />
    <TextField_Value id={'txt_From_'+suffixID} label='From' length='20' disabled={isDisabled} />
    <TextField_Value id={'txt_To_'+suffixID} label='To' length='20' disabled={isDisabled} />
</Block_Children>

</div>
);
}

export default Outward_Transaction_Components;