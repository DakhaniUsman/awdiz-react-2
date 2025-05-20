import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

const Cart = () => {
    const router = useNavigate()
    const [products, setProducts] = useState([]);
  const userData = useSelector((state) => state.user.user);
  const [totalPrice,setTotalPrice] = useState(0);

  const getCartProducts = async() => {
    try {
        if(!userData?.userId){
            return toast.error("Please Login first!");
        }
        const response = await axios.post("http://localhost:8000/api/v1/user/get-cart-products", {userId : userData.userId})
        console.log(response,"response")

        if (response.data.success){
            setProducts(response.data.products)
            setTotalPrice(response.data.totalPrice)
        }
    } catch(error){
        console.log(error,"error");
    }
  };

  const removeItem = async(id) => {
    try {
      console.log(id,"id")
        const response = await axios.post("http://localhost:8000/api/v1/user/remove-cart-product",{
          userId : userData.userId, productId : id  
        })
        console.log(response,"response")
        if (response.data.success){
            toast.success(response.data.message)
            getCartProducts()
        }
    } catch (error) {
      console.log(error, "error");
      toast.error("Failed to remove item")
    }
  }

  useEffect(() => {
    if (userData?.userId) {
      getCartProducts();
    }
  },[userData]);
  return (
    <>
      <h1>Cart Page</h1>

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
        {products?.length > 0 ? (
          <>
            <div
            
            style={{
              position: "relative",
              width: "70%",
              height: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {products?.map((product, i) => (
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
                // onClick={() => router(`/single-product-page/${product._id}`)}
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
                  <button className="btn" onClick={() => removeItem(product._id)}>Delete</button>
              </div>
            ))}
          </div>
          <div 
          style={{
            width: "20%",
            height: "auto",
          }}
          >
            <h2>Cart Summary</h2>
            <p><b>Total Products</b> : {products?.length} </p>
            <p><b>Total Products</b> : {totalPrice} </p>
            
          </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Cart;
