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
import Table_Header_Issue_Cheque from '../../../../data/Table_Header_Issue_Cheque';
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
    console.log('Date Arr')
    console.log(dateArr)
    let dateConverted = dateArr[2] + '-'+ dateArr[1] + '-' + dateArr[0]
    console.log('Date Str')
    console.log(dateConverted)
    return dateConverted
  }

function createData(id, ref, ChequeType, WorkingAccount, Quantity, SerialNumber, IssueDate, Status, Detail) {
    return { id, ref,ChequeType, WorkingAccount, Quantity, SerialNumber, IssueDate, Status, Detail };}

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
    const [issueList, setIssueList] = useState([]);
    const [columnsTable, setColumnsTable] = useState([])
    const [rowsTable, setRowsTable] = useState([])

    return (
        <div>
            <Box m={2}>
            {/* Block 1 - Enquiry Issue Cheque */}
            <Block_Children>
                <TextField_Value id={'txt_ChequeRef_'+suffixID} label='Cheque Reference' length='35'/>
                <TextField_Value id={'txt_WorkingAccount_'+suffixID} label='Working Account' length='35' disabled={isDisabled}/>
                <Select_Object id={'slt_ChequeType_'+suffixID} label='Cheque Type'object={Cheque_Type}length='35' disabled={isDisabled}/>
                <TextField_Value id={'txt_ChequeNo_'+suffixID} label='Cheque No' length='35'  disabled={isDisabled}/>
                <DataPicker_Day id={'dp_IssuedDate_'+suffixID} label='Issued Date' length='22'disabled={isDisabled}/>
                
            </Block_Children>
            <Block_Button>
                <Button
                        endIcon={<Search />}
                        variant="contained"
                        onClick={async () => {
                                let params = {}

                                params.ChequeRef = document.getElementById('txt_ChequeRef_IssueEnquiry').value
                                params.ChequeType = resolveNameID(Cheque_Type, document.getElementById('slt_ChequeType_IssueEnquiry').innerText)
                                params.ChequeNo = document.getElementById('txt_ChequeNo_IssueEnquiry').value
                                params.WorkingAccount = document.getElementById('txt_WorkingAccount_IssueEnquiry').value
                                params.IssuedDate = document.getElementById('dp_IssuedDate_IssueEnquiry').value? convertDatetime(document.getElementById('dp_IssuedDate_IssueEnquiry').value) : null
                                console.log('params')
                                console.log(params)
                                let data = []
                                
                                const fetchIssueList = async () => {
                                        const response = await chequeApi.enquiryIssue(params);
                                        setIssueList(response.data) 
                                }
                                fetchIssueList();
                                data = []
                                console.log('issue')
                                console.log(issueList)
                                issueList.map((value, index) => {
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
                                   
                                        data.push(createData(value.id, value.ChequeID, value.ChequeStatus == 1? 'CC': 'AB', value.WorkingAccount, value.IssuedQuantity, `${value.ChequeNoStart} - ${value.ChequeNoEnd}`, value.IssueDate, itemStatus, {id: value.id}))
                                })
                                setRowsTable(data)
                                setColumnsTable(Table_Header_Issue_Cheque)
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

export default IssueEnquiry_Component;