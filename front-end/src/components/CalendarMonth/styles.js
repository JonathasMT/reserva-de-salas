import styled from "styled-components";

const theme = {
    background: '#FDFCFF',
    border: '#F4F5FC',
    textWeekDays: '#8F959E',
    textCalendarDays: '#9EA9BA'
};

export const Container = styled.div`
font-size: 20px;
width: 1800px;
height: 972px;
margin: 20px;

    > calendarHeader {
    width: 100%;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid ${theme.border};
    background-color: ${theme.background};
    border-radius: 10px 10px 0px 0px;
    align-items: center;

        > days {
        width: calc(100% / 7);
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        color: ${theme.textWeekDays};
        }
    }

    > weeks {
    width: 100%;
    display: flex;
    flex-direction:row;
    background-color: ${theme.background};
    border-left: 2px solid ${theme.border};
    border-right: 2px solid ${theme.border};

        > days{
            width: calc(100% / 7);
            height: 130px;
            background-color: ${theme.background};
            border: 2px solid ${theme.border};
            color: ${theme.textCalendarDays};
            font-weight: bold;
            text-align: right;
            padding: 5px;
            cursor: pointer;
        }
    }
`;