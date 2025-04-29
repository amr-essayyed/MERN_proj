import { Navigate  } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function Register() {
    const {isLoggedin, register:hndlRegister, errors } = useAuth();

    // console.log("🟡auth: ", isLoggedin);
    if(isLoggedin){
        return <Navigate to="/" replace />;
    }

    
    return (
        <div className="card border-neutral-content border-1 w-80 p-5 gap-5 m-auto mt-50 shadow-[10px_10px_0px_black]">

            <form onSubmit={hndlRegister}  className="flex flex-col gap-5" >
                <div>
                    <input type="email"     name="email" id="email" placeholder="Email" className="input input-neutral-content bg-sky-100" />
                    {errors.email && <p className="text-xl text-error bg-sky-300 border-l-3 border-l-error p-1 rounded-xs">{errors.email}</p>}
                </div>
                <div>
                    <input type="text"      name="name" id="username" placeholder="Username" className="input input-neutral-content bg-sky-100" />
                    {errors.name && <p className="text-xl text-error bg-sky-300 border-l-3 border-l-error p-1 rounded-xs">{errors.name}</p>}
                </div>
                <div>
                    <input type="password"  name="password" id="password" placeholder="Password" className="input input-neutral-content bg-sky-100" />
                    {errors.password && <p className="text-xl text-error bg-sky-300 border-l-3 border-l-error p-1 rounded-xs">{errors.password}</p>}
                </div>

                <input type="submit" value="Register" className="btn bg-blue-950 text-white" />
            </form>
            {errors.valid && <p className="text-xl text-error bg-sky-300 border-l-3 border-l-error p-1 rounded-xs">{errors.valid}</p>}
        </div>
    )
}

