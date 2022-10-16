import Accordian_Children from "../../../../components/Accordian_Children";
import ChargeCollection_Component from "./ChargeCollection_Component";
import ChargeCollection_Cash_Component from "./ChargeCollection_Cash_Component"
import useFetchCategoryPL from '../../../../customHooks/useFetchCategoryPL'
import AccountType_CashDeposits from '../../../../data/AccountType_CashDeposits'
import ChargeCollectionEnquiry from './ChargeCollection_Enquiry_Component'
import useFetchCurrency from "../../../../customHooks/useFetchCurrency";
// COMPONENT
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import Block_Button from '../../../../components/Block_Button';
import Alert_String from '../../../../components/Alert_String';
import Message_String from '../../../../components/Message_String';
import ChargeCollectionApi from "../../../../apis/chargeCollectionApi";
import { useState, useEffect } from 'react';

let arrError= []
let apiErrorMessage = 'Error'
let successMessage = 'Success'

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

function resetDataAccount(){
    document.getElementById('txt_ChargeAmtLCY_ChargeAccount').value = '' 
    document.getElementById('txt_DealRate_ChargeAccount').value = ''
    document.getElementById('txt_VatSerialNo_ChargeAccount').value = ''
    document.getElementById('txt_Narrative_ChargeAccount').value = ''   
    document.getElementById('txt_ChargeAmtFCY_ChargeAccount').value = ''
    document.getElementById('txt_VatAmtLCY_ChargeAccount').value = ''
    document.getElementById('txt_VatAmtFCY_ChargeAccount').value = ''
    document.getElementById('txt_TotalAmtLCY_ChargeAccount').value = ''
    document.getElementById('txt_TotalAmtFCY_ChargeAccount').value = ''
}
function resetDataCash(){

}

