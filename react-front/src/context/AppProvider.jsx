import { createContext, useState } from "react"
import {categorias as categoriasDB} from '../data/categorias'

const AppContext = createContext();

export const AppProvider = ({children}) => { 

    const [categorias, setCategorias] = useState(categoriasDB);

    return (
        <AppContext.Provider
            value={{
                categorias,setCategorias
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContext;