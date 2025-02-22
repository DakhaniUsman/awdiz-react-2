import { useNavigate } from "react-router-dom";

function Home() {

    const router = useNavigate();

    const LoginPage = () =>{
        router("/login")
    }

    const RegisterPage = () =>{
        router("/register")
    }
    return (
    <div>
        <h1 className="main-heading">Welcome User!</h1>

        <button className="btn" onClick={LoginPage}>Login</button>
        <button className="btn" onClick={RegisterPage}>Register</button>
        <button className="btn" onClick={()=> router("/use-state")}>Use State Page</button>
        <button className="btn" onClick={()=> router("/use-effect")}>Use Effect Page</button>
        <button className="btn" onClick={()=> router("/use-params")}>Use Params Page</button>
    </div>
)

}

export default Home;