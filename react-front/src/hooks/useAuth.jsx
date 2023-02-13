import clienteAxios from "../config/axios"

export const useAuth = ({middleware,url}) => {

    const login = async (datos,setErrores) => { 
        try {
            const response = await clienteAxios.post('/api/login',datos);
            localStorage.setItem('AUTH_TOKEN',response.data.token);
            setErrores([])
        } catch (error) {
            setErrores(Object.values(
              error.response.data.errors
            ));
        }
    }

    const register = () => { }

    const logout = () => { }

    return {
        login,
        register,
        logout
    }
}