import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 100%;
height: 100%;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding-left: 5%;
padding-right: 5%;
user-select: none;
`;

export const CalendarHeader = styled.div`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border-top: 2px solid ${Theme.border};
    border-left: 2px solid ${Theme.border};
    border-right: 2px solid ${Theme.border};
    border-bottom: 0.5px solid ${Theme.border};
    background-color: ${Theme.calendarHeaderBackground};
    border-radius: 10px 10px 0px 0px;
    align-items: center;
`;

export const CalendarNameDays = styled.div`
    width: calc(100% / 7);
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    color: ${Theme.textSecondaryVariant};
`;

export const WeekContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: calc(100vw / 18);
    display: flex;
    flex-direction:row;
    /* background-color: ${Theme.calendarBackground}; */
    border-left: 1px solid ${Theme.border};
    border-right: 1px solid ${Theme.border};
`;

export const DayContainer = styled.div`
    width: calc(100% / 7);
    height: 100%;
    background-color: ${Theme.calendarBackground};
    border: 1px solid ${Theme.border};
    padding: 2px;
    cursor: pointer;
`;

export const Day = styled.div`
    float: right;
    color: ${Theme.textSecondary};
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
`;

export const CurrentDay = styled.div`
    float: right;
    color: ${Theme.textAccent};
    /* background-color: ${Theme.menuBackground}; */
    border: 1px solid ${Theme.textAccent};
    border-radius: 50%;
    padding: 1px;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
`;
