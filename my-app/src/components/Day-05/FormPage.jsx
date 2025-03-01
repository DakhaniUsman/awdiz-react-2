import { useState } from "react";

const FormPage = () => {
  const [data, setData] = useState([{
    username : "",
    useremail : "",
    userpassword : "",
    userconfirmpassword : ""
  }]);

  console.log(data);

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name)
    setData({...data,[event.target.name] : event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    
    data.map((userdata)=> console.log(userdata))
  }

  return (
    <div>
      <h1>Form Page</h1>

      <div className="form-container">
        <form>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="username"
            id="name"
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="useremail"
            id="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="userpassword"
            id="password"
            placeholder="Enter Your Pasword"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="userconfirmpassword"
            id="userconfirmpassword"
            placeholder="Enter Your Confirm Password"
            onChange={handleChange}
          />
          <br />
          <button className="btn" onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
