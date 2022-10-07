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
import Dialog_Corporate from '../pages/TellerOperation/Customer_Management/Dialog_Corporate';


const Table_Header_CustomerManagement = [
    {field: 'id',headerName: 'Customer ID',width: 100,},
    {field: 'CustomerType',headerName: 'Customer Type',width: 200,},
    {field: 'GBFullName',headerName: 'GB Full Name',width: 300,},
    {field: 'DocID',headerName: 'Doc ID',width: 200,},
    {field: 'CellPhoneOfficeNum',headerName: 'Cell Phone/Office Num',width: 200,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {(params.value.type == 1) && <Dialog_Individual CustomerID={params.value.id}/>}
            {(params.value.type == 2) && <Dialog_Corporate CustomerID={params.value.id}/>}
        </div>
},
]

export default Table_Header_CustomerManagement