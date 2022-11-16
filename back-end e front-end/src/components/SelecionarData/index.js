import moment from 'moment';
import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

import {Container, Seletor, DataHora, SubContainer, Corrente} from './styles';

function SelecionarData({data, setData, selecionado}) {

    var tipo = '';

    switch (selecionado) {
        case 'dia':
            tipo = 'day';
            break;
        case 'semana':
            tipo = 'week';
            break;
        case 'mes':
            tipo = 'month';
            break;
    
        default:
            break;
    }

    function nomeMesCorrente() {
        return data.format('MMMM');
    }

    function anoCorrente() {
        return data.format('YYYY');
    }

    function mesAnterior() {
        return data.clone().subtract(1, tipo);
    }

    function mesProximo() {
        return data.clone().add(1, tipo);
    }
    
    // function mesAtual() {
    //     return data.isSame(new Date(), 'month');
    // }

    function mesCorrente() {
        setData(moment())
    }


    return(
        <Container>
            <SubContainer>
                <Seletor>
                    <FaAngleLeft onClick={() =>setData(mesAnterior())}/>
                    <Corrente onClick={() => mesCorrente()}>Atual</Corrente>
                    <FaAngleRight onClick={() =>setData(mesProximo())}/>
                </Seletor>
                <DataHora>{nomeMesCorrente()} {anoCorrente()}</DataHora>
            </SubContainer>
        </Container>
    );
}

export default SelecionarData;