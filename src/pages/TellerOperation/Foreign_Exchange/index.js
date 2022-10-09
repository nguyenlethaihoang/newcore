// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import SaveIcon from '@mui/icons-material/Save';

// Components
import Accordian_Children from '../../../components/Accordian_Children';
import ForeignExchange_Components from './ForeignExchange_Components';
import EnquiryForeignExchange_Components from './EnquiryForeignExchange_Components';
import Block_Button from '../../../components/Block_Button';
import { Button } from '@mui/material';
import Navigation_Panel from '../Account_Management/Navigation_Panel';

function Foreign_Exchange() {
// Callback childs -> parent
const [message, setMessage] = useState('panel1')
const callbackFunction = (childData) => {setMessage(childData)}
    return ( 
        <div>
            {/* 4.1 Foreign Exchange  */}
            <Accordian_Children title='4.1 Foreign Exchange' label='label1' parentCallback={callbackFunction} message={message}>  
                <ForeignExchange_Components suffixID='ForeignExchange'/>
                <Block_Button>
                        <Button
                            variant='contained'
                            endIcon={<SaveIcon />}
                        >
                                Save
                        </Button>
                </Block_Button>
            </Accordian_Children>
            {/* 4.2 Enquiry Foreign Exchange  */}
            <Accordian_Children title='4.2 Enquiry Foreign Exchange' label='label2' parentCallback={callbackFunction} message={message}>  
                <EnquiryForeignExchange_Components suffixID='EnquiryForeignExchange'/>
            </Accordian_Children>
        </div>
     );
}

export default Foreign_Exchange;