import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  console.log(singleProduct, "singleProduct");
  const [loading, setLoading] = useState(true);

  const GetSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      // console.log(response.data)
      setSingleProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(id);
    GetSingleProduct();
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
  );
};

export default SingleProduct;
