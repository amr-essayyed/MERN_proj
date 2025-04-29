import { Navigate  } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function Login() {    
    const {isLoggedin, login:hndlLogin, errors} = useAuth();

    // console.log("🟡auth: ", isLoggedin);
    if(isLoggedin){
        return <Navigate to="/" replace />;
    }

    // const usernameRef = useRef();
    // const passwordRef = useRef();
    // const [isHidden, setHidden] = useState(true);

    // async function hndlLogin(){
    //     // get data from inputs // wrap data in an object
    //     const reqBody = {name:usernameRef.current.value, password:passwordRef.current.value}
    //     console.log(reqBody);
        
    //     const success = await login(reqBody);
    //     console.log("1🟡success: ", success);
    //     if(!success){
    //         setHidden(false)
    //     }
    // }
    
    return (
        <div className="card border-neutral-content border-1 w-80 p-5 gap-5 m-auto mt-50 shadow-[10px_10px_0px_black]">
            
            <form onSubmit={hndlLogin} className="flex flex-col gap-5" >
                <input type="text"      name="name"     id="username" placeholder="Username" className="input input-neutral-content bg-sky-100" />
                <input type="password"  name="password" id="password" placeholder="Password" className="input input-neutral-content bg-sky-100" />
                
                <input type="submit" value="Login" className="btn bg-blue-950 text-white" />
            </form>
            {errors.valid && <p className="text-xl text-error bg-sky-300 border-l-3 border-l-error p-1 rounded-xs">Cannot Loggin. Retry!</p>}
        </div>
    )
}

