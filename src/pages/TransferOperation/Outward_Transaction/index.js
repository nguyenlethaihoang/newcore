import { Button } from "@mui/material";
import { useState } from "react";

import SaveIcon from '@mui/icons-material/Save';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchIcon from '@mui/icons-material/Search';
import Accordian_Children from "../../../components/Accordian_Children";
import Block_Button from "../../../components/Block_Button";
import Block_Children from "../../../components/Block_Children";
import Block_Spacing from "../../../components/Block_Spacing";
import Table_Object from "../../../components/Table_Object";
import TransferByCashComponents from "./TransferByCashComponents";
import TransferByAccountComponents from "./TransferByAccountComponents";
import Outward_Transaction_Components from "./Outward_Transaction_Components";
import Table_Header_OutwardTransaction from '../../../data/Table_Header_OutwardTransaction'

function Outward_Transaction() {
    // Config Table
  const [columnsTable, setColumnsTable] = useState([])
  const [rowsTable, setRowsTable] = useState([])
return (
<div>
    {/* ---------------------------------------- */}
    {/* Accordian 1.1 Transfer By Cash */}
    <Accordian_Children title='1.1 Transfer By Cash' label='label1'>  
        <Block_Spacing>
            <TransferByCashComponents suffixID={'TransferByCash'}/>
            <Block_Button>
                <Button variant='contained'endIcon={<SaveIcon />}>Save</Button>
                <Button variant='outlined'endIcon={<RestartAltIcon />}>Reset</Button>
            </Block_Button>
        </Block_Spacing>
    </Accordian_Children>  
    {/* ---------------------------------------- */}
    {/* Accordian 1.2 Transfer By Account */}
    <Accordian_Children title='1.2 Transfer By Account' label='label1'>  
        <Block_Spacing>
            <TransferByAccountComponents suffixID={'TransferByAccount'}/>
            <Block_Button>
                <Button variant='contained'endIcon={<SaveIcon />}>Save</Button>
                <Button variant='outlined'endIcon={<RestartAltIcon />}>Reset</Button>
            </Block_Button>
        </Block_Spacing>
    </Accordian_Children>  
    {/* ---------------------------------------- */}
    {/* Accordian 1.3 Enquiry */}
    <Accordian_Children title='1.3 Enquiry' label='label1'>
        <Block_Spacing>
            <Outward_Transaction_Components suffixID={'Enquiry'}/>
            <Block_Button>
                <Button variant='contained'endIcon={<SearchIcon />} onClick={() => {
                    // -----------------------------
                    // Action
                    setColumnsTable(Table_Header_OutwardTransaction)
                    setRowsTable([])
                }}>Search</Button>
                <Button variant='outlined'endIcon={<RestartAltIcon />} onClick={() => {
                    // -----------------------------
                    // Action
                    setColumnsTable([])
                    setRowsTable([])
                }}>Reset</Button>
            </Block_Button>
            <Block_Children>
             *Note: Click twice "Search" to update the table
            </Block_Children>
        </Block_Spacing>  
        <Table_Object rows={rowsTable} columns={columnsTable}/>
    </Accordian_Children>  
</div>
)
}

export default Outward_Transaction;