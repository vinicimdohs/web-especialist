import {createGlobalStyle} from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box; 
    }

    body {
        background-color: ${colors.primaryLightColor};
        background-image: linear-gradient(to bottom, transparent, rgba(0,0,0,.3));
    }

    html, body, #root {
        height: 100%;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    body .Toastify .Toastify__toast-container .Toastify__toast--success {
        background: ${colors.successColor}
    }
    
    body .Toastify .Toastify__toast-container .Toastify__toast--error {
        background: ${colors.errorColor}
    }
`;