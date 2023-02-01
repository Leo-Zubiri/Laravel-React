
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
                Nombre
              </label>

              <input 
                id="name"
                type="text"
                className="mt-2 w-full p-3 bg-gray-50"
                name="name"
                placeholder="Tu Nombre"
              />
            </div>
          </form>
       </div>
    </>
  )
}
