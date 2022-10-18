import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container } from './styles';
import Subtitle from "../Subtitle";
import CalendarOptions from "../CalendarOptions";

function CalendarMonth() {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");

    useEffect(() => {
        const day = startDay.clone().subtract(1, "day");
        const calendar = [];
        while (day.isBefore(endDay, "day")) {
            calendar.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            );
        };

        setCalendar(calendar)
    // eslint-disable-next-line
    }, [value])

    return(
        <Container>
            <CalendarOptions/>
            <calendarHeader>
                {
                    ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO']
                    .map((d) => <days className='week'>{d}</days>)
                }
            </calendarHeader>
            {calendar.map((week) => (
                <weeks>
                    {week.map((day) => (
                        <days onClick={() => {setValue(day)}}>
                            {day.format("D").toString()}
                        </days>
                    ))}
                </weeks>
            ))}
            <Subtitle />
        </Container>
    );
}

export default CalendarMonth;