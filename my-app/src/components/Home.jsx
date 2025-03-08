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
        <button className="btn" onClick={()=> router("/props")}>Props Page</button>
        <button className="btn" onClick={()=> router("/todo")}>ToDo</button>
        <button className="btn" onClick={()=> router("/formpage")}>Form Page</button>
        <button className="btn" onClick={()=> router("/use-memo")}>Use Memo Page</button>
        <button className="btn" onClick={()=> router("/use-callback")}>Use Callback Page</button>
        <button className="btn" onClick={()=> router("/use-ref")}>Use Ref Page</button>
        <button className="btn" onClick={()=> router("/use-reducer")}>Use Reducer Page</button>
        <button className="btn" onClick={()=> router("/context-counter")}>Context Counter</button>
        <button className="btn" onClick={()=> router("/redux-counter")}>Redux Counter</button>
    </div>
)

}

export default Home;