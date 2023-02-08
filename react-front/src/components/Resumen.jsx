import { formatearDinero } from "../helpers";
import useAppContext from "../hooks/useAppContext"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {
  const {pedido,total} = useAppContext();

  const comprobarPedido = () => pedido.length === 0;


  return (
    <aside className="md:w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">
        Mi pedido
      </h1>
      <p className="text-lg my-5">
        Resumen y totales del pedido
      </p>

      <div className="py-10">
        {
          pedido.length === 0 ? (
            <p className="text-center text-2xl"> 
              No hay elementos en tu pedido aún
            </p>
          ) : (
            pedido.map(prod=>(
              <ResumenProducto 
                key={prod.id}
                producto={prod}
              />
            ))
          )
        }
      </div>

      <p className="text-xl mt-10">
        Total: {formatearDinero(total)}
      </p>

      <form action="" className="w-full">
        <div className="mt-5">
          <input 
            type="submit"
            className={`${comprobarPedido() ? 'bg-indigo-100' : 
            'bg-indigo-600 hover:bg-indigo-800' 
            } px-5 py-2 rounded uppercase font-bold text-white text-center w-full cursor-pointer"
            value="Confirmar Pedido`}
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </aside>
  )
}
