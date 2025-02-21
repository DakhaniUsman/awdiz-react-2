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

        <h2>If you are new to this website kindly Register</h2>
        <h2>If you have already registered kindly Log In</h2>

        <button className="btn" onClick={LoginPage}>Login</button>
        <button className="btn" onClick={RegisterPage}>Register</button>
    </div>
)

}

export default Home;