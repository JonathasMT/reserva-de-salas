import styled from "styled-components";

import Color from "../../assets/styles/colors";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    user-select: none;
    background-color: ${Color.fundoSecundario};
    z-index: 40;
`;

export const Loader = styled.img`
    width: 80px;
`;