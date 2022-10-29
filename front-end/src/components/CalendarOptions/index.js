import React from "react";
import { Container } from './styles';
import DateSelector from "../DateSelect";
import RoomSelector from "../RoomSelect";
import TimeSelector from "../TimeSelect";

function CalendarOptions({value, onChange}) {

    return(
        <Container>
            <DateSelector date={value} setDate={onChange} />
            <RoomSelector />
            <TimeSelector />
        </Container>
    );
}

export default CalendarOptions;