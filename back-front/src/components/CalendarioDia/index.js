import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {
    Container,
    CalendarioHeader,
    Body,
    ContainerDia,
    Dia,
    DiaCorrente
} from './styles';

import CardReserva from '../CardReserva';
import CalendarioLegenda from '../CalendarioLegenda';

function CalendarioDia({data, calendarioTipo, categorias, reservas}) {

    const [dia, setDia] = useState();

    useEffect(() => {
        setDia(data.format('D'));
    }, [data])

    function isAtual(dia) {
        if (data.isSame(Date.now(), 'day'))
            return <DiaCorrente>{dia}</DiaCorrente>
        else
            return <Dia> {dia}</Dia>
    };


    return(
        <Container>
            <Body>
                    {isAtual(dia)}
                    {
                        reservas.map((reserva, index) => 
                            reserva.data === data.format('YYYY-MM-DD') &&
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
            </Body>
        </Container>
    );
}

export default CalendarioDia;