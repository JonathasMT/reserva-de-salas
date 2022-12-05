import styled from "styled-components";

import Color from "../../assets/styles/colors";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 40;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    user-select: none;
    
    /* background-color: ${Color.fundoSecundario}; */

    >svg {
        background-color: red;
        color: red;
    }
`;

export const Loader = styled.img`
    width: 80px;
`;