import {Container} from './styles';

import Legenda from '../CalendarioLegendaItem';
import Color from '../../assets/styles/colors';

function CalendarioLegenda({categorias}) {
    return(
        <Container>
            {
                categorias.map((categoria, i) => (
                    <Legenda key={i} cor={categoria.cor} texto={categoria.categoria_nome}/>
                ))
            }
        </Container>
    );
};

export default CalendarioLegenda;
