import { createContext, useState } from "react";
import { useNavigate, Navigate } from "react-router";
import axios from 'axios';
import {z} from 'zod';
import extractZodErrors from "../utilities/extractZodErrors";

const userSchema = z.object({
    email: z.string().email(),
    name: z.string().min(3),
    password: z.string().min(8)
});

export const AuthContext = createContext();

export const AuthProvider =({ children })=>{
    let navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [errors, setErrors] = useState({});
  
    async function register(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);
        console.log("🟢 register: ", formValues);
        console.log(userSchema.safeParse(formValues));
        const result = userSchema.safeParse(formValues)
        
        if (!result.success) {
            const fieldErrors = extractZodErrors(result);
            setErrors(fieldErrors);
        } else {
            setErrors({});
            try{
                console.log("✅form Data:", formValues);
                
                await axios.post('/users', formValues);
                console.log("🟢 success");
                navigate("/login");
                return true;
            }
            catch (e){
                setErrors({valid:"this username is taken"});
                console.error("🔴: ", e);
                return false;
            }
        }


    }

    async function login(e){    
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);
        console.log("🟢 register: ", formValues);

        try{
            await axios.post('/auth/login', formValues);
            setErrors({});
            setIsLoggedin(true);
            localStorage.setItem("isLoggedin","true");
            localStorage.user = formValues.name;
            console.log("🟢 success");
            navigate("/");
            //! fetch user data
            return true;
        }
        catch (e){
            setErrors({valid:"Cannot Login. Try Again"});
            console.error("🔴", e);
            return false;
        }
    }
    
    async function logout(){
        try{
            await axios.get('/auth/logout');
            localStorage.removeItem("isLoggedin");
            localStorage.removeItem("user");
            setIsLoggedin(false);
            navigate("/login");
            return true
        }catch(e){
            console.error("🔴", e);
            return false;
        }
    }

    function authenticate(){
        console.log("🗝️ authenticating");
        
        if(!localStorage.getItem("isLoggedin")){
            console.log(" not 🗝️ authenticated");
            // navigate("login");
            return false;
        }else{
            return true;
        }
    }

    return (
        <AuthContext.Provider value={{ isLoggedin, setIsLoggedin, register, login, logout, authenticate, errors }}>
            {children}
        </AuthContext.Provider>
    )
}