import * as React from 'react';
import Dialog_Deposit from '../pages/TellerOperation/Account_Management/Account_Transaction/CustomerInterbranchTransaction/Dialog_Deposit';
import Dialog_Withdrawal from '../pages/TellerOperation/Account_Management/Account_Transaction/CustomerInterbranchTransaction/Dialog_Withdrawal';
import Dialog_OpenAccount from '../pages/TellerOperation/Account_Management/Main_Account/Dialog_OpenAccount';


const Table_Header_CustomerTransaction = [
    {field: 'id',headerName: 'Ref ID',width: 80,},
    {field: 'AccountType',headerName: 'Account Type',width: 300,},
    {field: 'AccountCode',headerName: 'Account Code',width: 120,},
    {field: 'CustomerName',headerName: 'Customer Name',width: 180,},
    {field: 'Currency',headerName: 'Currency',width: 100,},  
    {field: 'TransactionAmount',headerName: 'Transaction Amount',width: 170,},
    {field: 'Status',headerName: 'Status',width: 80,},
    {field: 'Detail',headerName: 'Detail',width: 80 , renderCell: (params) => 
        <div>
            {params.value.type == 1 && <Dialog_Deposit CustomerID={params.value.id} object={params.value.object}/>}
            {params.value.type == 2 && <Dialog_Withdrawal CustomerID={params.value.id} object={params.value.object}/>}
        </div>
    },
]

export default Table_Header_CustomerTransaction