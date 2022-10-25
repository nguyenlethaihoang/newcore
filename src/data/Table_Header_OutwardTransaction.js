import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton } from "@mui/material"
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Dialog_Individual from '../pages/TellerOperation/Customer_Management/Dialog_Individual';


const Table_Header_OutwardTransaction = [
    {field: 'id',headerName: 'ID',width: 100,},
    {field: 'ProductName',headerName: 'Product Name',width: 120,},
    {field: 'SendingName',headerName: 'Sending Name',width: 140,},
    {field: 'ReceivingName',headerName: 'Receiving Name',width: 140,},
    {field: 'Currency',headerName: 'Currency',width: 80,},
    {field: 'Amount',headerName: 'Amount',width: 120,},
    {field: 'Charge Amount',headerName: 'Charge Amt',width: 120,},
    {field: 'Charge Vat Amount',headerName: 'Charge Vat Amt',width: 150,},
    {field: 'Status',headerName: 'Status',width: 80,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {<Dialog_Individual CustomerID={params.value.id}/>}
        </div>
},
]

export default Table_Header_OutwardTransaction