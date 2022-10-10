import { Box } from "@mui/material";

function Block_Info(props) {
    return ( 
        <Box mt={2}>
        <Box sx={{border: '2px dashed grey' ,}}><Box ml={2} mr={2} mb={2} mt={-1}>{props.children}</Box></Box>
        </Box>
     );
}

export default Block_Info;