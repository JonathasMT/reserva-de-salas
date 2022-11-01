import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 100vw;
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
    border-bottom: 1px solid ${Theme.border};
    background-color: ${Theme.calendarHeaderBackground};
    border-radius: 10px 10px 0px 0px;
    align-items: center;
`;

export const CalendarNameDays = styled.div`
    width: calc(100% / 7);
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${Theme.textSecondaryVariant};
`;

export const WeekContainer = styled.div`
    width: 100%;
    height: calc(100vw / 17);
    box-sizing: border-box;
    display: flex;
    flex-direction:row;
    border-left: 1px solid ${Theme.border};
    border-right: 1px solid ${Theme.border};
`;

export const DayContainer = styled.div`
    width: calc(100% / 7);
    height: 100%;
    box-sizing: border-box;
    display: block;
    background-color: ${Theme.calendarBackground};
    border: 1px solid ${Theme.border};
    padding: 3px;
    cursor: pointer;
`;

export const Day = styled.div`
    box-sizing: border-box;
    float: right;
    color: ${Theme.textSecondary};
    font-weight: bold;
    font-size: 0.7rem;
`;

export const CurrentDay = styled.div`
    width: 0.9rem;
    height: 0.9rem;
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    color: ${Theme.calendarBackground};
    background-color: ${Theme.textSecondary};
    border: 0.5px solid ${Theme.textSecondary};
    border-radius: 50%;
    padding: 1px;
    font-size: 0.6rem;
    font-weight: bold;
`;
