import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        width: 100vw;
        height: 100vh;
        background-color: #F4F5FC;
    }
`;

export default globalStyle;