import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userSlice";

function Login() {
  const router = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  // const [loggedIn, setLoggedIn] = useState(false);

  // const LoggedInFunction = () => {
  //   setLoggedIn(!loggedIn);
  // };

  const RegisterPage = () => {
    router("/register");
  };

  const input = {
    width: "90%",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    marginBottom: "10px",
  };

  const userDiv = {
    boxShadow: "0px 0px 10px #aaa",
    padding: "20px",
    borderRadius: "20px",
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        {
          userData,
        }
      );
      console.log(response, "response");
      if (response.data.success === true) {
        toast.success(response.data.message);
        setUserData({ email: "", password: "" });
        dispatch(login(response.data))
        router("/");
      } else if (response.data.message === "Kindly register") {
        toast.error(response.data.message);
        router("/register");
      }else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message || error.response.data.error);
    }

    toast.success("Login Successfull!")
  };
  return (
    <div>
      <h1 className="main-heading">Login Page</h1>
      <button className="btn" onClick={RegisterPage}>
        Register
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

      <div
        style={{
          minWidth: "300px",
          maxWidth: "350px",
          margin: "auto",
          marginTop: "2em",
        }}
      >
        <form style={userDiv} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={input}
            onChange={handleChange}
            value={userData.email}
          />{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            style={input}
            onChange={handleChange}
            value={userData.password}
          />{" "}
          <br />
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </div>
  );
}

export default Login;
