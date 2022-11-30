import {createGlobalStyle} from 'styled-components';
import {Theme} from '../components/Theme';

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    html {
        height: 100%;
    }
    body {
        min-height: 100vh;
        background-color: ${Theme.fundoGeral};
        overflow-y: auto;
    }
`;

export default GlobalStyle;