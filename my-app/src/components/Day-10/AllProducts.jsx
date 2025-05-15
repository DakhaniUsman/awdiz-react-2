import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const router = useNavigate();
  const user = useSelector((state)=> state.user.user)
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");
  console.log(user,"user")

  const getAllProducts = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/product/get-all-products", { user : user}
      );
      console.log(response, "response");
      if (response) {
        setAllProducts(response.data.products);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    if (token === null) {
      toast.error("Please Log in first");
      router("/login");
    } else {
      getAllProducts();
    }
  }, [token]);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <h1>All Products</h1>

      <div>
        {allProducts?.length > 0 ? (
          <div
            
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {allProducts?.map((product, i) => (
              <div
                style={{
                  width: "20%",
                  minWidth: "250px",
                  height: "auto",
                  boxShadow: "3px 3px 5px #aaa, 3px 3px 5px #aaa inset",
                  marginBottom: "20px",
                  padding: "10px",
                  borderRadius: "10px",
                }}
                onClick={() => router(`/single-product-page/${product._id}`)}
                key={i}
              >
                <p>
                  {" "}
                  <b>
                    {" "}
                    {product.category} - {product.name}
                  </b>
                </p>
                <p>
                  <img
                    className="product-image"
                    src={product.image}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "contain",
                    }}
                  />
                </p>
                <p>
                  <b>${product.price}/-</b>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
