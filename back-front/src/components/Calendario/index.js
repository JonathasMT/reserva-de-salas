import React, {useState} from 'react';
import moment from 'moment';

import CalendarioBody from "../CalendarioBody";
import CalendarioHeader from "../CalendarioHeader";
import CalendarioOpcoes from "../CalendarioOpcoes";
import CalendarioLegenda from "../CalendarioLegenda";
import { Container } from './styles';

function Calendario() {
    //tradução do moment para PT-BR;
    moment.updateLocale('pt-br', {
                months : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho','Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        weekdays: ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO']});
    moment.locale('pt-br');

    const [data, setData] = useState(moment());
    const [calendarioTipo, setCalendarioTipo] = useState('month');

    return(
        <Container>
            <CalendarioOpcoes 
                setData={setData} 
                calendarioTipo={calendarioTipo}
                setCalendarioTipo={setCalendarioTipo}
                data={data}/>
            <CalendarioHeader
                calendarioTipo={calendarioTipo}
                data={data}/>
            <CalendarioBody
                calendarioTipo={calendarioTipo}
                data={data}
                setData={setData}/>
            {/* <CalendarioLegenda/> */}
        </Container>
)
};

export default Calendario;