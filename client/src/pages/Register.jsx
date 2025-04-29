import React, { useRef, useState } from 'react'
import { Navigate  } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function Register() {
    const {isLoggedin, register:hndlRegister, errors } = useAuth();

    console.log("🟡auth: ", isLoggedin);
    if(isLoggedin){
        return <Navigate to="/" replace />;
    }

    // const emailRef = useRef();
    // const usernameRef = useRef();
    // const passwordRef = useRef();
    // const [isHidden, setHidden] = useState(true);

    // async function hndlRegister(){
    //     // get data from inputs // wrap data in an object
    //     const reqBody = {email:emailRef.current.value, name:usernameRef.current.value, password:passwordRef.current.value}
    //     console.log(reqBody);
        
    //     const success = await register(reqBody);
    //     console.log("1🟡success: ", success);
    //     if(!success){
    //         setHidden(false)
    //     }
    // }

    // onSubmit={handleSubmit(hndlRegister)}
    
    return (
        <div className="card border-neutral-content border-1 w-80 p-5 gap-5 m-auto mt-50 shadow-[10px_10px_0px_black]">

            <form action={hndlRegister}  className="flex flex-col gap-5" >
                <input type="email"     name="email" id="email" placeholder="Email" className="input input-neutral-content bg-sky-100" />
                {errors.email && <p className="text-error">{errors.email}</p>}
                <input type="text"      name="name" id="username" placeholder="Username" className="input input-neutral-content bg-sky-100" />
                {errors.name && <p className="text-error">{errors.name}</p>}
                <input type="password"  name="password" id="password" placeholder="Password" className="input input-neutral-content bg-sky-100" />
                {errors.password && <p className="text-error">{errors.password}</p>}

                <input type="submit" value="Register" className="btn bg-blue-950 text-white" />
            </form>
            {errors.valid && <p className="text-error">{errors.valid}</p>}
        </div>
    )
}

