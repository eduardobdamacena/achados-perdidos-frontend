import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6558F5',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    shrink: true,
                },
            },
        },
    },
});

export default theme;
