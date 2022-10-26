import * as React from 'react';
import Dialog_CloseAccount from '../pages/TellerOperation/Account_Management/Main_Account/Dialog_CloseAccount';
import Dialog_Arrear from '../pages/TellerOperation/Account_Management/SavingAccount_Enquiry/Dialog_Arrear';
import Dialog_CloseArrearPeriodic from '../pages/TellerOperation/Account_Management/SavingAccount_Enquiry/Dialog_CloseArrearPeriodic';
import Dialog_Periodic from '../pages/TellerOperation/Account_Management/SavingAccount_Enquiry/Dialog_Periodic';


const Table_Header_ArrearPeriodic = [
    {field: 'id',headerName: 'Ref ID',width: 120,},
    {field: 'Status',headerName: 'Status',width: 80,},
    {field: 'CustomerID',headerName: 'Customer ID',width: 110,},
    {field: 'Category',headerName: 'Category',width: 210,},
    {field: 'CCY',headerName: 'CCY',width: 60,},
    {field: 'ProductLine',headerName: 'Product Line',width: 300,},
    {field: 'Principal',headerName: 'Principal',width: 170,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {(params.value.type == 1) && <Dialog_Arrear CustomerID={params.value.id} object={params.value.object}/>}
            {(params.value.type == 2) && <Dialog_Periodic CustomerID={params.value.id}  object={params.value.object}/>}
        </div>
    },
    {field: 'Close',headerName: 'Close',width: 100, renderCell: (params) => 
        <Dialog_CloseArrearPeriodic CustomerID={params.value.id} object={params.value.object} />
    },
]

export default Table_Header_ArrearPeriodic