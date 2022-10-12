import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Stack } from '@mui/material';


function AutoComplete_Object({id, object, length, disabled, dataID, label, params1, params2, params3, params4, required, defaultValue, noDown}) {

    // Convert sang new arr 
    let convertObject = []
    object.map((data, i) => {
        let resObj = {}
        if (params4) {
            resObj = {
                id: data.id,
                label: `${data[params1][params2]} - ${data[params3][params4]} `
    
            }
        } 
        else if (params3) {
            resObj = {
                id: data.id,
                label: `${data[params1][params2][params3]} `
    
            }
        } else if (params2) {
            resObj = {
                id: data.id,
                label: `${data[params1]} - ${data[params2]}`
    
            }
        } else if (params1) {
            resObj = {
                id: data.id,
                label: `${data[params1]} `
    
            }
        }
        convertObject.push(resObj)

    })
    // Kiem tra cac props
    if (disabled === undefined) disabled = false;
    return ( 
        <Autocomplete
            disablePortal
            defaultValue={defaultValue?defaultValue:''}
            id={id}
            disabled={disabled}
            options={convertObject}
            
            renderInput={(params) => <TextField {...params} label={label} required={required} {...(noDown ? { InputLabelProps:{shrink: true,}} : {})}/>}

            sx={{ 
                minWidth: `${length}ch`, 
                mr: `${process.env.REACT_APP_SPACE}px`,
                mt: `${process.env.REACT_APP_SPACE}px`,
            }}
        />
     );
}   

export default AutoComplete_Object;