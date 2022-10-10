import * as React from 'react';
import Dialog_Individual from '../pages/TellerOperation/Customer_Management/Dialog_Individual';
import Dialog_Corporate from '../pages/TellerOperation/Customer_Management/Dialog_Corporate';


const Table_Header_ArrearPeriodic = [
    {field: 'id',headerName: 'Ref ID',width: 100,},
    {field: 'Status',headerName: 'Status',width: 80,},
    {field: 'CustomerID',headerName: 'Customer ID',width: 130,},
    {field: 'Category',headerName: 'Category',width: 100,},
    {field: 'CCY',headerName: 'CCY',width: 80,},
    {field: 'ProductLine',headerName: 'Product Line',width: 100,},
    {field: 'Principal',headerName: 'Principal',width: 200,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {(params.value.type == 1) && <Dialog_Individual CustomerID={params.value.id}/>}
            {(params.value.type == 2) && <Dialog_Corporate CustomerID={params.value.id}/>}
        </div>
},
]

export default Table_Header_ArrearPeriodic