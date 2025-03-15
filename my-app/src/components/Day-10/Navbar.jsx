import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";

const Navbar = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const tokenInRedux = useSelector((state) => state.user.token);
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
      {!tokenInRedux ? (
        <p onClick={() => router("/fake-login")} style={{ cursor: "pointer" }}>
          Login
        </p>
      ) : (
        <p onClick={() => dispatch(logout())} style={{ cursor: "pointer" }}>
          Logout
        </p>
      )}
    </div>
  );
};

export default Navbar;