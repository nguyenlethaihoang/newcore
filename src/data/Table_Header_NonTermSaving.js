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
import Dialog_OpenAccount from '../pages/TellerOperation/Account_Management/Dialog_OpenAccount';
import Dialog_CloseAccount from '../pages/TellerOperation/Account_Management/Dialog_CloseAccount';
import Dialog_BlockAccount from '../pages/TellerOperation/Account_Management/Dialog_BlockAccount';


const Table_Header_NonTermSaving = [
    {field: 'AccountCode',headerName: 'AC',width: 50,},
    {field: 'id',headerName: 'CID',width: 50,},
    {field: 'GBFullName',headerName: 'Customer Name',width: 170,},
    {field: 'DocID',headerName: 'Doc ID',width: 70,},
    {field: 'Category',headerName: 'Category',width: 200,},  
    {field: 'ProductLine',headerName: 'Product Line',width: 300,},
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