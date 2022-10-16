// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DataPicker_Day from '../../../../components/DatePicker_Day';

// Components
import Block_Children from '../../../../components/Block_Children'; 
import TextField_Value from '../../../../components/TextField_Value'; 
import Select_Object from '../../../../components/Select_Object';
import Table_Object from '../../../../components/Table_Object';
import Search from '@mui/icons-material/Search';
import Table_Header_ChargeCollection from '../../../../data/Table_Header_ChargeCollection';
import Block_Button from '../../../../components/Block_Button';
import Alert_String from '../../../../components/Alert_String';

//DATA
import chargeCollectionType from '../../../../data/chargeCollectionType';
import AccountType_CashDeposits from '../../../../data/AccountType_CashDeposits'
//api
import ChargeCollectionApi from '../../../../apis/chargeCollectionApi';

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

function createData(id, Code, AccountType, Account, Category, ChargeAmount, Status, Detail) {
    return {id, Code, AccountType, Account, Category, ChargeAmount, Status, Detail };}

function IssueEnquiry_Component({suffixID, forceDisable, object}){
    console.log('object')
    console.log(object)
    if(!object){
        object = ""
    }
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)

      // Config Table
    const [ccList, setCCList] = useState([]);
    const [columnsTable, setColumnsTable] = useState([])
    const [rowsTable, setRowsTable] = useState([])
    const [isNotification_Message_01, setIsNotification_Message_01] = useState(false)

    return (
        <div>
            <Box m={2}>
            {/* Block 1 - Enquiry Issue Cheque */}
            <Block_Children>
                <Select_Object id={'txt_CollectionType_'+suffixID} object = {chargeCollectionType} label='Collection Type' required={true} length='35'/>
                <Select_Object id={'txt_AccountType_'+suffixID} lable = "Account Type" object={AccountType_CashDeposits}  disabled={isDisabled} length='35'/>
                <TextField_Value id={'txt_AccountID_'+suffixID} label='Account ID' length='35' disabled={isDisabled}/>
                <TextField_Value id={'txt_ReferenceID_'+suffixID} label='Reference ID' length='35' disabled={isDisabled}/>
                <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='35' disabled={isDisabled}/>
                <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='35' disabled={isDisabled}/>
                <TextField_Value id={'txt_LegalID_'+suffixID} label='Legal ID' length='35'  disabled={isDisabled}/>
                <TextField_Value id={'txt_ChargeAmtfr_'+suffixID} label='Charge Amount from' length='35'  disabled={isDisabled}/>
                <TextField_Value id={'txt_ChargeAmtto_'+suffixID} label='Charge Amount to' length='35'  disabled={isDisabled}/>
                
            </Block_Children>
            <Block_Button>
                <Button
                        endIcon={<Search />}
                        variant="contained"
                        onClick={async () => {
                                let params = {}

                                params.chargeType =  resolveNameID(chargeCollectionType, document.getElementById('txt_CollectionType_ChargeCollectionEnquiry').innerText) 
                                params.chargeID =  document.getElementById('txt_ReferenceID_ChargeCollectionEnquiry').value
                                params.customerID =  document.getElementById('txt_CustomerID_ChargeCollectionEnquiry').value
                                params.customerName = document.getElementById('txt_CustomerName_ChargeCollectionEnquiry').value
                                params.legalID =  document.getElementById('txt_LegalID_ChargeCollectionEnquiry').value
                                params.accountID = document.getElementById('txt_AccountID_ChargeCollectionEnquiry').value
                                params.accountType = resolveNameID(AccountType_CashDeposits,document.getElementById('txt_AccountType_ChargeCollectionEnquiry').innerText) 
                                params.chargesAmountfr = document.getElementById('txt_ChargeAmtfr_ChargeCollectionEnquiry').value
                                params.chargesAmountto = document.getElementById('txt_ChargeAmtto_ChargeCollectionEnquiry').value
                                console.log('params')
                                console.log(params)
                                arrError = []
                                if(!params.chargeType){
                                    arrError.push('Collection Type is required!')
                                }
                                if(arrError.length == 0){
                                    let data = []
                                
                                    const fetchCCList = async () => {
                                            const response = await ChargeCollectionApi.enquiry(params);
                                            setCCList(response.data) 
                                    }
                                    fetchCCList();
                                    data = []
                                    console.log('charge collection')
                                    console.log(ccList)
                                    ccList.map((value, index) => {
                                        let itemStatus = value.Status
                                        if(itemStatus == 1){
                                            itemStatus = 'UAT'
                                        }else if(itemStatus == 2){
                                            itemStatus = 'AUT'
                                        }else{
                                            itemStatus = 'REV'
                                        }
                                        console.log('value')
                                        console.log(itemStatus)
                                        
                                        data.push(createData(value.id, `TT.${value.id}`, 'Current & Non_term Saving Account', value.Account, value.CHARGECATEGORY?.Name, value.ChargeAmountLCY, itemStatus, {object: value}))
                                    })
                                    setRowsTable(data)
                                    setColumnsTable(Table_Header_ChargeCollection)
                                }else{
                                    setIsNotification_Message_01(true)
                                    setTimeout(() => {setIsNotification_Message_01(false)}, 5000);
                                }
                                
                        }}
                >
                        Search
                </Button>
                <Button
                        variant="contained"
                        endIcon={<DeleteIcon />}
                        onClick={() => {
                                setRowsTable([])
                                setColumnsTable([])
                        }}
                >
                        Reset   
                </Button>
            </Block_Button>
            <Table_Object rows={rowsTable} columns={columnsTable}/>
        
        </Box>
        {isNotification_Message_01 && <Alert_String arrError={arrError}/>}
      </div>
    )
};

export default IssueEnquiry_Component;