import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function DataPicker_Day({label, id, disabled}) {
  const [value, setValue] = React.useState(dayjs('2022-10-18T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  if (disabled === undefined) disabled=false;
    return ( 
        <LocalizationProvider 
            dateAdapter={AdapterDayjs}
        >
            <Stack>
                <DesktopDatePicker
                disabled={disabled}
                label={label}
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} 
                id={id}
                sx={{ 
                    width: `19ch`, 
                    mr: `${process.env.REACT_APP_SPACE}px`,
                    mt: `${process.env.REACT_APP_SPACE}px`,
                }}/>}
                />
            </Stack>
        </LocalizationProvider>
     );
}

export default DataPicker_Day;