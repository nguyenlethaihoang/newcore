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
import Dialog_ForeignExchange from '../pages/TellerOperation/Foreign_Exchange/Dialog_ForeignExchange';


const Table_Header_ForeignExchange = [
    {field: 'id',headerName: 'TT No',width: 120,},
    {field: 'Account',headerName: 'Account',width: 130,},
    {field: 'Amount',headerName: 'Amount',width: 130,},
    {field: 'Status',headerName: 'Status',width: 100,},
    {field: 'CustomerName',headerName: 'Customer Name',width: 150,},
    {field: 'CustomerPassportNumber',headerName: 'Customer Passport Number',width: 200,},
    {field: 'Detail',headerName: 'Detail',width: 100, renderCell: (params) => 
        <div>
            {/* {(params.value.type == 1) && <Dialog_Individsual CustomerID={params.value.id}/>} */}
            <Dialog_ForeignExchange CustomerID={params.value.id}/>
        </div>
},
]

export default Table_Header_ForeignExchange