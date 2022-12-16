import React, {useState, useEffect} from 'react';
import {
    Container,
    Body,
    Dia,
    DiaCorrente
} from './styles';

import CardReserva from '../CardReserva';
import CalendarioLegenda from '../CalendarioLegenda';

function CalendarioDia({momento, categorias, reservas, calendarioTipo}) {

    const [dia, setDia] = useState();

    useEffect(() => {
        setDia(momento.format('D'));
    }, [momento])

    function isAtual(dia) {
        if (momento.isSame(Date.now(), 'day'))
            return <DiaCorrente>{dia}</DiaCorrente>
        else
            return <Dia> {dia}</Dia>
    };

    // function novaReserva(dia) {
    //     const atual = moment();
    //     if (dia.isBefore(atual, 'day')) {
    //         alert('Novas reservas só podem ser efetuadas a partir do dia atual: '+atual.format('DD/MM/YYYY'));
    //     }else {
    //         navegar('/novareserva', {state: {dia: dia.format('YYYY-MM-DD'), categorias: categorias}});
    //     };
    // };

    return(
        <Container>
            <Body>
                    {isAtual(dia)}
                    {
                        reservas.map((reserva, index) => 
                            reserva.data === momento.format('YYYY-MM-DD') &&
                                categorias.map((categoria) => (
                                    reserva.categoria_id == categoria.categoria_id &&
                                        <CardReserva
                                            key={index}
                                            tipo={calendarioTipo}
                                            horaInicio={reserva.hora_inicio}
                                            horaFim={reserva.hora_fim}
                                            titulo={reserva.titulo}
                                            categoria={categoria}
                                        />
                                ))
                        )
                    }
            </Body>
        </Container>
    );
}

export default CalendarioDia;