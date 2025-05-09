import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState([])
    console.log(singleProduct, "singleProduct")
    const [loading,setLoading] = useState(false)

    const getSingleProduct = async () => {
        try {
          const response = await axios.post(
            `http://localhost:8000/api/v1/product/get-single-product/`,{ userId : id}
          );
          console.log(response,"response")
          if(response.data.success){
          setSingleProduct(response.data);
          setLoading(false);
          }
          toast.error(response.data.message)
        } catch (error) {
          console.log(error);
        }
      };

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
                    height: "auto",
                    boxShadow: "3px 3px 5px #aaa",
                    padding: "10px",
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
                  justifyContent: "center",
                  alignItems: "center",
                  margin : "auto"
                }}
              >
                <h1>{singleProduct.title}</h1>
                <p>Price - <span style={{textDecoration : "line-through", fontWeight : "bold"}}>{`${Math.floor(singleProduct.price + 10)}`}</span> {singleProduct.price} </p>
                <p>{singleProduct.description}</p>
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