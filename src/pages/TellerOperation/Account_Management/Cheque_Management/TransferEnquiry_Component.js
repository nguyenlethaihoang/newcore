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
import Table_Header_TransferCheque from '../../../../data/Table_Header_TransferCheque'
import Block_Button from '../../../../components/Block_Button';
//DATA
import Cheque_Type from '../../../../data/Cheque_Type'
//api
import chequeApi from '../../../../apis/chequeApi';

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
// ------------------- CONVERT DAY DATA ------------------------
function convertDatetime(date){
    let dateArr = date.split('/')
    let dateConverted = dateArr[2] + '-'+ dateArr[1] + '-' + dateArr[0]
    return dateConverted
  }

function resolveDate(date){
    let dateArr = date.split('T')
    return dateArr[0]
}

function createData(id, ChequeID, CustomerName, AmountDebit, Currency, ChequeNo, BeneficiaryName,AmountTransfer, CreditCurrency, Status, TransferDate, Detail) {
    return {id, ChequeID, CustomerName, AmountDebit, Currency, ChequeNo, BeneficiaryName,AmountTransfer, CreditCurrency, Status, TransferDate, Detail};}

function TransferEnquiry_Component({suffixID, forceDisable, object}){
    if(!object){
        object = ""
    }
    // Manage Disable
    if (forceDisable === undefined) forceDisable = false
    const [isDisabled, setIsDisabled] = useState(forceDisable)

      // Config Table
    const [transferList, setTransferList] = useState([]);
    const [columnsTable, setColumnsTable] = useState([])
    const [rowsTable, setRowsTable] = useState([])
    return (
        <div>
            <Box m={2}>
            {/* Block 1 - Enquiry Issue Cheque */}
            <Block_Children>
                <TextField_Value id={'txt_TransferID_'+suffixID} label='Transfer ID' length='35'/>
                <TextField_Value id={'txt_CustomerID_'+suffixID} label='Customer ID' length='35' disabled={isDisabled}/>
                <Select_Object id={'slt_ChequeType_'+suffixID} label='Cheque Type'object={Cheque_Type}length='35' disabled={isDisabled}/>
                <TextField_Value id={'txt_WorkingAccount_'+suffixID} label='Working Account' length='35'  disabled={isDisabled}/>
                <TextField_Value id={'txt_CustomerName_'+suffixID} label='Customer Name' length='35'disabled={isDisabled}/>
                <TextField_Value id={'txt_LegalID_'+suffixID} label='Legal ID' length='35'disabled={isDisabled}/>
                <TextField_Value id={'txt_ChequeNo_'+suffixID} label='Cheque No' length='35'disabled={isDisabled} number={true}/>
                <DataPicker_Day id={'txt_TransferDate_'+suffixID} label='Transfer Date' length='22'disabled={isDisabled}/>
                <TextField_Value id={'txt_Amountfr_'+suffixID} label='Amount from' length='20'disabled={isDisabled} number={true}/>
                <TextField_Value id={'txt_Amountto_'+suffixID} label='Amount to' length='20'disabled={isDisabled} number={true}/>
                
            </Block_Children>
            <Block_Button>
                <Button
                        endIcon={<Search />}
                        variant="contained"
                        onClick={async () => {
                                let params = {}

                                params.TransferID = document.getElementById('txt_TransferID_TransferEnquiry').value
                                params.CustomerID = document.getElementById('txt_CustomerID_TransferEnquiry').value
                                params.ChequeType = resolveNameID(Cheque_Type,  document.getElementById('slt_ChequeType_TransferEnquiry').innerText)
                                params.WorkingAccount = document.getElementById('txt_WorkingAccount_TransferEnquiry').value
                                params.CustomerName =  document.getElementById('txt_CustomerName_TransferEnquiry').value
                                params.LegalID =  document.getElementById('txt_LegalID_TransferEnquiry').value
                                params.ChequeNo =  document.getElementById('txt_ChequeNo_TransferEnquiry').value
                                params.TransferDate = document.getElementById('txt_TransferDate_TransferEnquiry').value? convertDatetime(document.getElementById('txt_TransferDate_TransferEnquiry').value) : null
                                params.Amountfr = document.getElementById('txt_Amountfr_TransferEnquiry').value
                                params.Amountto =document.getElementById('txt_Amountto_TransferEnquiry').value
                                let data = []
                                
                                const fetchTransferList = async () => {
                                        const response = await chequeApi.enquiryTransfer(params);
                                        setTransferList(response.data) 
                                }
                                fetchTransferList();
                                data = []
                                transferList.map((value, index) => {
                                    let itemStatus = value.Status
                                    if(itemStatus == 1){
                                        itemStatus = 'UAT'
                                    }else if(itemStatus == 2){
                                        itemStatus = 'AUT'
                                    }else{
                                        itemStatus = 'REV'
                                    }
                                   
                                        data.push(createData(value.id, value.ChequeID, value.DebitAccountt?.Customer.GB_FullName, value.DebitAmount, value.DebitCurrencyt?.Name, value.ChequeNo, value.BeneficiaryName, value.PaidAmount, value.CreditCurrencyt?.Name, itemStatus, resolveDate(value.createdAt), {id: value.id}))
                                })
                                setRowsTable(data)
                                setColumnsTable(Table_Header_TransferCheque)
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
      </div>
    )
};

export default TransferEnquiry_Component;