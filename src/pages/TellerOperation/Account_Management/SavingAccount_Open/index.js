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
import Category_SavingAccount from '../../../../data/Category_SavingAccount'
import Product_SavingAccount from "../../../../data/Product_SavingAccount";
import useFetchTermSaving from "../../../../customHooks/useFetchTermSaving";
import Message_String from "../../../../components/Message_String";
import Alert_String from "../../../../components/Alert_String";
import useFetchRelationCode from "../../../../customHooks/useFetchRelationCode";
import useFetchAccountOfficer from "../../../../customHooks/useFetchAccountOfficer";
import Close_Online from "../../../../data/Close_Online";
import ProductLine_SavingAccount from "../../../../data/ProductLine_SavingAccount";
import savingAccountApi from '../../../../apis/savingAccountApi';
import Product_Periodic_SavingAccount from "../../../../data/Product_Periodic_SavingAccount";


// ----- MAIN -----
function SavingAccount_Open() {
 // Notification of Open Arrear
 const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
 const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
 const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
 // Notification of Open Periodic
 const [isNotification_Success_02, setIsNotification_Success_02] = useState(false)
 const [isNotification_Failed_02, setIsNotification_Failed_02] = useState(false)
 const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)
 // Notification of Open Discounted
 const [isNotification_Success_03, setIsNotification_Success_03] = useState(false)
 const [isNotification_Failed_03, setIsNotification_Failed_03] = useState(false)
 const [isNotification_Message_03, setIsNotification_Message_03] = useState(false)
 // Manage Change Component when on Click
 const [isChangeComponent, setIsChangeComponent] = useState('1')
 const [isChangeComponent01, setIsChangeComponent01] = useState('1')
 const [isChangeComponent02, setIsChangeComponent02] = useState('1')
 // Store data Customer ID
 const [isID, setIsID] = useState('');
 // Fetch Data
 const termSavingList =  useFetchTermSaving();
 const relationCodeList = useFetchRelationCode();
 const accountOfficerList = useFetchAccountOfficer();



