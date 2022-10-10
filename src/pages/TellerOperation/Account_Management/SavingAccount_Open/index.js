import { useState } from "react";
import { Box } from "@mui/system";

import Button from '@mui/material/Button';

import Accordian_Children from "../../../../components/Accordian_Children";
import Block_Button from "../../../../components/Block_Button";
import SavingAccount_OpenArrear_Components01 from "./SavingAccount_OpenArrear_Components01";
import SavingAccount_OpenArrear_Components02 from "./SavingAccount_OpenArrear_Components02";
import SavingAccount_OpenArrear_Components03 from "./SavingAccount_OpenArrear_Components03";
import SavingAccount_OpenPeriodic_Components01 from "./SavingAccount_OpenPeriodic_Components01";
import SavingAccount_OpenPeriodic_Components02 from "./SavingAccount_OpenPeriodic_Components02";
import SavingAccount_OpenPeriodic_Components03 from "./SavingAccount_OpenPeriodic_Components03";
import SaveIcon from '@mui/icons-material/Save';
import Account_ForeignExchange from '../../../../data/Account_ForeignExchange'
import Currency_ForeignExchange from '../../../../data/Currency_ForeignExchange'
import SavingAccount_OpenDiscounted_Components01 from "./SavingAccount_OpenDiscounted_Components01";
import SavingAccount_OpenDiscounted_Components02 from "./SavingAccount_OpenDiscounted_Components02";
import SavingAccount_OpenDiscounted_Components03 from "./SavingAccount_OpenDiscounted_Components03";

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
function SavingAccount_Open() {
 // Manage Change Component when on Click
 const [isChangeComponent, setIsChangeComponent] = useState('1')
 const [isChangeComponent01, setIsChangeComponent01] = useState('1')
 const [isChangeComponent02, setIsChangeComponent02] = useState('1')
 // Store data Customer ID
 const [isID, setIsID] = useState('');
return ( 
<div>
     {/* Open Arrear  */}
     <Accordian_Children title='Open Arrear' label='label1'>
            <Block_Button>
                    <Button
                        variant={isChangeComponent == '1' ? 'contained' : 'outlined'}
                        onClick={() => {
                            setIsChangeComponent('1')
                        }}
                    >
                        Details
                    </Button>
                    <Button
                        variant={isChangeComponent == '2' ? 'contained' : 'outlined'}
                        onClick={() => {
                            document.getElementById('txt_Customer_Open_Arrear_SavingAccount02').value = document.getElementById('aut_CustomerID_Open_Arrear_SavingAccount01').value;
                            document.getElementById('txt_Category_Open_Arrear_SavingAccount02').value = document.getElementById('slt_Category_Open_Arrear_SavingAccount01').innerText;
                            document.getElementById('txt_Currency_Open_Arrear_SavingAccount02').value = document.getElementById('slt_Currency_Open_Arrear_SavingAccount01').innerText;
                            setIsChangeComponent('2');
                        }}
                    >
                        All In One Account
                    </Button>
                    <Button
                        variant={isChangeComponent == '3' ? 'contained' : 'outlined'}
                        onClick={() => {
                            setIsChangeComponent('3');
                            let debitAccountID = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_Currency_Open_Arrear_SavingAccount01')?.innerText || '' )
                            document.getElementById('slt_PaymentCCY_Open_Arrear_SavingAccount03').innerText = document.getElementById('slt_Currency_Open_Arrear_SavingAccount01')?.innerText || '' ;
                            document.getElementById('slt_DebitAccount_Open_Arrear_SavingAccount03').innerText = Account_ForeignExchange[debitAccountID-1]?.Name || '';
                        }} 
                    >
                        New Deposit - Term Saving
                    </Button>
            </Block_Button>  
            <Box
                sx={{ 
                    // border: '1px dashed grey' ,
                    display: '',
                    ...(isChangeComponent === '2' && {
                        display: 'none'
                    }),
                    ...(isChangeComponent === '3' && {
                        display: 'none'
                    }),
                }}
            >
                <SavingAccount_OpenArrear_Components01 suffixID='Open_Arrear_SavingAccount01'/>
            </Box>
            <Box
                sx={{ 
                    // border: '1px dashed grey' ,
                    display: '',
                    ...(isChangeComponent === '1' && {
                        display: 'none'
                    }),
                    ...(isChangeComponent === '3' && {
                        display: 'none'
                    }),
                }}
            >
                <SavingAccount_OpenArrear_Components02 suffixID='Open_Arrear_SavingAccount02' />
            </Box>
            <Box
                sx={{ 
                    display: '',
                    ...(isChangeComponent === '1' && {
                        display: 'none'
                    }),
                    ...(isChangeComponent === '2' && {
                        display: 'none'
                    }),
                }}
            >
                <SavingAccount_OpenArrear_Components03 suffixID='Open_Arrear_SavingAccount03' />
            </Box>
            
            <Block_Button>
                        <Button
                            endIcon={<SaveIcon />}
                            variant='contained'
                        >
                                Save
                        </Button>
            </Block_Button>
    </Accordian_Children>
    {/* Open Periodic  */}
    <Accordian_Children title='Open Periodic' label='label1'>  
                <Block_Button>
                    <Button
                        variant={isChangeComponent01 == '1' ? 'contained' : 'outlined'}
                        onClick={() => {
                            setIsChangeComponent01('1')
                        }}
                    >
                        Details
                    </Button>
                    <Button
                        variant={isChangeComponent01 == '2' ? 'contained' : 'outlined'}
                        onClick={() => {
                            document.getElementById('txt_Customer_Open_Periodic_SavingAccount02').value = document.getElementById('aut_CustomerID_Open_Periodic_SavingAccount01').value;
                            document.getElementById('txt_Category_Open_Periodic_SavingAccount02').value = document.getElementById('slt_Category_Open_Periodic_SavingAccount01').innerText;
                            document.getElementById('txt_Currency_Open_Periodic_SavingAccount02').value = document.getElementById('slt_Currency_Open_Periodic_SavingAccount01').innerText;
                            setIsChangeComponent01('2');
                        }}
                    >
                        All In One Account
                    </Button>
                    <Button
                        variant={isChangeComponent01 == '3' ? 'contained' : 'outlined'}
                        onClick={() => {
                            setIsChangeComponent01('3');
                            let debitAccountID = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_Currency_Open_Periodic_SavingAccount01')?.innerText || '' )
                            document.getElementById('slt_PaymentCCY_Open_Periodic_SavingAccount03').innerText = document.getElementById('slt_Currency_Open_Periodic_SavingAccount01')?.innerText || '' ;
                            document.getElementById('slt_DebitAccount_Open_Periodic_SavingAccount03').innerText = Account_ForeignExchange[debitAccountID-1]?.Name || '';
                        }} 
                    >
                        New Deposit - Term Saving
                    </Button>
            </Block_Button>  
            <Box sx={{ display: '',...(isChangeComponent01 === '2' && {display: 'none'}),...(isChangeComponent01 === '3' && {display: 'none'}),}}>
                <SavingAccount_OpenPeriodic_Components01 suffixID='Open_Periodic_SavingAccount01'/>
            </Box>
            <Box sx={{ display: '',...(isChangeComponent01 === '1' && {display: 'none'}),...(isChangeComponent01 === '3' && {display: 'none'}),}}>
                <SavingAccount_OpenPeriodic_Components02 suffixID='Open_Periodic_SavingAccount02' />
            </Box>
            <Box sx={{ display: '',...(isChangeComponent01 === '1' && {display: 'none'}),...(isChangeComponent01 === '2' && {display: 'none'}),}}>
                <SavingAccount_OpenPeriodic_Components03 suffixID='Open_Periodic_SavingAccount03' />
            </Box>
            
            <Block_Button>
                        <Button
                            endIcon={<SaveIcon />}
                            variant='contained'
                        >
                                Save
                        </Button>
            </Block_Button>
    </Accordian_Children>
    {/* Open Discounted  */}
    <Accordian_Children title='Open Discounted' label='label1'>  
            <Block_Button>
                    <Button
                        variant={isChangeComponent02 == '1' ? 'contained' : 'outlined'}
                        onClick={() => {
                            setIsChangeComponent02('1')
                        }}
                    >
                        Deposit - Term Savings
                    </Button>
                    <Button
                        variant={isChangeComponent02 == '2' ? 'contained' : 'outlined'}
                        onClick={() => {setIsChangeComponent02('2');
                        }}
                    >
                        Trand Sav - Deposited
                    </Button>
                    <Button
                        variant={isChangeComponent02 == '3' ? 'contained' : 'outlined'}
                        onClick={() => {
                            setIsChangeComponent02('3');}} 
                    >
                        Disc Interest Payment
                    </Button>
            </Block_Button>  
            <Box sx={{ display: '',...(isChangeComponent02 === '2' && {display: 'none'}),...(isChangeComponent02 === '3' && {display: 'none'}),}}>
                <SavingAccount_OpenDiscounted_Components01 suffixID='Open_Discounted_SavingAccount01'/>
            </Box>
            <Box sx={{ display: '',...(isChangeComponent02 === '1' && {display: 'none'}),...(isChangeComponent02 === '3' && {display: 'none'}),}}>
                <SavingAccount_OpenDiscounted_Components02 suffixID='Open_Discounted_SavingAccount02' />
            </Box>
            <Box sx={{ display: '',...(isChangeComponent02 === '1' && {display: 'none'}),...(isChangeComponent02 === '2' && {display: 'none'}),}}>
                <SavingAccount_OpenDiscounted_Components03 suffixID='Open_Discounted_SavingAccount03' />
            </Box>
            
            <Block_Button>
                        <Button
                            endIcon={<SaveIcon />}
                            variant='contained'
                        >
                                Save
                        </Button>
            </Block_Button>
    </Accordian_Children>
</div>

);
}

export default SavingAccount_Open;