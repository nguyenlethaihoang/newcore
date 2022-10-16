import { useState } from "react";
import Block_Children from "../../../../../components/Block_Children";
import TextField_Value from "../../../../../components/TextField_Value";

function TransferPayment({suffixID, forceDisable}) {
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable);
return ( 
<div>
    <Block_Children header2='DEBIT INFORMATION'>
        <TextField_Value id={'txt_Customer_'+suffixID} label='Customer' length='25' disabled={isDisabled}  />
    
    </Block_Children>  
    <Block_Children header2='CREDIT INFORMATION'>
    </Block_Children>
    <Block_Children>

    </Block_Children>
</div>
);
}

export default TransferPayment;