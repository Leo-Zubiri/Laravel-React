import { Link } from "react-router-dom"

import { createRef,useState } from "react"

import Alerta from "../components/Alerta";

import { useAuth } from "../hooks/useAuth";

export default function Registro() {

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [errores, setErrores] = useState([]);
  
  const {register} = useAuth({
    middleware: 'guest',
    url: '/'
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    //console.log(datos)

    register(datos,setErrores)
  }

  return (
    <>
       <h1 className="text-4xl font-black">Crea tu cuenta</h1>
       <p>Crea tu cuenta llenado un formulario</p>

       <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
          <form onSubmit={handleSubmit} noValidate>

            {errores ? errores.map(err=> <Alerta key={err}>{err}</Alerta>): null}

            <div className="mb-4">
              <label 
                className="text-slate-800	"
                htmlFor="name"
              >
                Nombre:
              </label>

              <input 
                id="name"
                type="text"
                className="mt-2 w-full p-3 bg-gray-50"
                name="name"
                placeholder="Tu Nombre"
                ref={nameRef}
              />
            </div>

            <div className="mb-4">
              <label 
                className="text-slate-800	"
                htmlFor="email"
              >
                Email:
              </label>

              <input 
                id="email"
                type="email"
                className="mt-2 w-full p-3 bg-gray-50"
                name="email"
                placeholder="Tu Correo"
                ref={emailRef}
              />
            </div>


            <div className="mb-4">
              <label 
                className="text-slate-800	"
                htmlFor="password"
              >
                Password:
              </label>

              <input 
                id="password"
                type="password"
                className="mt-2 w-full p-3 bg-gray-50"
                name="password"
                placeholder="Tu Password"
                ref={passwordRef}
              />
            </div>

            <div className="mb-4">
              <label 
                className="text-slate-800	"
                htmlFor="password_confirmation"
              >
                Repetir Password:
              </label>

              <input 
                id="password_confirmation"
                type="password"
                className="mt-2 w-full p-3 bg-gray-50"
                name="password_confirmation"
                placeholder="Repetir contraseña"
                ref={passwordConfirmationRef}
              />
            </div>

            <input 
              type="submit" 
              value="Crear Cuenta"
              className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            />
          </form>

          
        <nav className="mt-5">
          <Link to="/auth/login">
            Ya tienes una cuenta? Inicia sesión
          </Link>
        </nav>
       </div>
    </>
  )
}
