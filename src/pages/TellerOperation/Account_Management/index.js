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
import OpenAccount_Components from './OpenAccount_Components';
import EnquiryAccount_Components from './EnquiryAccount_Components';
import Block_Button from '../../../components/Block_Button';

function Account_Management() {
// Callback childs -> parent
const [message, setMessage] = useState('panel1')
const callbackFunction = (childData) => {setMessage(childData)}
// Callback childs -> parent
const [subMessage, setSubMessage] = useState('subpanel1')
const callbackFunctionSub = (childData) => {setSubMessage(childData)}
    return ( 
        <div>
            {/* 3.1 Current & Non-Term Saving Account  */}
            <Accordian_Children title='3.1 Current & Non-Term Saving Account' label='label1' parentCallback={callbackFunction} message={message}>  
                <Accordian_Children title='3.1.1 Open Account' label='sublabel1' parentCallback={callbackFunctionSub} message={subMessage}>  
                    <OpenAccount_Components suffixID='OpenAccount'/>
                    <Block_Button>
                        <Button
                            variant='contained'
                            endIcon={<SaveIcon />}
                        >
                            Save
                        </Button>
                    </Block_Button>
                </Accordian_Children>
                <Accordian_Children title='3.1.2 Enquiry Account' label='sublabel2' parentCallback={callbackFunctionSub} message={subMessage}>  
                    <EnquiryAccount_Components suffixID='EnquiryAccount' />
                </Accordian_Children>
            </Accordian_Children>
            {/* 3.2 Saving Account  */}
            <Accordian_Children title='3.2 Saving Account' label='label2' parentCallback={callbackFunction} message={message}>  
            </Accordian_Children>
        </div>
     );
}

export default Account_Management;