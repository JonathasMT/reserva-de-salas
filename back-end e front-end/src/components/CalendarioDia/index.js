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

function CalendarioDia({data, setData, calendarioTipo}) {

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
            </Body>
        </Container>
    );
}

export default CalendarioDia;