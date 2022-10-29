import { Container } from './styles';

import SubtitleItem from '../SubtitleItem';
import { Theme } from '../Theme';

function Subtitle() {

    return(
        <Container>
            <SubtitleItem color={Theme.aula} text={'Aula'}/>
            <SubtitleItem color={Theme.reuniao} text={'Reunião'}/>
            <SubtitleItem color={Theme.curso} text={'Curso'}/>
            <SubtitleItem color={Theme.outro} text={'Outro'}/>
        </Container>
    );
};

export default Subtitle;
