import { createTheme } from '@mui/material/styles';
import baseTheme from './baseTheme';


export default createTheme(baseTheme, {
    themeName: 'MBO Dark',
    palette: {
        text:{
            primary: "#FFFFFF"
        },
        primary: {
            main: '#222222',
            background: '#333333',
        },
        secondary: {
            main: '#5f1c17',
        },
        inputBorderColor: {
            color: '#FFFFFF',
            disabledColor: '#757575',
        }
    },
})