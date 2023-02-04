import useAppContext from "../hooks/useAppContext";

export default function Categoria({categoria}) {

  const {handleClickCategoria,categoriaActual} = useAppContext();
  const {nombre,icono,id} = categoria;

  return (
    <div
        className={`${categoriaActual.id === id ? "bg-amber-400" : "bg-white"} flex items-center w-full border gap-4 p-3 hover:bg-amber-400 cursor-pointer`}  
    >
        <img 
            src={`/img/icono_${icono}.svg`}
            alt="Imagen Icono" 
            className="w-14"
        />

        <button 
          className="text-lg font-bold cursor-pointer truncate"
          type="button"
          onClick={() => handleClickCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}