return ( 
<div>
     {/* 1. Open Arrear  */}
     <Accordian_Children title='1. Open Arrear' label='label1'>
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
                            document.getElementById('txt_WorkingAccount_Open_Arrear_SavingAccount02').value = document.getElementById('aut_CustomerID_Open_Arrear_SavingAccount01').value;
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
                            document.getElementById('txt_CustomerID_Open_Arrear_SavingAccount03').value = resolveStrtoID(document.getElementById('aut_CustomerID_Open_Arrear_SavingAccount01').value)
                            document.getElementById('txt_Narrative02_Open_Arrear_SavingAccount03').value = document.getElementById('slt_Currency_Open_Arrear_SavingAccount01').innerText
                            document.getElementById('txt_Narrative03_Open_Arrear_SavingAccount03').value = 'Amount = ' + document.getElementById('txt_Principal_Open_Arrear_SavingAccount02').value
                            document.getElementById('txt_AccountInLCY_Open_Arrear_SavingAccount03').value = document.getElementById('txt_Principal_Open_Arrear_SavingAccount02').value
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
                            onClick={async() => {
                                // Temp object for checking
                                let params = {}
                                // Params force
                                params.CustomerID =  resolveStrtoID(document.getElementById('aut_CustomerID_Open_Arrear_SavingAccount01').value)
                                params.Category = resolveNameID(Category_SavingAccount,document.getElementById('slt_Category_Open_Arrear_SavingAccount01').innerText)
                                params.AccountTitle = document.getElementById('txt_AccountTitle_Open_Arrear_SavingAccount01').value
                                params.Currency = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_Currency_Open_Arrear_SavingAccount01').innerText) 
                                params.Product = resolveNameID(Product_SavingAccount, document.getElementById('slt_Product_Open_Arrear_SavingAccount02').innerText )
                                params.Principal = document.getElementById('txt_Principal_Open_Arrear_SavingAccount02').value
                                params.Term = resolveNameID(termOnly, document.getElementById('slt_Term_Open_Arrear_SavingAccount02').innerText)
                                // Params normal
                                params.ProductLine = resolveNameID(ProductLine_SavingAccount,document.getElementById('slt_ProductLine_Open_Arrear_SavingAccount01').innerText)
                                params.ShortTitle = document.getElementById('txt_ShortTitle_Open_Arrear_SavingAccount01').value
                                params.JoinHolder = resolveStrtoID(document.getElementById('aut_JointA/CHolder_Open_Arrear_SavingAccount01').value)
                                params.Relationship = resolveNameID(relationCodeList,document.getElementById('slt_Relationship_Open_Arrear_SavingAccount01').innerText)
                                params.Notes = document.getElementById('txt_Notes_Open_Arrear_SavingAccount01').value
                                params.AccountOfficer = resolveNameID(accountOfficerList,document.getElementById('slt_AccountOfficer_Open_Arrear_SavingAccount01').innerText)
                                params.InterestRate = document.getElementById('txt_Interest Rate_Open_Arrear_SavingAccount02').value
                                params.RolloverPR = resolveNameID(Close_Online,document.getElementById('slt_RolloverPROnly_Open_Arrear_SavingAccount02').innerText)
                                params.PaymentNumber = document.getElementById('txt_PaymentNumber_Open_Arrear_SavingAccount03').value != "" ? document.getElementById('txt_PaymentNumber_Open_Arrear_SavingAccount03').value : genPaymentNumber();
                                params.Teller = document.getElementById('txt_ForTeller_Open_Arrear_SavingAccount03').value
                                // params.DebitAccount = resolveNameID(Currency_ForeignExchange,document.getElementById('slt_PaymentCCY_Open_Arrear_SavingAccount03').innerText)
                                params.PaymentCCY = resolveNameID(Currency_ForeignExchange,document.getElementById('slt_PaymentCCY_Open_Arrear_SavingAccount03').innerText) % 5 + 1
                                params.Narrative = document.getElementById('txt_Narative_Open_Arrear_SavingAccount03').value
                                // Check error and store it by Array
                                arrError = []
                                if(!params.CustomerID) arrError.push('Customer ID is Required')
                                if(!params.Category) arrError.push('Category is Required')
                                if(!params.AccountTitle) arrError.push('Account Title is Required')
                                if(!params.Currency) arrError.push('Currency is Required')
                                if(!params.Product) arrError.push('Product is Required')
                                if(!params.Principal) arrError.push('Principal is Required')
                                if(!params.Term) arrError.push('Term is Required')
                                if(arrError.length != 0) {
                                    setIsNotification_Message_01(true)
                                    setTimeout(() => {setIsNotification_Message_01(false)}, 4000);
                                } else {
                                    const res = await savingAccountApi.postCreateArrear(params);
                                    if(res != 'fail') {
                                        setIsNotification_Success_01(true); 
                                        setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                                        // clearTextFields()
                                } else {
                                        setIsNotification_Failed_01(true)
                                        setTimeout(() => {setIsNotification_Failed_01(false)}, 5000); 
                                }
                                }
                            }}
                        >
                                Save
                        </Button>
            </Block_Button>
            {isNotification_Success_01 && <Message_String type='success' text='Open Arrear Saving Account Successfully'/>} 
            {isNotification_Failed_01 && <Message_String type='error' text='Open Arrear Saving Account Failed'/>}  
            {isNotification_Message_01 && <Alert_String arrError={arrError}/>} 
    </Accordian_Children>
    {/* 2. Open Periodic  */}
    <Accordian_Children title='2. Open Periodic' label='label1'>  
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
                            onClick={async() => {
                                // Temp object for checking
                                let params = {}
                                // Params force
                                params.CustomerID =  resolveStrtoID(document.getElementById('aut_CustomerID_Open_Periodic_SavingAccount01').value)
                                params.Category = resolveNameID(Category_SavingAccount,document.getElementById('slt_Category_Open_Periodic_SavingAccount01').innerText)
                                params.AccountTitle = document.getElementById('txt_AccountTitle_Open_Periodic_SavingAccount01').value
                                params.Currency = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_Currency_Open_Periodic_SavingAccount01').innerText) % 5 + 1
                                params.Product = resolveNameID(Product_Periodic_SavingAccount, document.getElementById('slt_Product_Open_Periodic_SavingAccount02').innerText )
                                params.Principal = document.getElementById('txt_Principal_Open_Periodic_SavingAccount02').value
                                params.Term = resolveNameID(termSavingList, document.getElementById('slt_Term_Open_Periodic_SavingAccount02').innerText)
                                // Params normal
                                params.ProductLine = resolveNameID(ProductLine_SavingAccount,document.getElementById('slt_ProductLine_Open_Periodic_SavingAccount01').innerText)
                                params.ShortTitle = document.getElementById('txt_ShortTitle_Open_Periodic_SavingAccount01').value
                                params.JoinHolder = resolveStrtoID(document.getElementById('aut_JointA/CHolder_Open_Periodic_SavingAccount01').value)
                                params.Relationship = resolveNameID(relationCodeList,document.getElementById('slt_Relationship_Open_Periodic_SavingAccount01').innerText)
                                params.Notes = document.getElementById('txt_Notes_Open_Periodic_SavingAccount01').value
                                params.AccountOfficer = resolveNameID(accountOfficerList,document.getElementById('slt_AccountOfficer_Open_Periodic_SavingAccount01').innerText)
                                params.InterestRate = document.getElementById('txt_InterestRate_Open_Periodic_SavingAccount02').value
                                params.PaymentNumber = document.getElementById('txt_PaymentNumber_Open_Periodic_SavingAccount03').value != "" ? document.getElementById('txt_PaymentNumber_Open_Periodic_SavingAccount03').value : genPaymentNumber();
                                params.Teller = document.getElementById('txt_ForTeller_Open_Periodic_SavingAccount03').value
                                params.PaymentCCY = resolveNameID(Currency_ForeignExchange,document.getElementById('slt_PaymentCCY_Open_Periodic_SavingAccount03').innerText) % 5 + 1
                                params.Narrative = document.getElementById('txt_Narative_Open_Periodic_SavingAccount03').value
                                // Check error and store it by Array
                                arrError = []
                                if(!params.CustomerID) arrError.push('Customer ID is Required')
                                if(!params.Category) arrError.push('Category is Required')
                                if(!params.AccountTitle) arrError.push('Account Title is Required')
                                if(!params.Currency) arrError.push('Currency is Required')
                                if(!params.Product) arrError.push('Product is Required')
                                if(!params.Principal) arrError.push('Principal is Required')
                                if(!params.Term) arrError.push('Term is Required')
                                if(arrError.length != 0) {
                                    setIsNotification_Message_02(true)
                                    setTimeout(() => {setIsNotification_Message_02(false)}, 4000);
                                }
                                else {
                                    const res = await savingAccountApi.postCreatePeriodic(params);
                                    if(res != 'fail') {
                                        setIsNotification_Success_02(true); 
                                        setTimeout(() => {setIsNotification_Success_02(false)}, 5000);
                                        // clearTextFields()
                                } else {
                                        setIsNotification_Failed_01(true)
                                        setTimeout(() => {setIsNotification_Failed_02(false)}, 5000); 
                                }
                                }
                            }}
                        >
                                Save
                        </Button>
            </Block_Button>
            {isNotification_Success_02 && <Message_String type='success' text='Open Periodic Saving Account Successfully'/>} 
            {isNotification_Failed_02 && <Message_String type='error' text='Open Periodic Saving Account Failed'/>}  
            {isNotification_Message_02 && <Alert_String arrError={arrError}/>} 
    </Accordian_Children>
    {/* 3. Open Discounted  */}
    <Accordian_Children title='3. Open Discounted' label='label1'>  
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

let arrError = []
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
  // rersolve from text to id with Name Customer
  function resolveStrtoID(text) {
    let subArr = text.toString().split(" - ");
    let subStr = subArr[0]
    if(subStr){
        return subStr
    }
    return null
  }

  // Function Generate Payment Number
  function genPaymentNumber() {
        let str = 'TT/'
        for (let i = 0; i < 5; i++) str +=  Math.floor(Math.random() * 10).toString()
        str += '/'
        for (let i = 0; i < 5; i++) str +=  Math.floor(Math.random() * 10).toString()
        return str
  }


export default SavingAccount_Open;


const termOnly = [
    {id: 1, Name: '1 month'},
    {id: 2, Name: '2 month'},
    {id: 3, Name: '3 month'},
    {id: 4, Name: '6 month'},
    {id: 5, Name: '9 month'},
    {id: 6, Name: '12 month'},
    {id: 7, Name: '24 month'},
    {id: 8  , Name: '36 month'},
]