import {createContext, useState} from 'react';
import api from '../services/api'

import Menu from '../components/Menu';


export const Contexto = createContext({});

export const ContextoProvider = ({children}) => {

    const [menu, setMenu] = useState(false);

    const alterarMenu = () => {
        setMenu(!menu);
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