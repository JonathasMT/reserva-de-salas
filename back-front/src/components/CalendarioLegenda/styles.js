import styled from 'styled-components';
import {Theme} from '../Theme';

export const Container = styled.div`
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    border-top: 1px solid ${Theme.borderCalendario};
    border-bottom: 2px solid ${Theme.borderCalendario};
    border-left: 2px solid ${Theme.borderCalendario};
    border-right: 2px solid ${Theme.borderCalendario};
    background-color: ${Theme.fundoCalendarioHeader};
    border-radius: 0px 0px 10px 10px;
`;
