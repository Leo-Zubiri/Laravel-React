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
        } catch (error) {
            setErrores(Object.values(
              error.response.data.errors
            ));
        }
    }

    const register = () => { }

    const logout = () => { }

    console.log(user)
    console.log(error)

    return {
        login,
        register,
        logout
    }
}