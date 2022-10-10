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

// Component
import AutoComplete_Object from './components/AutoComplete_Object';
import Accordian_Children from './components/Accordian_Children';
import Block_Children from './components/Block_Children';
import Image_List from './components/Image_List';
import Default_Layout from './layouts/Default_Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';



function App() {
  
  return (
      <Router>
          <Routes>
              {
                  privateRoutes.map((route, index)=> {
                    const Page = route.component
                    let Layout = Default_Layout
                    return <Route key={index} path={route.path} element={
                      <Layout>
                          <Page />
                      </Layout>} /> 
                  })

                }
          </Routes>
      </Router>
  );
}

export default App;
