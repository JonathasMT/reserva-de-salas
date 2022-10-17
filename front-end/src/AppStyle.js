import styled from "styled-components";
import { Theme } from "./components/Theme";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: start;
    background-color: ${Theme.background};
`;