import styled from "styled-components";

import { Theme } from "../Theme";

export const Container = styled.div`
font-size: 20px;
width: 100%;
height: 100%;
box-sizing: border-box;
padding: 20px;

    > calendarHeader {
    width: calc(100% - 2px);
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    border-top: 2px solid ${Theme.border};
    border-left: 2px solid ${Theme.border};
    border-right: 2px solid ${Theme.border};
    border-bottom: 1px solid ${Theme.border};
    background-color: ${Theme.calendarHeaderBackground};
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
    border-left: 1px solid ${Theme.border};
    border-right: 1px solid ${Theme.border};

        > days{
            width: calc(100% / 7);
            height: 130px;
            background-color: ${Theme.calendarBackground};
            border: 1px solid ${Theme.border};
            color: ${Theme.textSecondary};
            font-weight: bold;
            text-align: right;
            padding: 5px;
            cursor: pointer;
        }
    }
`;