import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";

const Navbar = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  // const tokenInRedux = useSelector((state) => state.user.token);
  const userData = useSelector((state)=> state.user.user)
  console.log(userData,"userData")
  return (
    <div
      style={{
        height: "70px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <p onClick={() => router("/")} style={{ cursor: "pointer" }}>
        Home
      </p>
      <p onClick={() => router("/all-products")} style={{ cursor: "pointer" }}>
        Products
      </p>
      {userData?.role === "seller" ? (
        <>
          <p onClick={()=>{router("/view-added-products")}}>View Added Product</p>
          <p onClick={()=>{router("/add-product")}}>Add Product</p>
        </>
      ) : (<></>) }
      {!userData ? (
        <p onClick={() => router("/login")} style={{ cursor: "pointer" }}>
          Login
        </p>
      ) : (
        <p onClick={() => dispatch(logout())} style={{ cursor: "pointer" }}>
          {console.log(userData,"userData Navbar")} 
          Welcome, {userData?.name} <br /> Logout
        </p>
      )}

    </div>
  );
};

export default Navbar;