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
// ----- MAIN -----
function EnquiryForeignExchange_Components({suffixID, forceDisable}) {
     // Fetch Data 
     const accountOfficerList = useFetchAccountOfficer();
     const currencyList = useFetchCurrency();
     const customerList = useFetchCustomer();
function createData(id, Account, Amount, Status, CustomerName, CustomerPassportNumber, Detail) {
return { id, Account, Amount, Status, CustomerName, CustomerPassportNumber, Detail};}
  
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
                         setColumnsTable(Table_Header_ForeignExchange)  
                         let data = []
                         data.push(createData('1', 'Account', 'Amount', 'Status', 'CustomerName', 'Passport', 'details',))
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