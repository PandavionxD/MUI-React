import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6169bd',
    },
    secondary: {
      main: '#23a478',
    },
    warning: {
      main: '#d88338',
    },
    info: {
      main: '#9821f3',
    },
    success: {
      main: '#00c853',
    },
  },
});

export default theme;
