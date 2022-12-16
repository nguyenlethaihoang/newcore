import * as React from 'react';

import Dialog_Inward from '../pages/TransferOperation/Inward_Transaction/Dialog_Inward';


const Table_Header_InwardTransaction = [
    {field: 'id',headerName: 'ID',width: 60,},
    {field: 'RefID',headerName: 'Ref ID',width: 150,},
    {field: 'Type',headerName: 'Type',width: 220,},
    {field: 'ClearingID',headerName: 'Clearing ID',width: 150,},
    {field: 'DebitAccount',headerName: 'Debit Account',width: 150,},
    {field: 'DebitAmtLCY',headerName: 'Debit Amount LCY',width: 150,},
    {field: 'BOName',headerName: 'BO Name',width: 200,},
    {field: 'FOName',headerName: 'FO Name',width: 200,},
    {field: 'Status',headerName: 'Status',width: 80,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {<Dialog_Inward InwardID={params.value.id}/>}
        </div>
},
]

export default Table_Header_InwardTransaction