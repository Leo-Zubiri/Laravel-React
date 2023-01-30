# React Router DOM

Librería para el enrutamiento de páginas.

## SETUP

```npm i react-router-dom```

En el proyecto en src crear archivo router.jsx

```jsx
import {createBrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout';

const router = createBrowserRouter([
    { 	path: '/',  element: <Layout /> }
])

export default router;
```
Configurar main.jsx para que despliegue el contenido a través del enrutamiento:

```jsx
import { RouterProvider } from 'react-router-dom'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

```

# Layouts

En src crear carpeta `layouts`

Cada Layout que se crea es un componente de React dentro de este directorio

Para crear las páginas se utiliza la misma convención que Laravel, se crea una carpeta `views` y componentes de React que representan las páginas. Ej. Inicio, Login,Dashboard.

## SETUP

Se agrega la propiedad children al archivo de router.jsx para establecer la jerarquía del Layout y lo que carga:

```jsx
const router = createBrowserRouter([
    { path: '/',  element: <Layout /> ,
      children: [
        { index: true, element: <Inicio /> }
      ]
    },
    { path: '/auth',  element: <AuthLayout /> }
])
```

En este caso el comoponente de Layout se le debe agregar el componente `Outlet` para que cargue junto al contenido:

```jsx
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div>
        Layout
        <Outlet />
    </div>
  )
}

```

