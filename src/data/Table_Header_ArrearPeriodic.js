import * as React from 'react';
import Dialog_Arrear from '../pages/TellerOperation/Account_Management/SavingAccount_Enquiry/Dialog_Arrear';


const Table_Header_ArrearPeriodic = [
    {field: 'id',headerName: 'Ref ID',width: 100,},
    {field: 'Status',headerName: 'Status',width: 80,},
    {field: 'CustomerID',headerName: 'Customer ID',width: 130,},
    {field: 'Category',headerName: 'Category',width: 210,},
    {field: 'CCY',headerName: 'CCY',width: 80,},
    {field: 'ProductLine',headerName: 'Product Line',width: 300,},
    {field: 'Principal',headerName: 'Principal',width: 170,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {(params.value.type == 1) && <Dialog_Arrear CustomerID={params.value.id} object={params.value.object}/>}
            {/* {(params.value.type == 2) && <Dialog_Corporate CustomerID={params.value.id}/>} */}
        </div>
},
]

export default Table_Header_ArrearPeriodic