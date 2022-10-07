// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Accordian_Children from '../../../components/Accordian_Children';
import AutoComplete_Object from '../../../components/AutoComplete_Object';
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import Image_List from '../../../components/Image_List';
import DataPicker_Day from '../../../components/DatePicker_Day';
import Select_Object from '../../../components/Select_Object';
import Table_Header_CustomerManagement from '../../../data/Table_Header_CustomerManagement';

function Foreign_Exchange() {
// Callback childs -> parent
const [message, setMessage] = useState('panel1')
const callbackFunction = (childData) => {setMessage(childData)}
    return ( 
        <div>
            {/* 4.1 Foreign Exchange  */}
            <Accordian_Children title='4. Foreign Exchange' label='label1' parentCallback={callbackFunction} message={message}>  
            </Accordian_Children>
        </div>
     );
}

export default Foreign_Exchange;