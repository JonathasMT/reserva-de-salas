import React from "react";
import { Container } from './styles';
import SelectDate from "../SelectDate";
import SelectRoom from "../SelectRoom";
import SelectCalendarType from "../SelectCalendarType";

function CalendarOptions({value, onChange}) {

    return(
        <Container>
            <SelectDate date={value} setDate={onChange} />
            <SelectRoom />
            <SelectCalendarType />
        </Container>
    );
}

export default CalendarOptions;