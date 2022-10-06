import React from "react";
import { Container } from "./styles";

const SidebarItem = ({Icon, Text}) => {
    return(
        <Container>
            <div />
            <Icon />
            {Text}
        </Container>
    )
};

export default SidebarItem;