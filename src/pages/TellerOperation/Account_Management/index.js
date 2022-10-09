// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
// Components
import Accordian_Children from '../../../components/Accordian_Children';
import Navigation_Panel from './Navigation_Panel';

function Account_Management() {
    return ( 
        <div>
            {/* 3.1 Current & Non-Term Saving Account  */}
            <Accordian_Children title='3.1 Current & Non-Term Saving Account' label='label1'>  
                <Navigation_Panel />
            </Accordian_Children>
            {/* 3.2 Saving Account  */}
            <Accordian_Children title='3.2 Saving Account' label='label2'>  
            </Accordian_Children>
        </div>
     );
}

export default Account_Management;