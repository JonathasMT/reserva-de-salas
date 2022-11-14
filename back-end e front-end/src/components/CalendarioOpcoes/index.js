import React from 'react';
import { Container } from './styles';
import SelecionarData from '../SelecionarData';
import SelecionarSala from '../SelecionarSala';
import SelecionarTipo from '../SelecionarTipo';

function CalendarioOpcoes({valor, onChange}) {

    return(
        <Container>
            <SelecionarData data={valor} setData={onChange} />
            <SelecionarSala />
            <SelecionarTipo />
        </Container>
    );
}

export default CalendarioOpcoes;