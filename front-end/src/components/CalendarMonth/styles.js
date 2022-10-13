import styled, { css } from "styled-components";

export const Container = styled.div`
box-sizing: border-box;
font-size: 20px;
min-width: 1295px;
min-height: 700px;
padding: 20px;
`;

export const CalendarBloco = styled.div`
position: relative;
width: calc(100% / 7);
height: 130px;
display: inline-block;
background-color: #FDFCFF;
border: 2px solid #F4F5FC;
color: #9EA9BA;
font-weight: bold;
text-align: right;
padding: 5px;
cursor: pointer;
`;

export const CalendarHeader = styled.div`
border: 2px solid #F4F5FC;
`;

export const CalendarHeaderNames = styled.div`
background-color: #FDFCFF;
border-radius: 10px 10px 0px 0px;
display: flex;
flex-wrap: wrap;
width: 100%;
margin: 0 auto;
align-items: center;
`;

export const CalendarHeaderBloco = styled.div`
width: calc(100% / 7);
height: 40px;
line-height: 40px;
text-align: center;
text-transform: uppercase;
font-size: 20px;
color: #8F959E;
font-weight: bold;
`;