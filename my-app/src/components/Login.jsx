import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const router = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);

  // const LoggedInFunction = () => {
  //   setLoggedIn(!loggedIn);
  // };

  const HomePage = () => {
    router("/");
  };

  const RegisterPage = () => {
    router("/register");
  };

  const AllProductsPage = () => {
    router("/all-products")
  }
  return (
    <div>
      <h1 className="main-heading">Login Page</h1>

      <button className="btn" onClick={HomePage}>
        Home
      </button>
      <button className="btn" onClick={RegisterPage}>
        Register
      </button>
      <button className="btn" onClick={AllProductsPage}>
        All Products
      </button>

      {/* {loggedIn ? (
        <div>
          <h2>Welcome User</h2>
          <button className="btn" onClick={LoggedInFunction}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h2>Kindly Login</h2>
          <button className="btn" onClick={LoggedInFunction}>
            Log In
          </button>
        </div>
      )} */}

        
    </div>
  );
}

export default Login;
