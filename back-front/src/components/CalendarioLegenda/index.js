import {Container} from './styles';

import Legenda from '../CalendarioLegendaItem';
import Color from '../../assets/styles/colors';

function CalendarioLegenda() {
    return(
        <Container>
            <Legenda cor={Color.aula} texto={'Aula'}/>
            <Legenda cor={Color.reuniao} texto={'Reunião'}/>
            <Legenda cor={Color.curso} texto={'Curso'}/>
            <Legenda cor={Color.outro} texto={'Outro'}/>
        </Container>
    );
};

export default CalendarioLegenda;
