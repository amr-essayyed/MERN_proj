import React, { useRef, useState } from 'react'
import { useNavigate, Navigate  } from 'react-router';
// import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';



export default function Login() {    
    const {isLoggedin, login} = useAuth();
    console.log("🟡auth: ", isLoggedin);
    if(isLoggedin){
        return <Navigate to="/" replace />;
    }

    const usernameRef = useRef();
    const passwordRef = useRef();
    const [isHidden, setHidden] = useState(true);

    async function hndlLogin(){
        // get data from inputs // wrap data in an object
        const reqBody = {name:usernameRef.current.value, password:passwordRef.current.value}
        console.log(reqBody);
        
        const success = await login(reqBody);
        console.log("1🟡success: ", success);
        if(!success){
            setHidden(false)
        }
    }
    
    return (
        <div className="card border-neutral-content border-1 w-80 p-5 gap-5 m-auto mt-50 shadow-[10px_10px_0px_black]">
            <form action="" className="flex flex-col gap-5" >
                <input type="text" name="name" id="username" placeholder="Username" className="input input-neutral-content bg-sky-100" ref={usernameRef} />
                <input type="password" name="password" id="password" placeholder="Password" className="input input-neutral-content bg-sky-100" ref={passwordRef} />
                <input type="button" value="Login" className="btn bg-blue-950 text-white" onClick={hndlLogin} />
            </form>
            <div className={isHidden?"hidden":"text-red-600"}>Cannot Loggin. Retry!</div>
        </div>
    )
}

