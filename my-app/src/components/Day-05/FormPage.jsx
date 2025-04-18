import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const isLight = useSelector((state) => state.theme.isLight);
  // const dispatch = useDispatch();
  console.log("isLight :", isLight);
  const router = useNavigate();

  const [allUsers, setAllUsers] = useState([]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const input = {
    width: "100%",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    marginBottom: "10px",
  };

  const userContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };

  const userDiv = {
    boxShadow: "0px 0px 10px #aaa",
    padding: "20px",
    borderRadius: "20px",
  };
  console.log(user);

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();

    if (user.name && user.email && user.password && user.confirmPassword) {
      try {
        const res = await axios.post("http://localhost:8000/api/v1/auth/register",{
          user,
        });
        console.log(res.data,"res.data")
  
        if(res.data.success === true){
          toast.success(res.data.message)
          setAllUsers([...allUsers, user]);
          setUser({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          router("/login")
          
        } else {
           toast.error(res.data.message)
        }

      } catch (error) {
        console.log(error)
      }
  
    } else {
      toast.error("Kindly fill all the required fields!");
      return;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: isLight ? "white" : "#333",
      }}
    >
      <h1>
        Form Page{" "}
        {/* <button
          className="btn"
          onClick={() => dispatch({type :"toggle" })}
        >
          {isLight ? "🌙" : "☀️"}
        </button> */}
      </h1>

      <div
        className="form-container"
        style={{
          minWidth: "300px",
          maxWidth: "350px",
          margin: "auto",
        }}
      >
        <form>
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
          <button className="btn" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>

      <div>
        <h1>All Users</h1>
        <div className="users-container" style={userContainer}>
          {allUsers.map((user, i) => (
            <div key={i} style={userDiv}>
              <h5>User No. {i + 1}</h5>
              <h3>Name : {user.name}</h3>
              <h3>Email : {user.email}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormPage;
