import { useEffect } from 'react';
import useSWR from 'swr';

import clienteAxios from "../config/axios"

import { useNavigate } from 'react-router-dom';

export const useAuth = ({middleware,url}) => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate()

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

    useEffect(() => { 
        if(middleware === 'guest' && url && user){
            navigate(url)
        }

        if(middleware === 'auth' && error){
            navigate('/auth/login')
        }
    },[user,error])

    return {
        login,
        register,
        logout,
        user, 
        error
    }
}