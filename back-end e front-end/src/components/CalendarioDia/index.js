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

import Legenda from '../Legenda';
import CardReserva from '../CardReserva';
import CalendarioOpcoes from '../CalendarioOpcoes';

function CalendarioDia({aoClicar, selecionado}) {
    //tradução do moment para PT-BR;
    moment.locale('pt-br');
    moment.updateLocale('pt-br', {months : ['Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho','Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']});

    const [data, setData] = useState(moment());
    const [dia, setDia] = useState();

    useEffect(() => {
        setDia(data)
    }, [dia])

    //------------------------------------
    function anterior() {
        setData(data.subtract(1, 'day'));
        console.log('ANTERIOR  ' + data.toString());
    }

    function proximo() {
        setData(data.add(1, 'day'));
        console.log('PROXIMO ' + data.toString());
    }

    return(
        <Container>
            <CalendarioOpcoes valor={data} onChange={setData} aoClicar={aoClicar} selecionado={selecionado}/>
            <CalendarioHeader>
                HOJE
            </CalendarioHeader>
            <Body>
                <Dia>
                    <button onClick={anterior}>Anterior</button>
                    <br/>
                        {''+data.format('D')}
                    <br/>
                    <button onClick={proximo}>proximo</button>
                </Dia>
            </Body>
            <Legenda />
        </Container>
    );
}

export default CalendarioDia;