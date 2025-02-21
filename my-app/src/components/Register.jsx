import { useNavigate } from "react-router-dom";

function Register () {

    const router = useNavigate();

    const HomePage = () =>{
        router("/")
    }

    const LoginPage = () =>{
        router("/login")
    }

return (
    <div>
        <h1 className="main-heading">Register Page</h1>

        <button className="btn" onClick={HomePage}>Home</button>
        <button className="btn" onClick={LoginPage}>LogIn</button>
    </div>
)

}

export default Register;