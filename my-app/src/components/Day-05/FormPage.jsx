import { useState } from "react";

const FormPage = () => {

  const [allUsers, setAllUsers] = useState([]);

  const [user, setUser] = useState({
    username : "",
    useremail : "",
    userpassword : "",
    userconfirmpassword : ""
  });

  const input = {
    width : "100%",
    padding : "10px",
    border : "1px solid black",
    borderRadius : "10px",
    marginBottom : "10px"
  }

  const userContainer = {
    width : "100%",
    display : "flex",
    justifyContent : "center",
    gap : "20px"
  }

  const userDiv = {
    boxShadow : "0px 0px 10px #aaa",
    padding : "20px",
    borderRadius : "20px"
  }
  console.log(user);

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name)
    setUser({...user,[event.target.name] : event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();  

    if(user.username && user.useremail &&  user.userpassword && user.userconfirmpassword)  {
      setAllUsers([...allUsers,user]);
      setUser({
        username : "",
        useremail : "",
        userpassword : "",
        userconfirmpassword : ""
      });
    } else{
      alert("kidnly fill all the required fields!");
      return;
    }

  }

  return (
    <div>
      <h1>Form Page</h1>

      <div className="form-container" style={{
        minWidth : "300px",
        maxWidth : "350px",
        margin : "auto"
      }}>
        <form>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="username"
            id="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
            className="input"
            style={input}
            value={user.username}
          />
          <br />
          <input
            type="email"
            name="useremail"
            id="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            style={input}
            value={user.useremail}
          />
          <br />
          <input
            type="password"
            name="userpassword"
            id="password"
            placeholder="Enter Your Pasword"
            onChange={handleChange}
            style={input}
            value={user.userpassword}
          />
          <br />
          <input
            type="password"
            name="userconfirmpassword"
            id="userconfirmpassword"
            placeholder="Enter Your Confirm Password"
            onChange={handleChange}
            style={input}
            value={user.userconfirmpassword}
          />
          <br />
          <button className="btn" onClick={handleClick}>Submit</button>
        </form>
      </div>

      <div>
        <h1>All Users</h1>
        <div className="users-container" style={userContainer}>
          {allUsers.map((user,i)=>(
            <div key={i} style={userDiv}>
              <h5>User No. {i + 1}</h5>
              <h3>Name : {user.username}</h3>
              <h3>Email : {user.useremail}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormPage;
