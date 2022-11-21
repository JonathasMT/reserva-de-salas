import React, {useState, useEffect} from 'react';
import {Container, ContainerSemana, ContainerDia, Dia, DiaCorrente} from './styles';

import CardReserva from '../CardReserva';
import CalendarioLegenda from '../CalendarioLegenda';

function CalendarioMes({data, setData}) {
    const [calendario, setCalendario] = useState([]);

    useEffect(() => {
        const inicioDia = data.clone().startOf('month').startOf('week');
        const fimDia = data.clone().endOf('month').endOf('week');
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
        <Container>
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
                <CalendarioLegenda/>
        </Container>
    );
}

export default CalendarioMes;