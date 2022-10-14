import * as React from 'react';
import Dialog_TransferCheque from '../pages/TellerOperation/Account_Management/Cheque_Management/Dialog_TransferCheque';


const Table_Header_Issue_Cheque = [
    {field: 'id',headerName: 'ID',width: 50,},
    {field: 'ChequeID',headerName: 'Cheque ID',width: 200,},
    {field: 'CustomerName',headerName: 'Customer Name',width: 200,},
    {field: 'AmountDebit',headerName: 'Amount Debit',width: 120,},
    {field: 'Currency',headerName: 'Debit Currency',width: 150,},
    {field: 'ChequeNo',headerName: 'Cheque No',width: 100,},
    {field: 'BeneficiaryName',headerName: 'Beneficiary Name',width: 200,},
    {field: 'AmountTransfer',headerName: 'Amount Transfer',width: 120,},
    {field: 'CreditCurrency',headerName: 'Credit Currency',width: 150,},
    {field: 'Status',headerName: 'Status',width: 100,},  
    {field: 'TransferDate',headerName: 'Withdrawal Date',width: 150,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: 
        (params) => 
        <Dialog_TransferCheque ChequeID={params.value.id} />
    }
    
]

export default Table_Header_Issue_Cheque