import { formatearDinero } from "../helpers";
import useAppContext from "../hooks/useAppContext";

export default function Producto({producto,botonAgregar = false, botonDisponible = false}) {
    const {nombre,imagen,precio} = producto;

    const {handleClickModal, handleSetProducto} = useAppContext();
  return (
    <div className="border p-3 shadow bg-white">
        <img 
            src={`/img/${imagen}.jpg`}
            alt={`Imagen ${nombre}`} 
            className="w-full"
        />

        <div className="p-5">
            <h3 className="text-2xl font-bold"> {nombre} </h3>
            <p className="mt-5 font-black text-4xl text-amber-500">
                {formatearDinero(precio)}
            </p>
        </div>

        {botonAgregar && (
            <button
                type="button"    
                className="bg-indigo-600 hover:bgind800 text-white w-full mt-5 p-3 uppercase font-bold rounded-xl"
                onClick={() => { 
                    handleClickModal();
                    handleSetProducto(producto);
                }}
            >
                Agregar
            </button>
        )}

        {botonDisponible && (
            <button
                type="button"    
                className="bg-indigo-600 hover:bgind800 text-white w-full mt-5 p-3 uppercase font-bold rounded-xl"
                onClick={() => { }}
            >
                Producto Agotado
            </button>
        )}

    </div>
  )
}
