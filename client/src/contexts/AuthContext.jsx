import { createContext, useState } from "react";
import { useNavigate, Navigate } from "react-router";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider =({ children })=>{
    let navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);
  
    async function register(reqBody) {
        try{
            await axios.post('/users', reqBody);
            console.log("🟢 success");
            navigate("/login");
            return true;
        }
        catch (e){
            console.error("🔴: ", e);
            return false;
        }
    }

    async function login(reqBody){        
        try{
            await axios.post('/auth/login', reqBody);
            setIsLoggedin(true);
            localStorage.setItem("isLoggedin","true");
            localStorage.user = reqBody.name;
            console.log("🟢 success");
            navigate("/");
            //! fetch user data
            return true;
        }
        catch (e){
            // setIsLoggedin(false);
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
        <AuthContext.Provider value={{ isLoggedin, setIsLoggedin, register, login, logout, authenticate }}>
            {children}
        </AuthContext.Provider>
    )
}