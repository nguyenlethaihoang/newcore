import * as React from 'react';
import Dialog_IssueCheque from '../pages/TellerOperation/Account_Management/Cheque_Management/Dialog_IssueCheque';


const Table_Header_Issue_Cheque = [
    {field: 'id',headerName: 'ID',width: 80,},
    {field: 'ref',headerName: 'Cheque Reference',width: 200,},
    {field: 'ChequeType',headerName: 'Cheque Type',width: 120,},
    {field: 'WorkingAccount',headerName: 'Working Account',width: 150,},
    {field: 'Quantity',headerName: 'Quantity',width: 100,},
    {field: 'SerialNumber',headerName: 'SerialNumber',width: 150,},  
    {field: 'IssueDate',headerName: 'Issue Date',width: 120,},
    {field: 'Status',headerName: 'Status',width: 100,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: 
        (params) => 
        <Dialog_IssueCheque ChequeID={params.value.id} />
    }
    
]

export default Table_Header_Issue_Cheque