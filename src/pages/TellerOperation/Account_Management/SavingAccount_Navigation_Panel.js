import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Block_Button from "../../../components/Block_Button";

function SavingAccount_Navigation_Panel() {
    return ( 
        <Block_Button>
             <Link to="/open_saving_account" style={{textDecoration: 'none'}}>
                <Button
                    variant='contained'
                >
                    1. OPEN
                </Button>
             </Link >

             <Link to="/enquiry_saving_account" style={{textDecoration: 'none'}}>
                <Button
                    variant='contained'
                >
                    2. ENQUIRY
                </Button>
             </Link>
             
             <Link to='/close_saving_account' style={{textDecoration: 'none'}}>
                    <Button
                        variant='contained'
                    >
                        3. CLOSE
                    </Button>
             </Link>
             
             
        </Block_Button>
     );
}

export default SavingAccount_Navigation_Panel;