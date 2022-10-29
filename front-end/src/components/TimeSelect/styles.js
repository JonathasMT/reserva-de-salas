import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: right;
`;

export const SubContainer = styled.div`
width: 230px;
height: 35px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: ${Theme.timeSelector};
border-radius: 25px;
`;

export const DayContainer = styled.div`
width: 33%;
height: calc(100% - 4px);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
/* background-color: white;
border: 2px solid ${Theme.border}; */
border-radius: 25px;
cursor: pointer;
`;

export const DayText = styled.div`
font-size: 14px;
font-weight: bold;
color: ${Theme.textSecondary};
`;

export const WeekContainer = styled.div`
width: 33%;
height: calc(100% - 4px);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
/* background-color: white;
border: 2px solid ${Theme.border}; */
border-radius: 25px;
cursor: pointer;
`;

export const WeekText = styled.div`
font-size: 14px;
font-weight: bold;
color: ${Theme.textSecondary};
`;

export const MonthContainer = styled.div`
width: 33%;
height: calc(100% - 4px);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: white;
border-radius: 25px;
border: 2px solid ${Theme.border};
cursor: pointer;
`;

export const MonthText = styled.div`
font-size: 14px;
font-weight: bold;
color: ${Theme.textAccent};
`;