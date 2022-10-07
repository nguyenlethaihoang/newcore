// Thu vien
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import Block_Children from '../../components/Block_Children';
import AutoComplete_Object from '../../components/AutoComplete_Object';
import Image_List from '../../components/Image_List';
import Accordian_Children from '../../components/Accordian_Children';
import cityApi from '../../apis/cityApi';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

function Duplicate() {

    const [age, setAge] = React.useState('');

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
  };

  const [message, setMessage] = useState('panel1')

  const callbackFunction = (childData) => {
    setMessage(childData)
  }


    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const [productList, setProductList] = useState([]);
  useEffect(() => {
      const fetchProductList = async () => {
          try {
              // const params = {
              //   _page: 1,
              //   _limit: 10,
              // };
              const response = await cityApi.getAll();
              console.log("response")
              console.log(response.rows)
              setProductList(response.rows)
          } catch (error) {
              console.log('Failed to fetch productlist: ', error)
          }
      }
      fetchProductList();
  }, [])

    return ( <div>
              <Accordian_Children
                title='1.1 Open Account'
                label='label1'
                parentCallback={callbackFunction}
                message={message}
            >
                <Block_Children
                    header1="Header 1 day"
                    header2="Header 2 day"
                >
                    <AutoComplete_Object 
                            id='auto'
                            length='30'
                            object={productList}
                            dataID='5'
                            // disabled={true}
                      />
                      <AutoComplete_Object 
                            id='auto'
                            length='30'
                            object={productList}
                            dataID='5'
                            // disabled={true}
                      />
                      <AutoComplete_Object 
                            id='auto'
                            length='30'
                            object={productList}
                            dataID='5'
                            // disabled={true}
                      />
                      <AutoComplete_Object 
                            id='auto'
                            length='30'
                            object={productList}
                            dataID='5'
                            // disabled={true}
                      />
                      <AutoComplete_Object 
                            id='auto'
                            length='30'
                            object={productList}
                            dataID='5'
                            // disabled={true}
                      />
                      <AutoComplete_Object 
                            id='auto'
                            length='30'
                            object={productList}
                            dataID='5'
                            // disabled={true}
                      />
                      <AutoComplete_Object 
                            id='auto'
                            length='30'
                            object={productList}
                            dataID='5'
                            // disabled={true}
                      />
                </Block_Children>
                <Block_Children>
                    <AutoComplete_Object 
                            id='auto'
                            length='30'
                            object={productList}
                            dataID='5'
                            // disabled={true}
                      />

                </Block_Children>
            </Accordian_Children>  

            <Accordian_Children
                title='1.2 Delete Account'
                label='label2'
                parentCallback={callbackFunction}
                message={message}
            >
                <Block_Children>
                  <AutoComplete_Object 
                          id='auto'
                          length='30'
                          object={productList}
                          dataID='5'
                          // disabled={true}
                    />
                </Block_Children>
                  
            </Accordian_Children>

            <Accordian_Children
                title='1.3 Update Account'
                label='label3'
                parentCallback={callbackFunction}
                message={message}
            >
                <Block_Children>
                  <AutoComplete_Object 
                          id='auto'
                          length='30'
                          object={productList}
                          dataID='5'
                          // disabled={true}
                    />
                </Block_Children>
                
                <Block_Children>
                  <AutoComplete_Object 
                            id='auto'
                            length='30'
                            object={productList}
                            dataID='5'
                            // disabled={true}
                      />
                    <Image_List />
                </Block_Children>
            </Accordian_Children>

    </div> );
}

export default Duplicate;