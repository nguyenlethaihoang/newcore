import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function Message_String({type, text}) {
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    vertical: 'bottom',
    horizontal: 'right',
  });
  const { vertical, horizontal} = state;
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)

  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
          open={open} 
          autoHideDuration={6000} 
          onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
            {text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}