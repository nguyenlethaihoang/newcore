import * as React from 'react';
import Dialog_OpenAccount from '../pages/TellerOperation/Account_Management/Main_Account/Dialog_OpenAccount';
import Dialog_CloseAccount from '../pages/TellerOperation/Account_Management/Main_Account/Dialog_CloseAccount';
import Dialog_BlockAccount from '../pages/TellerOperation/Account_Management/Main_Account/Dialog_BlockAccount';


const Table_Header_NonTermSaving = [
    {field: 'id',headerName: 'AC',width: 120,},
    {field: 'CustomerID',headerName: 'CID',width: 50,},
    {field: 'GBFullName',headerName: 'Customer Name',width: 170,},
    {field: 'DocID',headerName: 'Doc ID',width: 130,},
    {field: 'Category',headerName: 'Category',width: 200,},  
    {field: 'ProductLine',headerName: 'Product Line',width: 250,},
    {field: 'Currency',headerName: 'Currency',width: 80,},
    {field: 'ActualBallance',headerName: 'Actual Ballance',width: 120,},
    {field: 'WorkingAmount',headerName: 'Working Amount',width: 120,},

    {field: 'Detail',headerName: 'Detail',width: 60, renderCell: (params) => 
    <Dialog_OpenAccount CustomerID={params.value.id} />},
    {field: 'CloseAccount',headerName: 'Close',width: 60, renderCell: (params) => 
        <Dialog_CloseAccount CustomerID={params.value.id} />},

    {field: 'BlockUnblockAccount',headerName: 'Block/Unblock',width: 120,
    renderCell: (params) => 
    <Dialog_BlockAccount CustomerID={params.value.id} />},

]

export default Table_Header_NonTermSaving