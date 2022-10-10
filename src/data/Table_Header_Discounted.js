import * as React from 'react';
import Dialog_Individual from '../pages/TellerOperation/Customer_Management/Dialog_Individual';
import Dialog_Corporate from '../pages/TellerOperation/Customer_Management/Dialog_Corporate';


const Table_Header_Discounted = [
    {field: 'id',headerName: 'Ref ID',width: 100,},
    {field: 'LDID',headerName: 'LD ID',width: 130,},
    {field: 'Status',headerName: 'Status',width: 80,},
    {field: 'WorkingAccID',headerName: 'Working Acc ID',width: 200,},
    {field: 'WorkingAccName',headerName: 'Working Acc Name',width: 200,},
    {field: 'Currency',headerName: 'Currency',width: 100,},
    {field: 'Principal',headerName: 'Principal',width: 200,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {(params.value.type == 1) && <Dialog_Individual CustomerID={params.value.id}/>}
            {(params.value.type == 2) && <Dialog_Corporate CustomerID={params.value.id}/>}
        </div>
},
]

export default Table_Header_Discounted