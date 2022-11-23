import {Container} from './styles';

import Legenda from '../CalendarioLegendaItem';
import {Theme} from '../Theme';

function CalendarioLegenda() {
    return(
        <Container>
            <Legenda cor={Theme.aula} texto={'Aula'}/>
            <Legenda cor={Theme.reuniao} texto={'Reunião'}/>
            <Legenda cor={Theme.curso} texto={'Curso'}/>
            <Legenda cor={Theme.outro} texto={'Outro'}/>
        </Container>
    );
};

export default CalendarioLegenda;
