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

function CalendarioDia({data, setData, calendarioTipo, reservas}) {

    const [dia, setDia] = useState();

    useEffect(() => {
        setDia(data.format('D'));
        console.log('atualizou '+ data.format('D'));
    }, [data])


    return(
        <Container>
            <Body>
                <Dia>
                    {dia}
                </Dia>
                    {
                        reservas.map((reserva, i) => 
                            reserva.data === data.format('YYYY-MM-DD') 
                            && 
                            <CardReserva
                                key={i}
                                tipo={calendarioTipo}
                                horaInicio={reserva.hora_inicio}
                                horaFim={reserva.hora_fim}
                                titulo={reserva.titulo}
                                cor={reserva.categoria_id}
                            />
                        )
                    }
            </Body>
        </Container>
    );
}

export default CalendarioDia;