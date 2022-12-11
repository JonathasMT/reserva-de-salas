import React, {useState, useEffect} from 'react';
import {Container, Body, ContainerDia, Dia, DiaCorrente} from './styles';

import CardReserva from '../CardReserva';
import CalendarioLegenda from '../CalendarioLegenda';

function CalendarioSemana({data, setData, categorias, reservas, calendarioTipo}) {
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
        if (dia.isSame(Date.now(), 'day'))
            return <DiaCorrente>{getData}</DiaCorrente>
        else
            return <Dia> {getData}</Dia>
    };

    return(
        <Container >
            {calendario.map((semana) => (
                <Body key={semana}>
                    {semana.map((dia) => (
                        <ContainerDia key={dia} onClick={() => {setData(dia)}}>
                            {isAtual(dia)}
                            {
                                reservas.map((reserva, index) => 
                                    reserva.data === dia.format('YYYY-MM-DD') &&
                                        categorias.map((categoria) => (
                                            reserva.categoria_id == categoria.categoria_id &&
                                                <CardReserva
                                                    key={index}
                                                    tipo={calendarioTipo}
                                                    horaInicio={reserva.hora_inicio}
                                                    horaFim={reserva.hora_fim}
                                                    titulo={reserva.titulo}
                                                    cor={categoria.cor}
                                                />
                                        ))
                                )
                            }
                        </ContainerDia>
                    ))}
                </Body>
            ))}
        </Container>
    );
}

export default CalendarioSemana;