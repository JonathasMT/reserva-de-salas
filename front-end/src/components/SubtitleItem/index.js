import React from "react";
import { Container } from "./styles";

const SubtitleItem = ({Cor, Text}) => {
    return(
        <Container >
            <circle style={{backgroundColor: Cor}}/>
            {Text}
        </Container>
    )
};

export default SubtitleItem;