import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
font-size: 20px;
width: 1800px;
height: 1800px;
margin: 20px;

    > calendarHeader {
    width: 100%;
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    border: 2px solid ${Theme.border};
    background-color: ${Theme.calendarHeader};
    border-radius: 10px 10px 0px 0px;
    align-items: center;

        > days {
        width: calc(100% / 7);
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        color: ${Theme.textSecondaryVariant};
        }
    }

    > weeks {
    width: 100%;
    display: flex;
    flex-direction:row;
    background-color: ${Theme.calendarBackground};
    border-left: 2px solid ${Theme.border};
    border-right: 2px solid ${Theme.border};

        > days{
            width: calc(100% / 7);
            height: 130px;
            background-color: ${Theme.calendarBackground};
            border: 2px solid ${Theme.border};
            color: ${Theme.textSecondary};
            font-weight: bold;
            text-align: right;
            padding: 5px;
            cursor: pointer;
        }
    }
`;