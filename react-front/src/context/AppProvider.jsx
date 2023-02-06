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

    const handleAgregarPedido = ({categoria_id,imagen,...producto}) => {
        
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            // Si Está en el pedido
            const pedidoActualizado = pedido.map(pedidoState => 
                pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado);
        } else {
            setPedido([...pedido,producto]);
        }
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
                handleAgregarPedido
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContext;