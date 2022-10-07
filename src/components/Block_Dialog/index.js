import { Box } from '@mui/system';
import './Block_Dialog.css'

function Block_Dialog(props) {
    return ( 
        <div className='main_Block_Dialog'>
            <Box m={2}>
                {props.children}
                
            </Box>

        </div>
        
     );
}

export default Block_Dialog;