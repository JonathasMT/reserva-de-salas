import moment from 'moment';
import React, { useState } from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

import {Container, SubContainer, Seletor, DataHora, Corrente} from './styles';

function SelecionarData({data, setData, calendarioTipo}) {
    function nomeDiaCorrente() {
        return (
            data.format('D [de] MMMM [de] YYYY')
        );
    }

    function nomeSemanaCorrente() {
        const inicioSemana = data.clone().startOf('week').format('DD/MM/YY');
        const finalSemana = data.clone().endOf('week').format('DD/MM/YY');
        return (
            inicioSemana + ' a ' + finalSemana
        );
    };

    function nomeMesCorrente() {
        return (
            data.format('MMMM [de] YYYY')
        );
    };

    function mesAnterior() {
        return data.clone().subtract(1, calendarioTipo);
    };

    function mesProximo() {
        return data.clone().add(1, calendarioTipo);
    }
    
    // function mesAtual() {
    //     return data.isSame(new Date(), 'month');
    // }

    function mesCorrente() {
        setData(moment())
    }

    function dataNome() {
        if(calendarioTipo === 'day')
            return nomeDiaCorrente();
        if(calendarioTipo === 'week')
            return nomeSemanaCorrente();
        if(calendarioTipo === 'month')
            return nomeMesCorrente();
    };
    
    return(
        <Container>
            <SubContainer>
                <Seletor>
                    <FaAngleLeft onClick={() =>setData(mesAnterior())}/>
                    <Corrente onClick={() => mesCorrente()}>Atual</Corrente>
                    <FaAngleRight onClick={() =>setData(mesProximo())}/>
                </Seletor>
                <DataHora>
                    {dataNome()}
                </DataHora>
            </SubContainer>
        </Container>
    );
}

export default SelecionarData;