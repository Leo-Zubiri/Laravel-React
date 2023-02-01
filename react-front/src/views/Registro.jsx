
export default function Registro() {
  return (
    <>
       <h1 className="text-4xl font-black">Crea tu cuenta</h1>
       <p>Crea tu cuenta llenado un formulario</p>

       <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
          <form action="">
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
              />
            </div>

            <input 
              type="submit" 
              value="Crear Cuenta"
              className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            />
          </form>
       </div>
    </>
  )
}
