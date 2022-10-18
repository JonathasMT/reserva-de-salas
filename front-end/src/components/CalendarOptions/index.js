import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container } from './styles';
import DateSelector from "../DateSelect";
import Subtitle from "../Subtitle";
import RoomSelector from "../RoomSelect";
import TimeSelector from "../TimeSelect";

function CalendarOptions() {

    return(
        <Container>
            <DateSelector />
            <RoomSelector />
            <TimeSelector />
        </Container>
    );
}

export default CalendarOptions;