import {Autocomplete, Button, TextField, Typography } from "@mui/material"
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";    
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useEffect, useState } from "react";
import * as React from 'react';
import './Accordian_Children.css'


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
let checkState = false
function Accordian_Children(props) {
    const sendData = () => {
        props.parentCallback(props.label);
    }
    // Tao state
    
    // Tinh expanded
    let checkExpanded = false;
    if (checkState == false && ((props.message === props.label))) {
        checkExpanded = true;
    } else checkExpanded = false
    
    return ( 
        <div className="main_Accordian_Children">
            <Accordion
                id = {props.label}
                expanded = {props.message === props.label}
                onChange={() => {
                    if (checkState)
                        checkState = false;
                    else 
                        checkState = true
                    sendData()
               }}
            >
                <AccordionSummary
                    // expandIcon ={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >   
                        <Typography
                            variant="h6" 
                            align="center" 
                            color="#0a3060"
                            fontWeight= "700"
                            sx={{
                                padding: "10px"
                            }}
                        >
                            {props.title}
                        </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div
                        style={{ 
                            // display: "flex", 
                            // width: "100%", 
                            // flexWrap: "wrap"
                        }}
                    >
                        {props.children}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Accordian_Children;