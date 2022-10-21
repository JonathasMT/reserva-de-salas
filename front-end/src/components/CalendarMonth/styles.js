import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 100%;
height: 100%;
box-sizing: border-box;
padding-left: 5%;
padding-right: 5%;
padding-bottom: 5%;
`;

export const CalendarHeader = styled.div`
    width: calc(100% - 2px);
    height: 25px;
    display: flex;
    flex-wrap: wrap;
    border-top: 2px solid ${Theme.border};
    border-left: 2px solid ${Theme.border};
    border-right: 2px solid ${Theme.border};
    border-bottom: 1px solid ${Theme.border};
    background-color: ${Theme.calendarHeaderBackground};
    border-radius: 10px 10px 0px 0px;
    align-items: center;
`;

export const CalendarNameDays = styled.div`
    width: calc(100% / 7);
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    color: ${Theme.textSecondaryVariant};
`;

export const Weeks = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    /* background-color: ${Theme.calendarBackground}; */
    border-left: 1px solid ${Theme.border};
    border-right: 1px solid ${Theme.border};
`;

export const Days = styled.div`
    width: calc(100% / 7);
    height: 70px;
    background-color: ${Theme.calendarBackground};
    border: 1px solid ${Theme.border};
    color: ${Theme.textSecondary};
    font-weight: bold;
    font-size: 12px;
    text-align: right;
    padding: 5px;
    cursor: pointer;
`;