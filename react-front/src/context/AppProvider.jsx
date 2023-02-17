import { createContext, useState, useEffect } from "react"

import {categorias as categoriasDB} from '../data/categorias'

import { toast } from "react-toastify";
import clienteAxios from "../config/axios";


const AppContext = createContext();

export const AppProvider = ({children}) => { 

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => { 
        const nuevoTotal = pedido.reduce((total,prod) => (prod.precio*prod.cantidad) + total,0);
        setTotal(nuevoTotal);
    },[pedido])

    const obtenerCategorias = async () => {
        try {
            const respuesta = await clienteAxios('/api/categorias')
            const {data} = respuesta;

            setCategorias(data.data);
            setCategoriaActual(data.data[0])

            //console.log(respuesta)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { 
        obtenerCategorias()
    },[])

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

    const handleAgregarPedido = ({categoria_id,...producto}) => {
        
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            // Si Está en el pedido
            const pedidoActualizado = pedido.map(pedidoState => 
                pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado);
            toast.success("Actualizado correctamente");

        } else {
            setPedido([...pedido,producto]);
            toast.success("Agregado al pedido");
        }
    }

    const handleEditarCantidad = (id) => { 
        const productoActualizar = pedido.filter(prod=>prod.id === id)[0];
        setProducto(productoActualizar);
        setModal(!modal);
    }

    const handleEliminarProductoPedido = (id) => {
        const pedidoActualizado = pedido.filter(prod=>prod.id !== id);
        setPedido(pedidoActualizado);
        toast.success("Eliminado del pedido");
    }

    const handleSubmitNuevaOrden = async () => { 
        const token = localStorage.getItem('AUTH_TOKEN');

        //console.log(token)
        try {
            const {data} = await clienteAxios.post('/api/pedidos',{
                total,
                productos: pedido.map(prod => {
                    return {
                        id: prod.id,
                        cantidad: prod.cantidad
                    }
                }),
            } , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })   
            
            toast.success(data.message);
            setTimeout(() => { 
                setPedido([]);
            },1000)
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickCompletarPedido = async id => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {
            await clienteAxios.put(`/api/pedidos/${id}`,null,{
              headers: {
                Authorization: `Bearer ${token}`
              }  
            })
            console.log(id);
        } catch (error) {
            console.log(error);
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
                total,setTotal,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                handleSubmitNuevaOrden,
                handleClickCompletarPedido
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default AppContext;