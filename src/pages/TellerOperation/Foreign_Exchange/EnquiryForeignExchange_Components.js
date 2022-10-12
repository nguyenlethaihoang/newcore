// Thu vien
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';


// Components
import Block_Children from '../../../components/Block_Children';
import TextField_Value from '../../../components/TextField_Value';
import DataPicker_Day from '../../../components/DatePicker_Day';
import AutoComplete_Object from '../../../components/AutoComplete_Object';
import Block_Button from '../../../components/Block_Button';
import CheckBox_Value from '../../../components/CheckBox_Value';
// Fetch API by Custom Hook
import useFetchAccountOfficer from '../../../customHooks/useFetchAccountOfficer';
import useFetchCurrency from '../../../customHooks/useFetchCurrency';
import useFetchCustomer from '../../../customHooks/useFetchCustomer';
import useFetchProductLine from '../../../customHooks/useFetchProductLine';
import useFetchChargeCode from '../../../customHooks/useFetchChargeCode';
import useFetchRelationCode from '../../../customHooks/useFetchRelationCode';
import Table_Object from '../../../components/Table_Object';
import Table_Header_ForeignExchange from '../../../data/Table_Header_ForeignExchange';
import useFetchForeignExchange from '../../../customHooks/useFetchForeignExchange';
import Currency_ForeignExchange from '../../../data/Currency_ForeignExchange'
import foreignExchangeApi from '../../../apis/foreignExchangeApi';

// ----- MAIN -----
function EnquiryForeignExchange_Components({suffixID, forceDisable}) {
     // Fetch Data 
     const accountOfficerList = useFetchAccountOfficer();
     const currencyList = useFetchCurrency();
     const customerList = useFetchCustomer();
     const [foreignExchangeList, setForeignExchangeList] = useState([]);

     
     // Function create Data for pushing to rows of the table
     function createData(id, Account, Amount, Status, CustomerName, CustomerPassportNumber, Detail) {
     return { id, Account, Amount, Status, CustomerName, CustomerPassportNumber, Detail};}
     // Function generate TT Number
     function genTT(text) {
          let newText = ''
          for (let i = 0; i < 6; i++) {
               if ((text.length-1) >= i) {
                    newText += (text[i].charCodeAt(0) + text.length).toString();
               }
               else newText += '0'
             }
          
          newText = 'TT.' + newText[0]+ newText[1]+ newText[2]+ newText[3]+ newText[4]+ newText[5] + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
          return newText;
     }
//
const [columnsTable, setColumnsTable] = useState([])
const [rowsTable, setRowsTable] = useState([])
// Manage Disable
if (forceDisable === undefined) forceDisable = false
const [isDisabled, setIsDisabled] = useState(forceDisable)
const handleClick = () => {
  setIsDisabled(true);
};
    return ( 
        <div>
          <Box m={2}>
            {/* Block 1 - Foreign Exchange */}
           <Block_Button>
               <Button
                    endIcon={<SearchIcon />}
                    variant='contained'
                    onClick={() => {
                         
                         let data = []
                         const fetchForeignExchangeList = async () => {
                              const response = await foreignExchangeApi.getAll();
                              setForeignExchangeList(response.data) 
                          }
                          fetchForeignExchangeList();
                         foreignExchangeList.map((value, index) => {
                              let param1 = genTT(value.CustomerName)
                              let param2 = '1001-1126-2002'
                              let param3 = value.AmountPaidToCust + Currency_ForeignExchange[value?.DebitCurrencyID]?.Name ? value.AmountPaidToCust + ' ' + Currency_ForeignExchange[value.DebitCurrencyID-1]?.Name : '0'
                              let param4 = 'AUT'
                              let param5 = value.CustomerName
                              let param6 = value.PhoneNo
                              let param7 = {id: genTT(value.CustomerName), object: value}
                              data.push(createData(param1, param2, param3, param4, param5, param6, param7))
                          })
                         setColumnsTable(Table_Header_ForeignExchange)  
                         setRowsTable(data)  
                    }}
                    
               >
                    Search
               </Button>
               <Button
                    variant='contained'
                    endIcon={<DeleteIcon />}
                    onClick={() => {
                         setColumnsTable([])  
                         setRowsTable([])
                    }}
               >
                    Reset
               </Button>
           </Block_Button>
           <Table_Object rows={rowsTable} columns={columnsTable}/>
           
        </Box>
        
        </div>
     );
}

export default EnquiryForeignExchange_Components;