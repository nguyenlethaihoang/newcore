import Block_Spacing from "../../../../components/Block_Spacing"
import Block_Children from "../../../../components/Block_Children"
import TextField_Value from "../../../../components/TextField_Value";
import { useState } from "react";
import Select_Object from "../../../../components/Select_Object";
import DataPicker_Day from "../../../../components/DatePicker_Day";
import Block_Button from "../../../../components/Block_Button";
import SaveIcon from '@mui/icons-material/Save'; 
import { Button, IconButton } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function PaymentFrequency_Components({suffixID, forceDiabled, object}) {
    if (forceDiabled === undefined) forceDiabled = false
    const [isDisabled, setIsDisabled] = useState(forceDiabled)
return ( 
<div>
<Block_Spacing>
    {/* Block 1 */}
    <Block_Children>
        <TextField_Value id={'txt_ReferenceID_'+suffixID} label='Reference ID' length='30' disabled={isDisabled} />
        <Select_Object id={'slt_Company_'+suffixID}label='Company' noValue={true} length='30'/>
    </Block_Children>
    {/* Block 2 */}
    <Block_Children header2='Salary Frequency'>
        <TextField_Value id={'txt_GBIMPORTFILE_'+suffixID} label='GB IMPORT FILE' length='30' disabled={isDisabled} />
    </Block_Children>
    {/* Block 3 */}
    <Block_Children>
        <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='30' disabled={isDisabled} />
        <TextField_Value id={'txt_TotalDebitAmt_'+suffixID} label='Total Debit Amt' length='30' disabled={isDisabled} />
        <DataPicker_Day id={'dp_Fequency_'+suffixID}label='Fequency' disabled={isDisabled} length='30'/>
        <Select_Object id={'slt_Term_'+suffixID}label='Term' object={Term} length='30'/>
        <DataPicker_Day id={'dp_EndDate_'+suffixID}label='End Date' disabled={isDisabled} length='30'/>
        <TextField_Value id={'txt_OrderingCust_'+suffixID} label='Ordering Cust' length='30' disabled={isDisabled} />
    </Block_Children>
    <Block_Children header2='CREDIT INFORMATION'>
        <Select_Object id={'slt_None_'+suffixID}label='' noValue={true} length='30'/>
        <TextField_Value id={'txt_None1_'+suffixID} label='' length='30' disabled={isDisabled} />
        <TextField_Value id={'txt_None2_'+suffixID} label='' length='30' disabled={isDisabled} />
    </Block_Children>
    <Block_Button>
        <IconButton><SaveIcon /></IconButton>
        <Button><RestartAltIcon /></Button>

    </Block_Button>
</Block_Spacing>
</div>
);
}

export default PaymentFrequency_Components;

const Term = [
    {id: 1, Name: 'Week'},
    {id: 2, Name: 'Month'},
]