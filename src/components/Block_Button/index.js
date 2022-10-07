import { Box } from '@mui/system';
import './Block_Button.css'

function Block_Button(props) {
    return ( 
        <div className='main_Block_Button'>
            {/* <Box m={2}> */}
            {props.children}
            {/* </Box> */}
        </div>
     );
}

export default Block_Button;