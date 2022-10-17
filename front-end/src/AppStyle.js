import styled from "styled-components";
import { Theme } from "./components/Theme";

export const Container = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 1820px;
    min-height: 1800px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: start;
    background-color: ${Theme.background};
`;