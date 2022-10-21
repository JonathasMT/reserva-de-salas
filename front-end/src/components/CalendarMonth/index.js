import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container, CalendarHeader, CalendarNameDays, Weeks, Days } from './styles';
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
            <CalendarHeader>
                {
                    ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
                    .map((d) => <CalendarNameDays className='week'>{d}</CalendarNameDays>)
                }
            </CalendarHeader>
            {calendar.map((week) => (
                <Weeks>
                    {week.map((day) => (
                        <Days onClick={() => {setValue(day)}}>
                            {day.format("D").toString()}
                        </Days>
                    ))}
                </Weeks>
            ))}
            <Subtitle />
        </Container>
    );
}

export default CalendarMonth;