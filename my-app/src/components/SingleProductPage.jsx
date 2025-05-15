import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState([])
    // const [seller,setSeller] = useState([])
    console.log(singleProduct, "singleProduct")
    const [loading,setLoading] = useState(false)
    const [isPurchasing,setIsPurchasing] = useState(false)
    const user = useSelector((state)=> state.user.user)
    console.log(user,"user")

    const getSingleProduct = async () => {
        try {

          if(!user?.userId){
            toast.error("PLease loginl")
          }
          const response = await axios.post(
            `http://localhost:8000/api/v1/product/get-single-product/`,{ userId : user.userId, productId : id}
          );
          console.log(response,"response")
          if(response.data.success){
          setSingleProduct(response.data.productData);
          // setSeller(response.data.sellerData)
          setLoading(false);  
          }
          toast.success(response.data.message)
        } catch (error) {
          console.log(error);
        }
      };

      const addToCart = async() => {
        setIsPurchasing(true)
        try {
          const response = await axios.post(
            `http://localhost:8000/api/v1/user/add-to-cart/`,{ userId : user.userId, productId : id}
          );
          console.log(response,"response")
          if(response.data.success){
          // setSeller(response.data.sellerData)
          setLoading(false);  
          }
          toast.success(response.data.message)
        } catch (error) {
          console.log(error);
        } finally{
          setIsPurchasing(false)
        }
      }

      useEffect(() => {
        console.log(id);
        getSingleProduct();
      }, [id]);


    return (
        <div>
        <h1>Single Product - {id}</h1>
        <div style={{width : "100%",height : '100%'}}>
          {!loading ? (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexWrap: "wrap",
                paddingTop: "20px",
                justifyContent: "space-between",
                gap : "5%",
                // border : "1px solid black"
              }}
            >
              <div
                style={{
                  width: "45%",
                  minWidth:"350px",

                  // height : "500px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <img
                  src={singleProduct.image}
                  style={{
                    width: "100%",
                    height: "450px",
                    boxShadow: "3px 3px 5px #aaa",
                    padding: "10px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div
                style={{
                  width: "45%",
                  minWidth:"350px",
                  height: "500px",
                  display: "flex",
                  flexDirection: "column",
                  margin : "auto",
                  alignItems: "start"
                }}
              >
                <h1>Name : {singleProduct.name}</h1>
                <h2>Category : {singleProduct.category}</h2>
                {/* <h2>Seller : {singleProduct.userId.name}</h2> */}
                <p>Price - <span style={{textDecoration : "line-through", fontWeight : "bold"}}>{`${Math.floor(singleProduct.price + 10)}`}</span> {singleProduct.price} </p>
                <p>Quantity : {singleProduct.quantity}</p>
                <p>{singleProduct.description}</p>
                <div style={{display : "flex", gap : "10px"}}>   
                  <div style={{ padding : "10px", border : "2px solid black" , borderRadius : "5px"}}> S </div>
                  <div style={{ padding : "10px", border : "2px solid black" , borderRadius : "5px"}}> M </div>
                  <div style={{ padding : "10px", border : "2px solid black" , borderRadius : "5px"}}> L </div>
                  <div style={{ padding : "10px", border : "2px solid black" , borderRadius : "5px"}}> XL </div>
                </div>
                <button disabled={isPurchasing} className='btn' onClick={addToCart}>Add To Cart</button>
              </div>
            </div>
          ) : (
            <div
              style={{
                width: "50%",
                minWidth: "500px",
                height: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1>Loading...</h1>
            </div>
          )}
        </div>
      </div>
    )
}

export default SingleProductPage