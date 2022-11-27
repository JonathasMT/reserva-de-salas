import {createContext, useState} from 'react';
import api from '../services/api'

import Menu from '../components/Menu';


export const Contexto = createContext({});

export const ContextoProvider = ({children}) => {

    console.log('Passou no arquivo ContextoProvider.js');

    const [menu, setMenu] = useState(false);

    const alterarMenu = () => {
        setMenu(!menu);
        console.log('MENU > ' + menu);
    }


    return (
        <Contexto.Provider
            value={{
                menu: menu,
                alterarMenu,
            }}
        >
        {children}
        </Contexto.Provider>
    );
};