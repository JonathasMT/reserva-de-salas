import React, { useState, useEffect } from "react";
import moment from "moment";

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


import { Container, Selector, Date, SubContainer } from './styles';
import Subtitle from "../Subtitle";

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