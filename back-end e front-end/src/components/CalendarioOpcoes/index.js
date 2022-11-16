import React from 'react';
import {Container} from './styles';
import SelecionarData from '../SelecionarData';
import SelecionarSala from '../SelecionarSala';
import SelecionarTipo from '../SelecionarTipo';

function CalendarioOpcoes({valor, onChange, aoClicar, selecionado}) {

    return(
        <Container>
            <SelecionarData data={valor} setData={onChange} selecionado={selecionado}/>
            <SelecionarSala />
            <SelecionarTipo aoClicar={aoClicar} selecionado={selecionado}/>
        </Container>
    );
}

export default CalendarioOpcoes;