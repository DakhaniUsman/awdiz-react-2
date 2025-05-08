import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ViewAddedProduct = () => {
  const user = useSelector((state) => state.user.user)
  console.log(user,"user")
  const [products, setProducts] = useState([])
  console.log(products,"products")
  const router = useNavigate();
  
  const getAddedProducts = async() => {
    if (user?.userId && user?.role === "seller"){
      try {
        const response = await axios.post("http://localhost:8000/api/v1/product/get-added-products", { userId : user.userId });
        console.log(response,"response")
        if (response.data.success){
          toast.success(response.data.message)
          setProducts(response.data.productData.products)
        }
      } catch (error) {
        console.log(error)
      }
    }

  }

  useEffect(()=>{
    if(user && user?.role !== "seller" || !user){
      toast.error("You do not have access to this page")
      router("/")
    }
    getAddedProducts();
  },[user])

  return (
    <div>
      <h1>View Added Products</h1>

      {products.length > 0 ? (<div className="product-card" style={{
          position : "relative",
          width: "100%",
          height: "100%",
          display: "flex",  
          justifyContent: "space-evenly",
          flexWrap: "wrap"
        }}>
          {products.map((product,i) => (
            <div style={{
              width: "20%",
              minWidth: "250px",
              height: "auto",
              boxShadow: "3px 3px 5px #aaa , 3px 3px 5px #aaa inset",
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "10px"

            }} onClick={()=> router(`/single-product/${product.id}`)} key={i}>
              <img src={product.image} style={{
                width: "100%",
                height: "300px",
                objectFit: "contain"
              }} />
              <p><b>Category : {product.category}</b></p>
              <p><b>Quantity : {product.quantity}</b></p>
              <p><b>Price : ${product.price}/-</b></p>
            </div>
          ))}
        </div>) : (
          <h1>Loading...</h1>
        )}
    </div>

    
  )
}

export default ViewAddedProduct