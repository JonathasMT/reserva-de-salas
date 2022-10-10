import React from "react";
import { Container } from './styles';

const CalendarBloco = ({dia, cor}) => {
    return(
        <Container>
            {dia}
        </Container>
    )
}

export default CalendarBloco;