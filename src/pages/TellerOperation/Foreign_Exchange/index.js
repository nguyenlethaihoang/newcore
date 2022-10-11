// Libraries
import * as React from 'react';
import { useState, useEffect } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
// Components
import Accordian_Children from '../../../components/Accordian_Children';
import ForeignExchange_Components from './ForeignExchange_Components';
import EnquiryForeignExchange_Components from './EnquiryForeignExchange_Components';
import Block_Button from '../../../components/Block_Button';
import Message_String from '../../../components/Message_String';
import Alert_String from '../../../components/Alert_String';
import foreignExchangeApi from '../../../apis/foreignExchangeApi';
import Currency_ForeignExchange from '../../../data/Currency_ForeignExchange'

import useFetchForeignExchange from '../../../customHooks/useFetchForeignExchange';


// ----- MAIN -----
function Foreign_Exchange() {
    // Notification of 4.1 Foreign Exchange
    const [isNotification_Success_01, setIsNotification_Success_01] = useState(false)
    const [isNotification_Failed_01, setIsNotification_Failed_01] = useState(false)
    const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)
    //
    const foreignExchangeList = useFetchForeignExchange();
    return ( 
        <div>
            {/* 4.1 Foreign Exchange  */}
            <Accordian_Children title='4.1 Foreign Exchange' label='label1'>  
                <ForeignExchange_Components suffixID='ForeignExchange'/>
                <Block_Button>
                        <Button
                            variant='contained'
                            endIcon={<SaveIcon />}
                            onClick={async() => {
                                // Temp object for checking
                                let params = {}
                                // Params force
                                params.CustomerName = document.getElementById('txt_CustomerName_ForeignExchange').value
                                params.Address = document.getElementById('txt_Address_ForeignExchange').value
                                params.TellerID = document.getElementById('txt_TellerID_ForeignExchange').value
                                params.DebitCurrency = resolveNameID(Currency_ForeignExchange, document.getElementById('slt_DebitCurrency_ForeignExchange').innerText)
                                params.DebitAmtLCY = document.getElementById('txt_DebitAmtLCY_ForeignExchange').value
                                params.CurrencyPaid =  resolveNameID(Currency_ForeignExchange, document.getElementById('slt_CurrencyPaid_ForeignExchange').innerText)
                                // Params normal
                                params.PhoneNumber = document.getElementById('txt_PhoneNumber_ForeignExchange').value
                                params.DebitAmtFCY = document.getElementById('txt_DebitAmtFCY_ForeignExchange').value
                                params.DebitDealRate = document.getElementById('txt_DebitDealRate_ForeignExchange').value
                                params.TellerID02 = document.getElementById('txt_TellerID02_ForeignExchange').value
                                params.CreditDealRate = document.getElementById('txt_CreditDealRate_ForeignExchange').value
                                params.Narrative = document.getElementById('txt_Narrative_ForeignExchange').value
                                // Check error and store it by Array
                                arrError = []
                                if(!params.CustomerName) arrError.push('Customer Name is Required')
                                if(!params.Address) arrError.push('Address is Required')
                                if(!params.TellerID) arrError.push('Teller ID is Required')
                                if(!params.DebitCurrency) arrError.push('Debit Currency is Required')
                                if(!params.CurrencyPaid) arrError.push('Currency Paid is Required')
                                if (params.DebitCurrency === params.CurrencyPaid) arrError.push('Debit Currency and Currency Paid must be different')
                                if (params.DebitCurrency == 12) {
                                    if(!params.DebitAmtLCY) arrError.push('Debit Amt LCY is Required')
                                    if(!params.DebitDealRate) arrError.push('Debit Deal Rate is Required')
                                }
                                else {
                                    if(!params.DebitAmtFCY) arrError.push('Debit Amt FCY is Required')
                                    if(!params.CreditDealRate) arrError.push('Credit Deal Rate is Required')
                                }
                                if(arrError.length == 0) {
                                    const res = await foreignExchangeApi.post(params);
                                    if(res != 'fail') {
                                            setIsNotification_Success_01(true); 
                                            setTimeout(() => {setIsNotification_Success_01(false)}, 5000);
                                            // clearTextFields()
                                    } else {
                                            setIsNotification_Failed_01(true)
                                            setTimeout(() => {setIsNotification_Failed_01(false)}, 5000); 
                                    }
                                } 
                                else{
                                    setIsNotification_Message_01(true)
                                    setTimeout(() => {setIsNotification_Message_01(false)}, 4000);
                                  }
                            }}
                        >
                                Save
                        </Button>
                        <Button
                            variant='contained'
                            endIcon={<DeleteIcon />}
                            onClick={() => {
                                document.getElementById('txt_CustomerName_ForeignExchange').value = ''
                                document.getElementById('txt_Address_ForeignExchange').value = ''
                                document.getElementById('txt_TellerID_ForeignExchange').value = ''
                                document.getElementById('slt_DebitCurrency_ForeignExchange').innerText = ''
                                document.getElementById('slt_DebitAccount_ForeignExchange').innerText = ''
                                document.getElementById('slt_CreditAccount_ForeignExchange').innerText = ''
                                document.getElementById('txt_DebitAmtLCY_ForeignExchange').value = ''
                                document.getElementById('slt_CurrencyPaid_ForeignExchange').innerText = ''
                                document.getElementById('txt_PhoneNumber_ForeignExchange').value = ''
                                document.getElementById('txt_DebitAmtFCY_ForeignExchange').value = ''
                                document.getElementById('txt_DebitDealRate_ForeignExchange').value = ''
                                document.getElementById('txt_TellerID02_ForeignExchange').value = ''
                                document.getElementById('txt_CreditDealRate_ForeignExchange').value  = ''
                                document.getElementById('txt_Narrative_ForeignExchange').value = ''

                            }}
                        >
                            Reset
                        </Button>
                </Block_Button>
                
            </Accordian_Children>
            {/* 4.2 Enquiry Foreign Exchange  */}
            <Accordian_Children title='4.2 Enquiry Foreign Exchange' label='label2'>  
                <EnquiryForeignExchange_Components suffixID='EnquiryForeignExchange'/>
            </Accordian_Children>
            {isNotification_Success_01 && <Message_String type='success' text='Add Foreign Exchange Successfully'/>} 
            {isNotification_Failed_01 && <Message_String type='error' text='Add Foreign Exchange Failed'/>}  
            {isNotification_Message_01 && <Alert_String arrError={arrError}/>} 
        </div>
     );
}

export default Foreign_Exchange;


let arrError = []

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