import styled from 'styled-components';
import {Theme} from './components/Theme';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: 1280px;
    min-height: 720px;
    max-height: calc(width / 1.77);
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: start;
    background-color: ${Theme.fundoGeral};
`;