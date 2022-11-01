import React from "react";
import { Container, SubContainer, DayContainer, DayText, WeekContainer, WeekText, MonthContainer, MonthText } from './styles';

function SelectCalendarType() {

    return(
        <Container>
            <SubContainer>
                <DayContainer>
                    <DayText>DIA</DayText>
                </DayContainer>
                <WeekContainer>
                    <WeekText>SEMANA</WeekText>
                </WeekContainer>
                <MonthContainer>
                    <MonthText>MÊS</MonthText>
                </MonthContainer>
            </SubContainer>
        </Container>
    );
}

export default SelectCalendarType;