import * as React from 'react';
import Dialog_WithdrawalCheque from '../pages/TellerOperation/Account_Management/Cheque_Management/Dialog_WithdrawalCheque';


const Table_Header_Issue_Cheque = [
    {field: 'id',headerName: 'ID',width: 50,},
    {field: 'ChequeID',headerName: 'Cheque ID',width: 200,},
    {field: 'CustomerName',headerName: 'Customer Name',width: 200,},
    {field: 'AmountPaid',headerName: 'Amount Paid',width: 120,},
    {field: 'Currency',headerName: 'Currency',width: 150,},
    {field: 'ChequeNo',headerName: 'Cheque No',width: 100,},
    {field: 'Status',headerName: 'Status',width: 100,},  
    {field: 'WithdrawalDate',headerName: 'Withdrawal Date',width: 150,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: 
        (params) => 
        <Dialog_WithdrawalCheque ChequeID={params.value.id} />
    }
    
]

export default Table_Header_Issue_Cheque