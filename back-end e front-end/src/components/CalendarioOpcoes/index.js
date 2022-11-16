import React from 'react';
import { Container } from './styles';
import SelecionarData from '../SelecionarData';
import SelecionarSala from '../SelecionarSala';
import SelecionarTipo from '../SelecionarTipo';

function CalendarioOpcoes({valor, onChange, selecionado}) {

    return(
        <Container>
            <SelecionarData data={valor} setData={onChange} />
            <SelecionarSala />
            <SelecionarTipo selecionado={selecionado}/>
        </Container>
    );
}

export default CalendarioOpcoes;