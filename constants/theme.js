import {createTheme} from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#006837'
        },
        secondary: {
            main: '#74A91B'
        },
        red: {
            main: '#F15A24'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});

export default theme;