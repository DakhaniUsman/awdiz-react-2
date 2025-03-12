import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/userSlice';

const FakeLogin = () => {

  const [userData, setUserData] = useState({ username: "", password: "" });
  console.log(userData)
  const [counter, setCounter] = useState(1)
  const router = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state)=> state.user.token)

  const formDiv = {
    with: "100%",
    paddingTop: "30px"
  }

  const input = {
    width: "80%",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    marginBottom: "20px",
  }

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!userData.username && !userData.password) {
        alert("Kindly fill all the required fields!");
        return;
      }
      const response = await axios.post("https://fakestoreapi.com/auth/login", { username: "john_doe", password: "pass123" });
      console.log(response, "response")

    } catch (error) {
      if (counter === 2) {
        alert("Log in Successfully")
        const token = "sasdffghjsasa";
        setCounter(1)
        dispatch(login(token));
        router('/all-products')


      } else {
        setCounter(counter + 1)
        alert(error.response.data, "error")
      }

    }

  }

  useEffect(()=>{
    if(token){
      router(-1);
    }
  },[token])



  return (
    <div>
      <h1>Fake Login Page</h1>
      <form style={formDiv} onSubmit={handleSubmit}>
        <input type="text" style={input} name="username" onChange={handleChange} placeholder='Enter your name' />
        <input type="password" style={input} name="password" onChange={handleChange} placeholder='Enter your password' />
        <input type="submit" value="Submit" className='btn' />
      </form>
    </div>
  )
}

export default FakeLogin;