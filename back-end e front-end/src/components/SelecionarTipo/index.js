import React, {useState} from 'react';
import {
    Container,
    SubContainer,
    ContainerDia,
    Dia,
    ContainerSemana,
    Semana,
    ContainerMes,
    Mes,
    ContainerSemanaSelecionada,
    ContainerMesSelecionado,
    ContainerDiaSelecionado
} from './styles';

function SelecionarTipo({calendarioTipo,setCalendarioTipo}) {

    const DiaSelecionado = () => {
        return(
            <SubContainer>
                <ContainerDiaSelecionado>
                    <Dia>DIA</Dia>
                </ContainerDiaSelecionado>
                <ContainerSemana onClick={()=>setCalendarioTipo('week')}>
                    <Semana>SEMANA</Semana>
                </ContainerSemana>
                <ContainerMes onClick={()=>setCalendarioTipo('month')}>
                    <Mes>MÊS</Mes>
                </ContainerMes>
            </SubContainer>
        );
    };
    const SemanaSelecionada = () => {
        return(
            <SubContainer>
                <ContainerDia onClick={()=>setCalendarioTipo('day')}>
                    <Dia>DIA</Dia>
                </ContainerDia>
                <ContainerSemanaSelecionada>
                    <Semana>SEMANA</Semana>
                </ContainerSemanaSelecionada>
                <ContainerMes onClick={()=>setCalendarioTipo('month')}>
                    <Mes>MÊS</Mes>
                </ContainerMes>
            </SubContainer>
        );
    };
    const MesSelecionado = () => {
        return(
            <SubContainer>
                <ContainerDia onClick={()=>setCalendarioTipo('day')}>
                    <Dia>DIA</Dia>
                </ContainerDia>
                <ContainerSemana onClick={()=>setCalendarioTipo('week')}>
                    <Semana>SEMANA</Semana>
                </ContainerSemana>
                <ContainerMesSelecionado>
                    <Mes>MÊS</Mes>
                </ContainerMesSelecionado>
            </SubContainer>
        );
    };

    const Tipo = () => {
        switch (calendarioTipo) {
        case 'day':
            return <DiaSelecionado/>
        case 'week':
            return <SemanaSelecionada/>
        case 'month':
            return<MesSelecionado/>
        };
    };

    return(
        <Container>
            <Tipo/>
        </Container>
    );
}

export default SelecionarTipo;