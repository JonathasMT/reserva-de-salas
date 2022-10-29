import React, { useState } from "react";
import moment from "moment";
import "./styles.css";

import Calendar from "./calendar";

export default function App() {
    moment.locale('pt-br');
    moment.updateLocale('pt-br', {months : ["Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho","Julho","Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]});

    const [value, setValue] = useState(moment());
    
    return (
        <Calendar value={value} onChange={setValue} />
    );
}