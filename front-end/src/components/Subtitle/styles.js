import styled from "styled-components";
import { Theme } from "../Theme";

export const Container = styled.div`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    border: 2px solid ${Theme.border};
    background-color: ${Theme.calendarHeaderBackground};
    border-radius: 0px 0px 10px 10px;
`;
