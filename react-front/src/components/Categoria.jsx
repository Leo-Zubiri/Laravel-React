
export default function Categoria({categoria}) {
  const {nombre,icono} = categoria;

  return (
    <div
        className="flex items-center w-full border gap-4 p-3 hover:bg-amber-400 cursor-pointer"
    >
        <img 
            src={`/img/icono_${icono}.svg`}
            alt="Imagen Icono" 
            className="w-14"
        />

        <p className="text-lg font-bold cursor-pointer truncate">
            {nombre}
        </p>
    </div>
  )
}
