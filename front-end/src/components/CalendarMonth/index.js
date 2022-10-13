import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container, CalendarHeader, CalendarBloco, CalendarHeaderNames, CalendarHeaderBloco, } from './styles';
//import "./styles.css"

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
    }, [value])

    return(
        <Container>
            <CalendarHeader>
                2022
                <CalendarHeaderNames>
                    {
                        ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
                        .map((d) => <CalendarHeaderBloco className='week'>{d}</CalendarHeaderBloco>)
                    }
                </CalendarHeaderNames>
            </CalendarHeader>
            {calendar.map((week) => (
                <div>
                    {week.map((day) => (
                        <CalendarBloco
                            onClick={() => {setValue(day)}}
                        >{day.format("D").toString()}</CalendarBloco>
                    ))}
                </div>
            ))}
        </Container>
    );
}

export default CalendarMonth;