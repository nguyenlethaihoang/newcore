import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CheckBox_Value({label, check}) {
    if (check === undefined) check = false
    return ( 
        <div>
                <FormControlLabel control={<Checkbox defaultChecked={check} />} label={label} />
        </div>
     );
}

export default CheckBox_Value;