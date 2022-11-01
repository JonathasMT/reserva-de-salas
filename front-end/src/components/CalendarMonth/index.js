import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container, CalendarHeader, CalendarNameDays, WeekContainer, DayContainer, Day, CurrentDay } from './styles';

import Subtitle from "../Subtitle";
import CalendarOptions from "../CalendarOptions";
import CalendarBooking from "../CalendarBooking";

function CalendarMonth() {
    //tradução do moment para PT-BR;
    moment.locale('pt-br');
    moment.updateLocale('pt-br', {months : ["Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho","Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]});

    const [date, setDate] = useState(moment());

    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        const startDay = date.clone().startOf("month").startOf("week");
        const endDay = date.clone().endOf("month").endOf("week");
        const day = startDay.clone().subtract(1, "day");
        const calendar = [];
        while (day.isBefore(endDay, "day")) {
            calendar.push(
                Array(7).fill(0).map(() => day.add(1, "day").clone())
            );
        };

        setCalendar(calendar)
    }, [date])

    //verifica se o dia é o dia atual
    function isToday(day) {
        const getDate = day.format("D").toString();
        if (day.isSame(new Date(), 'day'))
            return <CurrentDay>{getDate}</CurrentDay>
        else
            return <Day> {getDate}</Day>
    };

    function isBooking(day, number) {
        const getDate = parseInt(day.format("D"));
        console.log(getDate)
        if (getDate === number)
            return <CalendarBooking/>
        else
            return''
    };

    return(
        <Container>
            <CalendarOptions value={date} onChange={setDate} />
            <CalendarHeader>
                {
                    ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO']
                    .map((d) => <CalendarNameDays>{d}</CalendarNameDays>)
                }
            </CalendarHeader>

            {calendar.map((week) => (
                <WeekContainer>
                    {week.map((day) => (
                        <DayContainer onClick={() => {setDate(day)}}>
                            {isToday(day)}
                            {isBooking(day, 17)}
                        </DayContainer>
                    ))}
                </WeekContainer>
            ))}
            <Subtitle />
        </Container>
    );
}

export default CalendarMonth;