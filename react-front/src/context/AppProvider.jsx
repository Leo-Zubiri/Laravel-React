import { createContext, useState } from "react"
import {categorias as categoriasDB} from '../data/categorias'

const AppContext = createContext();

export const AppProvider = ({children}) => { 

    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter((cat) => cat.id === id)[0];
        setCategoriaActual(categoria);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProducto = (producto) => {
        setProducto(producto);
    }

    return (
        <AppContext.Provider
            value={{
                categorias,setCategorias,
                categoriaActual,setCategoriaActual,
                handleClickCategoria,
                modal, handleClickModal,
                producto, handleSetProducto,
                pedido, setPedido,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContext;