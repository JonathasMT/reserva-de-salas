import React from 'react';

import {Container} from './styles';

import SelecionarData from './SelecionarData';
import SelecionarSala from './SelecionarSala';
import SelecionarTipo from './SelecionarTipo';

function CalendarioOpcoes({data, setData, calendarioTipo, setCalendarioTipo}) {

    return(
        <Container>
            <SelecionarData
                data={data}
                setData={setData}
                calendarioTipo={calendarioTipo}/>
            <SelecionarSala/>
            <SelecionarTipo
                calendarioTipo={calendarioTipo}
                setCalendarioTipo={setCalendarioTipo}/>
        </Container>
    );
}

export default CalendarioOpcoes;