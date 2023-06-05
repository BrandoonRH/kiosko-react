import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'
import clientAxios from "../config/axios";

export const useAuth = ({middleware, url}) =>{

    const token = localStorage.getItem('AUTH_TOKEN'); 
    const navigate = useNavigate(); 

    const {data: user, error, mutate, isLoading} = useSWR('/user', () => 
        clientAxios('/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    ); 

    const login = async (data, setErrors) => {

    try {
        const response = await clientAxios.post('/login', data); 
        localStorage.setItem('AUTH_TOKEN', response.data.token); 
        //console.log(response.data.token); 
        setErrors([]); 
        await mutate(); 
        return true;
        } catch (error) {
            setErrors(Object.values(error.response.data.errors));  
        }

    }//fin login


    const register = async (data, setErrors) => {
        try {
            const response = await clientAxios.post('/register', data); 
            // console.log(response.data.token); 
            localStorage.setItem('AUTH_TOKEN', response.data.token); 
            setErrors([]); 
            await mutate(); 
            return true;
          } catch (error) {
            setErrors(Object.values(error.response.data.errors));  
          }
    }

    const logout = async () => {
        try {
            await clientAxios.post('/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }); 
            localStorage.removeItem('AUTH_TOKEN'); 
            await mutate(undefined); 
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
    }

    //console.log(user); 
    //console.log(error); 


    useEffect(() => {
            if(middleware === 'guest' && url && user){
                navigate(url); 
            }
            if(middleware == 'guest' && user && user.admin){
                navigate('/admin'); 
            }
            if(middleware == 'admin' && user && !user.admin){
                navigate('/'); 
            }
            if(middleware === 'auth' && error){
                navigate('/auth/login'); 
            }
    }, [user, error])

    return{
        login, 
        register,
        logout,
        user,
        error, 
        isLoading
    }
}