function Collect_Charges() {

    const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
    const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
    const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
    const [isNotification_Success_02, setIsNotification_Success_02] = useState(false)
    const [isNotification_Failed_02, setIsNotification_Failed_02] = useState(false)
    const [isNotification_Message_02, setIsNotification_Message_02] = useState(false)

    const categoryList = useFetchCategoryPL()
    const currencyList = useFetchCurrency()
return ( 
<div>
    {/*  From Account  */}
    <Accordian_Children title='From Account' label='label1' >  
        <ChargeCollection_Component suffixID="ChargeAccount" />
        <Block_Button>
            <Button
                    variant='contained'
                    endIcon={<SaveIcon />}
                    onClick={async () => {
                            let params = {}
                            params.CCAmount = document.getElementById('txt_ChargeAmtLCY_ChargeAccount').value
                            params.CCDealRate = document.getElementById('txt_DealRate_ChargeAccount').value
                            params.CCVatSerialNo = document.getElementById('txt_VatSerialNo_ChargeAccount').value
                            params.CCNarrative = document.getElementById('txt_Narrative_ChargeAccount').value
                            params.CCCategory = resolveNameID(categoryList, document.getElementById('slt_Category_ChargeAccount').innerText)
                            params.Account = document.getElementById('txt_DebitAccount_ChargeAccount').value
                            params.AccountType = resolveNameID(AccountType_CashDeposits, document.getElementById('slt_AccountType_ChargeAccount').innerText)
                            params.CCAmountFCY = document.getElementById('txt_ChargeAmtFCY_ChargeAccount').value
                            params.VatAmountLCY = document.getElementById('txt_VatAmtLCY_ChargeAccount').value
                            params.VatAmountFCY = document.getElementById('txt_VatAmtFCY_ChargeAccount').value
                            params.TotalAmountLCY = document.getElementById('txt_TotalAmtLCY_ChargeAccount').value
                            params.TotalAmountFCY = document.getElementById('txt_TotalAmtFCY_ChargeAccount').value
                            arrError = []
                            console.log('params')
                            console.log(params)
                            if(!params.Account){
                                arrError.push('Debit Account is required')
                            }
                            if(!params.CCCategory){
                                arrError.push('Category PL is required')
                            }
                            if (
                                arrError.length == 0
                            ) {
                        
                                const res = await ChargeCollectionApi.collectChargeAccount(params);
                                if(res == 'success') {
                                        successMessage = 'Collect Charge from Account Success'
                                        setIsNotification_Success_01(true); 
                                        setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                                        resetDataAccount()
                                } else {
                                        apiErrorMessage = res
                                        console.log('message')
                                        console.log(apiErrorMessage)
                                        setIsNotification_Failed_01(true)
                                        setTimeout(() => {setIsNotification_Failed_01(false)}, 5000); 
                                }

                            } else {
                                    setIsNotification_Message_01(true)
                                    setTimeout(() => {setIsNotification_Message_01(false)}, 5000);
                            }
                        }}

                    
            >
                    Save
            </Button>
            <Button onClick={()=>{
                resetDataAccount()
            }}>
                    Cancel
            </Button>
                {isNotification_Success_01 && <Message_String type='success' text={successMessage} />}                  
                {isNotification_Failed_01 && <Message_String type='error' text={apiErrorMessage}/>}  
                {isNotification_Message_01 && <Alert_String arrError={arrError}/>}   
        </Block_Button>
    </Accordian_Children>
    {/*  By Cash  */}
    <Accordian_Children title='By Cash' label='label1' >  
        <ChargeCollection_Cash_Component suffixID="ChargeCash" />
        <Block_Button>
            <Button
                    variant='contained'
                    endIcon={<SaveIcon />}
                    onClick={async () => {
                            let params = {}
                            params.CCAmount = document.getElementById('txt_ChargeAmtLCY_ChargeCash').value
                            params.CCDealRate = document.getElementById('txt_DealRate_ChargeCash').value
                            params.CCVatSerialNo = document.getElementById('txt_VatSerialNo_ChargeCash').value
                            params.CCNarrative = document.getElementById('txt_Narrative_ChargeCash').value
                            params.CCCategory = resolveNameID(categoryList, document.getElementById('slt_Category_ChargeCash').innerText)
                            params.CustomerID = document.getElementById('txt_CustomerID_ChargeCash').value
                            params.CCAmountFCY = document.getElementById('txt_ChargeAmtFCY_ChargeCash').value
                            params.VatAmountLCY = document.getElementById('txt_VatAmtLCY_ChargeCash').value
                            params.VatAmountFCY = document.getElementById('txt_VatAmtFCY_ChargeCash').value
                            params.TotalAmountLCY = document.getElementById('txt_TotalAmtLCY_ChargeCash').value
                            params.TotalAmountFCY = document.getElementById('txt_TotalAmtFCY_ChargeCash').value
                            params.TellerID = document.getElementById('txt_TellerID_ChargeCash').value
                            params.Currency = resolveNameID(currencyList, document.getElementById('slt_Currency_ChargeCash').innerText)
                            params.LegalID = document.getElementById('txt_LegalID_ChargeCash').value
                            

                            arrError = []
                            console.log('params')
                            console.log(params)
                            if(!params.CustomerID){
                                arrError.push('Customer ID is required')
                            }
                            if(!params.CCCategory){
                                arrError.push('Category PL is required')
                            }
                            if (
                                arrError.length == 0
                            ) {
                        
                                const res = await ChargeCollectionApi.collectChargeCash(params);
                                if(res == 'success') {
                                        successMessage = 'Collect Charge from Cash Success'
                                        setIsNotification_Success_02(true); 
                                        setTimeout(() => {setIsNotification_Success_02(false)}, 2000);
                                        resetDataCash()
                                } else {
                                        apiErrorMessage = res
                                        console.log('message')
                                        console.log(apiErrorMessage)
                                        setIsNotification_Failed_02(true)
                                        setTimeout(() => {setIsNotification_Failed_02(false)}, 2000); 
                                }

                            } else {
                                    setIsNotification_Message_02(true)
                                    setTimeout(() => {setIsNotification_Message_02(false)}, 2000);
                            }
                        }}

                    
            >
                    Save
            </Button>
            <Button onClick={()=>{
                resetDataAccount()
            }}>
                    Cancel
            </Button>
                {isNotification_Success_02 && <Message_String type='success' text={successMessage} />}                  
                {isNotification_Failed_02 && <Message_String type='error' text={apiErrorMessage}/>}  
                {isNotification_Message_02 && <Alert_String arrError={arrError}/>}   
        </Block_Button>
    </Accordian_Children>
    {/*  Enquiry  */}
    <Accordian_Children title='Enquiry' label='label1' > 
        <ChargeCollectionEnquiry suffixID="ChargeCollectionEnquiry" />
    </Accordian_Children>
</div>
);
}

export default Collect_Charges;