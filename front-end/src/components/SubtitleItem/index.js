import React from "react";
import { Container, Circle, Title } from "./styles";

const SubtitleItem = ({color, text}) => {
    return(
        <Container>
            <Circle style={{backgroundColor: color}}/>
            <Title>{text}</Title>
        </Container>
    )
};

export default SubtitleItem;