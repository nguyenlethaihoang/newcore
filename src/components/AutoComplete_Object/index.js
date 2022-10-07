import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';


function AutoComplete_Object({id, object, length, disabled, dataID}) {

    // Convert sang new arr 
    let convertObject = []
    object.map((data, i) => {
        let resObj = {
            id: data.id,
            label: `${data.Name}`

        }
        convertObject.push(resObj)

    })
    
    // Kiem tra cac props
    if (disabled === undefined) disabled = false;
    return ( 
        <Autocomplete
            disablePortal
            id={id}
            disabled={disabled}
            options={convertObject}
            renderInput={(params) => <TextField {...params} label="Province auto" />}

            sx={{ 
                minWidth: `${length}ch`, 
                mr: `${process.env.REACT_APP_SPACE}px`,
                mt: `${process.env.REACT_APP_SPACE}px`,
            }}
        />
     );
}   

export default AutoComplete_Object;