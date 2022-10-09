import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState, useEffect } from 'react';

function Select_Object({required, disabled, length, label, object, dataID, id, keyObj, noValue}) {
    const [value, setValue] = useState('');
    const handleChangeSelect = (event) => {
      setValue(event.target.value);
    };
    // Kiem tra cac props
    if (required === undefined) required = false;
    if (disabled === undefined) disabled = false;
    if (keyObj === undefined) keyObj = 'Name'
    if (noValue) object=[{id:1, Name:''}]
    const labelID = `label${id}`
    return ( 
        // Render Select Component
        <FormControl 
          sx={{ 
            minWidth: `${length}ch`, 
            mr: `${process.env.REACT_APP_SPACE}px`,
            mt: `${process.env.REACT_APP_SPACE}px`,
          }}
            disabled={ disabled}
            required={required}
        >
          <InputLabel id={labelID}>{label}</InputLabel>
          <Select
            labelId={labelID}
            id={id}
            defaultValue={dataID}
            label={label}
            onChange={handleChangeSelect}
            autoWidth
          >
            <MenuItem value=''><em>None</em></MenuItem>
            {
              // return data tu object
              object.map((data) => {
                return (
                  <MenuItem key={data.id} value={data.id}>{data[keyObj]}</MenuItem>
                )
              })
            }
                  
          </Select>
        </FormControl>
     );
}

export default Select_Object;