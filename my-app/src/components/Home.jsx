import { useNavigate } from "react-router-dom"

function Home() {

    const router = useNavigate();
    return (
    <div>
        <h1>Home</h1>

        <button onClick={()=>{}}>Login</button>
        <button>Register</button>
    </div>
)

}