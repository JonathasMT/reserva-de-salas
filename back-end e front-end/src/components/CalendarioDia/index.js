import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
    Container,
    CalendarioHeader,
    CalendarioDiasSemana,
    ContainerSemana,
    ContainerDia,
    Dia,
    DiaCorrente
} from './styles';

import Legenda from '../Legenda';
import CalendarioOpcoes from '../CalendarioOpcoes';
import CardReserva from '../CardReserva';

function CalendarioDia(selecionado) {
    //tradução do moment para PT-BR;
    moment.locale('pt-br');
    moment.updateLocale('pt-br', {months : ['Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho','Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']});

    const [data, setData] = useState(moment());
    const [calendario, setCalendario] = useState([]);

    useEffect(() => {
        const inicioDia = data.clone().startOf('week');
        const fimDia = data.clone().endOf('week');
        const dia = inicioDia.clone().subtract(1, 'day');
        const calendario = [];
        while (dia.isBefore(fimDia, 'day')) {
            calendario.push(
                Array(7).fill(0).map(() => dia.add(1, 'day').clone())
            );
        };
        setCalendario(calendario)
    }, [data])

    //verifica se o dia é o dia atual
    function isAtual(dia) {
        const getData = dia.format('D').toString();
        if (dia.isSame(new Date(), 'day'))
            return <DiaCorrente>{getData}</DiaCorrente>
        else
            return <Dia> {getData}</Dia>
    };

    function isReserva(dia, number) {
        const getData = parseInt(dia.format('D'));
        if (getData === number)
            return <CardReserva/>
        else
            return''
    };

    return(
        <Container selecionado={selecionado}>
            <CalendarioOpcoes valor={data} onChange={setData} />
            <CalendarioHeader>
                {
                    ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO']
                    .map((d) => <CalendarioDiasSemana key={d}>{d}</CalendarioDiasSemana>)
                }
            </CalendarioHeader>
            {calendario.map((semana) => (
                <ContainerSemana key={semana}>
                    {semana.map((dia) => (
                        <ContainerDia key={dia} onClick={() => {setData(dia)}}>
                            {isAtual(dia)}
                            {isReserva(dia, 17)}
                        </ContainerDia>
                    ))}
                </ContainerSemana>
            ))}
            <Legenda />
        </Container>
    );
}

export default CalendarioDia;