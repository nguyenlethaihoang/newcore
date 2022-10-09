import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Block_Button from "../../../components/Block_Button";

function Navigation_Panel() {
    return ( 
        <Block_Button>
             <Link to="/main_account" style={{textDecoration: 'none'}}>
                <Button
                    variant='contained'
                >
                    1. MAIN ACCOUNT
                </Button>
             </Link >

             <Link to="/account_transaction" style={{textDecoration: 'none'}}>
                <Button
                    variant='contained'
                >
                    2. ACCOUNT TRANSACTION
                </Button>
             </Link>
             
             <Link to='/cheque_management' style={{textDecoration: 'none'}}>
                    <Button
                        variant='contained'
                    >
                        3. CHEQUE MANAGEMENT
                    </Button>
             </Link>
             <Link to='/salary_payment' style={{textDecoration: 'none'}}>
                    <Button
                        variant='contained'
                    >
                        4. SALARY PAYMENT
                    </Button>
             </Link>
             <Link to='/collect_charges' style={{textDecoration: 'none'}}>
                    <Button
                        variant='contained'
                    >
                        5. COLLECT CHARGES
                    </Button>
             </Link>
             
             
        </Block_Button>
     );
}

export default Navigation_Panel;