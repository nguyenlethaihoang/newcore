import * as React from 'react';
import Dialog_ForeignExchange from '../pages/TellerOperation/Foreign_Exchange/Dialog_ForeignExchange';


const Table_Header_ForeignExchange = [
    {field: 'id',headerName: 'TT No',width: 140,},
    {field: 'Account',headerName: 'Account',width: 140,},
    {field: 'Amount',headerName: 'Amount',width: 140,},
    {field: 'Status',headerName: 'Status',width: 100,},
    {field: 'CustomerName',headerName: 'Customer Name',width: 200,},
    {field: 'CustomerPassportNumber',headerName: 'Customer Passport Number',width: 200,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {/* {(params.value.type == 1) && <Dialog_Individsual CustomerID={params.value.id}/>} */}
            <Dialog_ForeignExchange CustomerID={params.value.id} object={params.value.object}/>
        </div>
},
]

export default Table_Header_ForeignExchange