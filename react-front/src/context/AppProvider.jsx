import { createContext, useState } from "react"
import {categorias as categoriasDB} from '../data/categorias'

const AppContext = createContext();

export const AppProvider = ({children}) => { 

    const [categorias, setCategorias] = useState(categoriasDB);

    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter((cat) => cat.id === id)[0];
        setCategoriaActual(categoria);
    }
    return (
        <AppContext.Provider
            value={{
                categorias,setCategorias,
                categoriaActual,setCategoriaActual,
                handleClickCategoria
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContext;