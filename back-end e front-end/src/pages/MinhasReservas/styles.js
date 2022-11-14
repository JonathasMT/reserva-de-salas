import styled from 'styled-components';

import { Theme } from '../../components/Theme'

export const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${Theme.menuFundo};
    padding: 20px;
`;

export const SubContainer = styled.div`
    height:100%;
    width: 300px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: ${Theme.menuFundo};
`;

export const ContainerLista = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    border: 1px solid white;
    border-radius: 20px;
    padding: 20px;
    background-color: ${Theme.menuFundo};
`;

export const ContainerItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: start;
    color: ${Theme.textoPrimary};
    gap: 3px;
`;
//-----------------------------------------



