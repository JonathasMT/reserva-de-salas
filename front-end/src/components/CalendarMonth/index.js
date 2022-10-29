import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container, CalendarHeader, CalendarNameDays, WeekContainer, DayContainer, Day } from './styles';
import Subtitle from "../Subtitle";
import CalendarOptions from "../CalendarOptions";

function CalendarMonth() {
    //tradução do moment para PT-BR;
    moment.locale('pt-br');
    moment.updateLocale('pt-br', {months : ["Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho","Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]});

    const [date, setDate] = useState(moment());

    const [calendar, setCalendar] = useState([]);

    const startDay = date.clone().startOf("month").startOf("week");
    const endDay = date.clone().endOf("month").endOf("week");

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
    }, [date])

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
                            <Day>
                                {day.format("D").toString()}
                            </Day>
                        </DayContainer>
                    ))}
                </WeekContainer>
            ))}
            <Subtitle />
        </Container>
    );
}

export default CalendarMonth;