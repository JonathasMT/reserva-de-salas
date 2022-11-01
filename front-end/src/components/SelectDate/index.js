import moment from "moment";
import React from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { Container, Selector, DateTime, SubContainer, Current } from './styles';

function SelectDate({date, setDate}) {
    function currentMonthName() {
        return date.format('MMMM');
    }

    function currentYear() {
        return date.format('YYYY');
    }

    function prevMonth() {
        return date.clone().subtract(1, 'month');
    }

    function nextMonth() {
        return date.clone().add(1, 'month');
    }
    
    // function thisMonth() {
    //     return date.isSame(new Date(), 'month');
    // }

    function currentMonth() {
        setDate(moment())
    }


    return(
        <Container>
            <SubContainer>
                <Selector>
                    <FaAngleLeft onClick={() =>setDate(prevMonth())}/>
                    <Current onClick={() => currentMonth()}>Atual</Current>
                    <FaAngleRight onClick={() =>setDate(nextMonth())}/>
                </Selector>
                <DateTime>{currentMonthName()} {currentYear()}</DateTime>
            </SubContainer>
        </Container>
    );
}

export default SelectDate;