import React from 'react';

import {Container} from './styles';

import SelecionarData from '../SelecionarData';
import SelecionarSala from '../SelecionarSala';
import SelecionarTipo from '../SelecionarTipo';

function CalendarioOpcoes({momento, setMomento, calendarioTipo, setCalendarioTipo}) {

    return(
        <Container>
            <SelecionarData
                momento={momento}
                setMomento={setMomento}
                calendarioTipo={calendarioTipo}/>
            <SelecionarSala/>
            <SelecionarTipo
                calendarioTipo={calendarioTipo}
                setCalendarioTipo={setCalendarioTipo}/>
        </Container>
    );
}

export default CalendarioOpcoes;