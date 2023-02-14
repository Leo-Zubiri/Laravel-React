import useAppContext from '../hooks/useAppContext'
import { useAuth } from '../hooks/useAuth';
import Categoria from './Categoria'


export default function Sidebar() {
    const {categorias} = useAppContext();

    const { logout } = useAuth({
        middleware: 'auth'
    })

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img 
                src="img/logo.svg" 
                alt="Imagen logotipo"
                className="w-40" 
            />
        </div>

        <div className="mt-10">
            {categorias.map((cat) => 
                <Categoria 
                    categoria={cat} 
                    key={`${cat.id}-${cat.nombre}`}
                />
            )}
        </div>

        <div className='my-5 px-5'>
            <button
                type='button'
                onClick={logout}
                className='text-center bg-red-500 w-full p-3 font-bold text-white truncate rounded-xl'
            >
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
