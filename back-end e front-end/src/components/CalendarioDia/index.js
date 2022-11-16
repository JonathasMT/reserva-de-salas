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
            <CalendarioOpcoes valor={data} onChange={setData} aoClicar={aoClicar} selecionado={selecionado}/>
            <CalendarioHeader>
                HOJE
            </CalendarioHeader>
            <Body>
                <Dia>
                    {calendario.map((mes) => (
                            mes.map((dia) => (
                                // <ContainerDia key={dia} onClick={() => {setData(dia)}}>
                                //     {console.log(calendario)}
                                //     {isAtual(dia)}
                                //     {isReserva(dia, 17)}
                                // </ContainerDia>
                                // console.log(dia.format('D').toString())
                                <div>{dia.format('D').toString()}</div>
                            ))
                            
                    ))}</Dia>
            </Body>
            <Legenda />
        </Container>
    );
}

export default CalendarioDia;