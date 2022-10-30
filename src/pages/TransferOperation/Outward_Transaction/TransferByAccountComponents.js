import { Button } from "@mui/material";
import { useState } from "react";
import debitAccountApi from "../../../apis/debitAccountApi";
import Block_Children from "../../../components/Block_Children";
import Block_Info from "../../../components/Block_Info";
import DataPicker_Day from "../../../components/DatePicker_Day";
import Select_Object from "../../../components/Select_Object";
import TextField_Value from "../../../components/TextField_Value";
import useFetchCity from "../../../customHooks/useFetchCity";
import BenCom_Outward from "../../../data/BenCom_Outward";
import Close_Online from "../../../data/Close_Online";
import Currency_ForeignExchange from "../../../data/Currency_ForeignExchange";
import ProductID from "../../../data/ProductID";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import BankCode from "../../../data/BankCode";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import currencyList_Basic from "../../../data/currencyList_Basic";


function TransferByAccountComponents({suffixID, object, forceDisable}) {
    const [debitAccountList, setDebitAccountList] = useState([]);

    const [colorState, setColorState] = useState(0)
    const [isFound, setIsFound] = useState(false)
    const [colorState01, setColorState01] = useState(0)
    const [isFound01, setIsFound01] = useState(false)

    const cityList = useFetchCity();
    const [isDisabledLevel2, setIsDisabledLevel2] = useState(false)

    const [isValueBankCode, setIsValueBankCode] = useState([])
    

    if (forceDisable === undefined) forceDisable = false;
    const [isDisabled, setIsDisabled] = useState(forceDisable)
return ( 
<div
    onClick={() => {
        // Check Disable Ben Account
        if (document.getElementById('slt_ProductID_TransferByAccount').innerText == '1000 - Điện CMND')
            setIsDisabledLevel2(true)
        else 
            setIsDisabledLevel2(false)
        // Update array for Bank Code
        if (document.getElementById('slt_Province_TransferByAccount').innerText.length != 1)
        {
            let type = parseInt(document.getElementById('slt_Province_TransferByAccount').innerText.split(" - ")[0]) ?? 0;
            setIsValueBankCode(objectBankCode(BankCode, type));
        }
        // count for Getting debit account
        if (countGetDebitAccountTemp < countGetDebitAccount) {
            // Check real-time Debit Account 
            const fetchDebitAccountList = async () => {
                const response = await debitAccountApi.getAll();
                setDebitAccountList(response.data) 
            }
            fetchDebitAccountList();
            countGetDebitAccountTemp++;
        }
        // Update Credit account
        if (document.getElementById('slt_BenCom_TransferByAccount').innerText.length != 1 && document.getElementById('slt_ProductID_TransferByAccount').innerText.length != 1) {
            let sum = 0
            let valueTemp = `0${document.getElementById('slt_BenCom_TransferByAccount').innerText[6]}.`
            for (let i = 0; i < document.getElementById('slt_BenCom_TransferByAccount').innerText.length; i++)
                sum += document.getElementById('slt_BenCom_TransferByAccount').innerText[i].charCodeAt(0)
            for (let i = 1; i <= 9 - sum.toString().length; i++)
                valueTemp += '0'
            valueTemp += sum.toString() + '.'
            valueTemp += document.getElementById('slt_ProductID_TransferByAccount').innerText[0]
            document.getElementById('txt_CreditAccount_TransferByAccount').value = valueTemp;
        }
    }}
    onChange={() => {
        // count for Getting debit account
        if (countGetDebitAccountTemp < countGetDebitAccount) {
            // Check real-time Debit Account 
            const fetchDebitAccountList = async () => {
                const response = await debitAccountApi.getAll();
                setDebitAccountList(response.data) 
            }
            fetchDebitAccountList();
            countGetDebitAccountTemp++;
        }
    }}
>
    {/* Block 1 */}
<Block_Children header2='DEBIT INFORMATION'>
    <Select_Object id={'slt_ProductID_'+suffixID}label='Product ID'required={true}object={ProductID}length='40' disabled={isDisabled}/>
    <Select_Object id={'slt_BenCom_'+suffixID}label='Ben Com'required={true}object={BenCom_Outward}length='40' disabled={isDisabled}/>
    <TextField_Value id={'txt_CreditAccount_'+suffixID} label='Credit Account' length='40' disabled={true} noDown={true}/>
    <TextField_Value id={'txt_Amount_'+suffixID} label='Amount' length='40' disabled={isDisabled} number={true}/>
</Block_Children>    
<Block_Children>
    <TextField_Value id={'txt_DebitAccount_'+suffixID} label='Debit Account' length='40' disabled={isDisabled}/>
    <div
            style={{display: 'flex',
            alignItems: 'center',
            paddingTop: '20px',
            paddingLeft: '20px',
            flexWrap: 'wrap',
            columnGap: '20px'}}
        >
            <Button
            variant='contained'
            disabled={isDisabled}
            endIcon={<PersonSearchIcon />}
            onClick={() => {
                let data = []
                let temp 
                const fetchDebitAccountList = async () => {
                    const response = await debitAccountApi.getAll();
                    setDebitAccountList(response.data) 
                }
                fetchDebitAccountList();
                debitAccountList.map((value, index) => {
                    if (value.Account == document.getElementById('txt_DebitAccount_TransferByAccount').value){
                        temp = value;     
                    }
                })
                // Thanh cong
                if (temp != null) {
                    setColorState(1)
                    setIsFound(true)
                    document.getElementById('txt_SendingName_TransferByAccount').value = temp?.Customer?.GB_FullName
                    document.getElementById('txt_IDTaxCode_TransferByAccount').value = temp?.Customer?.DocID
                    document.getElementById('txt_CustomerBalance_TransferByAccount').value = temp?.WorkingAmount
                    document.getElementById('txt_SendingAddress_TransferByAccount').value = temp?.Customer?.GB_Street + ', ' + temp?.Customer?.GB_Towndist
                    document.getElementById('txt_Currency_TransferByAccount').value = currencyList_Basic[temp?.Currency-1].Name;
                }
                // That bai
                else {
                    setColorState(2)
                    setIsFound(false)
                }
            }}
        >
            Confirm
        </Button>
        
        {colorState == 1 && <div style={{display:'flex', color: 'green'}}><DoneIcon sx={{color:'green'}} /></div>}
        {colorState == 2 &&  <div style={{display:'flex', color: 'red'}}><CloseIcon sx={{color:'red'}} />Customer Account does not exist</div>}
        </div>
</Block_Children>
<Block_Info>
    <TextField_Value id={'txt_SendingName_'+suffixID} label='Sending Name' length='40' disabled={isDisabled} required={true} noDown={true}/>
    <TextField_Value id={'txt_SendingAddress_'+suffixID} label='Sending Address' length='40' disabled={isDisabled} required={true} noDown={true}/>
    <TextField_Value id={'txt_IDTaxCode_'+suffixID} label='ID/Tax Code' length='20' disabled={isDisabled} noDown={true}/>
    <TextField_Value id={'txt_CustomerBalance_'+suffixID} label='Customer Balance' length='40' disabled={true} noDown={true}/>
    <TextField_Value id={'txt_Currency_'+suffixID} label='Currency' length='20' disabled={true} noDown={true} required={true}/>
</Block_Info>
    
{/* Block 2 */}
<Block_Children header2='BENEFICIARY INFORMATION'>
    <TextField_Value id={'txt_BenAccount_'+suffixID} label='Ben Account' length='40' disabled={isDisabledLevel2} />
    <div
            style={{display: 'flex',
            alignItems: 'center',
            paddingTop: '20px',
            paddingLeft: '20px',
            flexWrap: 'wrap',
            columnGap: '20px'}}
        >
            <Button
            variant='contained'
            disabled={isDisabledLevel2}
            endIcon={<PersonSearchIcon />}
            onClick={() => {
                let data = []
                let temp 
                const fetchDebitAccountList = async () => {
                    const response = await debitAccountApi.getAll();
                    setDebitAccountList(response.data) 
                }
                fetchDebitAccountList();
                console.log(debitAccountList)
                debitAccountList.map((value, index) => {
                    if (value.Account == document.getElementById('txt_BenAccount_TransferByAccount').value){
                        temp = value;     
                    }
                })
                // Thanh cong
                if (temp != null) {
                    setColorState01(1)
                    setIsFound01(true)
                    document.getElementById('txt_ReceivingName_TransferByAccount').value = temp?.Customer?.GB_FullName
                    document.getElementById('txt_IDCard_TransferByAccount').value = temp?.Customer?.DocID
                    document.getElementById('txt_IssuePlace_TransferByAccount').value = temp?.Customer?.DocIssuePlace
                    document.getElementById('txt_Phone_TransferByAccount').value = temp?.Customer?.PhoneNumber
                }
                // That bai
                else {
                    setColorState01(2)
                    setIsFound01(false)
                }
            }}
        >
            Confirm
        </Button>
        
        {colorState01 == 1 && <div style={{display:'flex', color: 'green'}}><DoneIcon sx={{color:'green'}} /></div>}
        {colorState01 == 2 &&  <div style={{display:'flex', color: 'red'}}><CloseIcon sx={{color:'red'}} />Customer Account does not exist</div>}
        </div>
</Block_Children>

<Block_Info>
    <TextField_Value id={'txt_ReceivingName_'+suffixID} label='Receiving Name' length='40' disabled={isDisabled} required={true} noDown={true}/>
    <TextField_Value id={'txt_IDCard_'+suffixID} label='ID Card' length='20' disabled={isDisabled} noDown={true}/>
    <TextField_Value id={'txt_IssuePlace_'+suffixID} label='Issue Place' length='20' disabled={isDisabled} noDown={true}/>
    <TextField_Value id={'txt_Phone_'+suffixID} label='Phone' length='20' disabled={isDisabled} noDown={true}/>
    <DataPicker_Day id={'dp_IsssueDate_'+suffixID}label='Isssue Date' disabled={isDisabled} />
</Block_Info>

{/* Block 3 */}
<Block_Children>
    
    <Select_Object id={'slt_Province_'+suffixID}label='Province' object={cityList}length='40' disabled={isDisabled}/>
    <Select_Object id={'slt_BankCode_'+suffixID}label='Bank Code' object={isValueBankCode} length='62.5' disabled={isDisabled}/>
    <TextField_Value id={'txt_BankName_'+suffixID} label='Bank Name' length='40' disabled={isDisabled} />  
</Block_Children>
{/* Block 4 */}
<Block_Children>

    
</Block_Children>
{/* Block 5 */}
<Block_Children header2='OTHER INFORMATION'>
    <TextField_Value id={'txt_Teller_'+suffixID} label='Teller' length='40' disabled={isDisabled} value='vietvictory'/>
    <TextField_Value id={'txt_Narrative_'+suffixID} label='Narrative' length='43' disabled={isDisabled} required={true}/>
    <Select_Object id={'slt_WaiveCharges_'+suffixID}label='Waive Charges?'object={Close_Online}length='20' disabled={isDisabled}/>
</Block_Children>
</div>
);
}

export default TransferByAccountComponents;

function objectBankCode(object, type) {
    let objTmp = []
    object.map((value, index) => {
        {
            let tmp = {};
            if (value.type == type) {
                tmp.id = value.id;
                tmp.Name = value.Name
                objTmp.push(tmp);
            }
        }

    }) 
    return objTmp
}


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

  const countGetDebitAccount = 5;
  let countGetDebitAccountTemp = 0;