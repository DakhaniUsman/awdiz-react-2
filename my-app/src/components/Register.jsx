import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const router = useNavigate();

  const HomePage = () => {
    router("/");
  };

  const LoginPage = () => {
    router("/login");
  };

  const [allUsers, setAllUsers] = useState([]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    role : "user",
    password: "",
    confirmPassword: "",
  });

  const input = {
    width: "90%",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    marginBottom: "10px",
    margin : "10px auto"
  };


  const userDiv = {
    boxShadow: "0px 0px 10px #aaa",
    padding: "20px",
    borderRadius: "20px",
  };
  console.log(user,"user");

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleChangeRole = (event) => {
    console.log(event.target.name,event.target.value)
    setUser({...user, [event.target.name] : event.target.value})
  } 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (user.name && user.email && user.password && user.confirmPassword && user.role) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/auth/register",
          {
            user,
          }
        );
        console.log(response.data, "response.data");

        if (response.data.success === true) {
          toast.success(response.data.message);
          setAllUsers([...allUsers, user]);
          setUser({
            name: "",
            email: "",
            role : "",
            password: "",
            confirmPassword: "",
          });

          router("/login");
        } else if (response.data.message === "Email already exist *_*"){
          toast.error(response.data.message + " Kindly login");
          router('/login')
        }else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Kindly fill all the required fields!");
      return;
    }
  };

  return (
    <div>
      {/* <div>
        <button className="btn" onClick={HomePage}>
          Home
        </button>
        <button className="btn" onClick={LoginPage}>
          LogIn
        </button>
      </div> */}
      <h1 className="main-heading">Register Page</h1>

      <div style={{ minWidth: "300px", maxWidth: "350px", margin: "auto" }}>
        <form style={userDiv} onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
            className="input"
            style={input}
            value={user.name}
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            style={input}
            value={user.email}
          />
          <br />
          <label htmlFor="role" >Select Role :</label>
          <br />
          <select name="role" id="role" style={input} onChange={handleChangeRole}>
            <option value="user">User</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Pasword"
            onChange={handleChange}
            style={input}
            value={user.password}
          />
          <br />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter Your Confirm Password"
            onChange={handleChange}
            style={input}
            value={user.confirmPassword}
          />
          <br />
          <button className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
