import React from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { Container, Selector, Date, SubContainer } from './styles';

function DateSelector() {

    return(
        <Container>
            <SubContainer>
                <Selector>
                    <FaAngleLeft/>
                    Atual
                    <FaAngleRight/>
                </Selector>
                <Date>Dezembro 2022</Date>
            </SubContainer>
        </Container>
    );
}

export default DateSelector;