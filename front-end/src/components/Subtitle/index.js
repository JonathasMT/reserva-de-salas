import { Container } from './styles';

import SubtitleItem from '../SubtitleItem';
import { Theme } from '../Theme';

function Subtitle() {

    return(
        <Container>
            <SubtitleItem Cor={Theme.aula} Text={'Aula'}/>
            <SubtitleItem Cor={Theme.reuniao} Text={'Reunião'}/>
            <SubtitleItem Cor={Theme.curso} Text={'Curso'}/>
            <SubtitleItem Cor={Theme.outro} Text={'Outro'}/>
        </Container>
    );
};

export default Subtitle;
