import { Box } from "@mui/material";

function Block_Spacing(props) {
    return ( 
        <Box m={2}>{props.children}</Box>
     );
}

export default Block_Spacing;