import { useNavigate } from "react-router-dom";


function Login () {

    const router = useNavigate();

    const HomePage = () =>{
        router("/")
    }

    const RegisterPage = () =>{
        router("/register")
    }
    return (
        <div>
            <h1 className="main-heading">Login Page</h1>

            <button className="btn" onClick={HomePage}>Home</button>
            <button className="btn" onClick={RegisterPage}>Register</button>
        </div>
    )

}

export default Login;