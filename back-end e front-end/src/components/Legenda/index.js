import { Container } from './styles';

import LegendaItem from '../LegendaItem';
import { Theme } from '../Theme';

function Legenda() {

    return(
        <Container>
            <LegendaItem cor={Theme.aula} texto={'Aula'}/>
            <LegendaItem cor={Theme.reuniao} texto={'Reunião'}/>
            <LegendaItem cor={Theme.curso} texto={'Curso'}/>
            <LegendaItem cor={Theme.outro} texto={'Outro'}/>
        </Container>
    );
};

export default Legenda;
