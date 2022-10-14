import { useState } from "react";
import Block_Children from "../../../../../components/Block_Children";
import Block_Info from "../../../../../components/Block_Info";
import Block_Spacing from "../../../../../components/Block_Spacing";
import TextField_Value from "../../../../../components/TextField_Value";

function CollectionPayment({suffixID, object, forceDisable}) {
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable);
    // Init Params
    if (object === undefined) object = "";
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
</div>
</Block_Spacing>
);
}

export default CollectionPayment;