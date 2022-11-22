import styled from "styled-components";

import {Theme} from "../Theme";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: ${Theme.menuFundo};

    >svg {
        background-color: red;
        color: red;
    }
`;

export const Loader = styled.img`
    width: 80px;
`;