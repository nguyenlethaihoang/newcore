import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CheckBox_Value({label, check, id, value}) {
    const [isChecked, setIsChecked] = React.useState(check)
    if (check === undefined) check = false
    return ( 
        <div>
                <FormControlLabel control={
                    <Checkbox 
                    onChange={()=> {

                        setIsChecked(!isChecked)
                    }}
                    defaultChecked={isChecked} id={id} value={isChecked}/>} 
                    label={label} 
                />
        </div>
     );
}

export default CheckBox_Value;