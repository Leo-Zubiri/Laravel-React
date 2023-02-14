# Auth y useSWR

Cuando se obtiene el token de laravel en el front se puede utilizar useSWR para revalidar los datos.

    Hay ventajas de implementar SWR, si el token expira se cerrará la sesión, se identificará que usuario inicia sesión.

## useAuth

Se integra SWR al hook personalizado de useAuth

```jsx
import useSWR from 'swr';

import clienteAxios from "../config/axios"

export const useAuth = ({middleware,url}) => {

    const token = localStorage.getItem('AUTH_TOKEN')

    const {data: user,error,mutate} = useSWR('/api/user', ()=>
        clienteAxios('/api/user',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )

    const login = async (datos,setErrores) => { 
        try {
            const response = await clienteAxios.post('/api/login',datos);
            localStorage.setItem('AUTH_TOKEN',response.data.token);
            setErrores([])
            await mutate() //Forzar revalidacion useSWR

            ...
```