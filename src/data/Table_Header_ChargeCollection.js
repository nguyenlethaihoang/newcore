import * as React from 'react';
import Dialog_ChargeAccount from '../pages/TellerOperation/Account_Management/Collect_Charges/Dialog_ChargeAccount';

const Table_Header_ChargeCollection = [
    {field: 'id',headerName: 'id',width: 30,},
    {field: 'Code',headerName: 'Code',width: 120,},
    {field: 'AccountType',headerName: 'Account Type',width: 300,},
    {field: 'Account',headerName: 'Account',width: 100,},
    {field: 'Category',headerName: 'Category',width: 400,},
    {field: 'ChargeAmount',headerName: 'Charge Amount',width: 150,},
    {field: 'Status',headerName: 'Status',width: 70,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {/* {(params.value.type == 1) && <Dialog_Individsual CustomerID={params.value.id}/>} */}
            <Dialog_ChargeAccount object={params}/>
        </div>
},
]

export default Table_Header_ChargeCollection