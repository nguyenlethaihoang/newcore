import TextField from '@mui/material/TextField';


function TextField_Value({id, label, length, value, disabled, required, number, noDown}) {

    // Kiem tra cac props
    if (value === undefined) value = ''
    if (required === undefined) required = false;
    if (disabled === undefined) disabled = false;
    if (number === undefined) number = false;
    if (noDown === undefined) noDown = false;

    return ( 
        // Render text field
        <TextField 
            id={id} 
            label={label} 
            variant="outlined"
            defaultValue={value}
            disabled={disabled}
            required={required}
            sx={{ 
                width: `${length}ch`, 
                mr: `${process.env.REACT_APP_SPACE}px`,
                mt: `${process.env.REACT_APP_SPACE}px`,
            }}
            {...(number ? { type: 'number', pattern: '[0-9]*', helperText:"Please enter numbers"} : {})}
            {...(noDown ? { InputLabelProps:{shrink: true,}} : {})}
            
        />
     );
}

export default TextField_Value;