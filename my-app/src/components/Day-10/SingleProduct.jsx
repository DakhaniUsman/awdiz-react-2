import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState([]);
    console.log(singleProduct, "singleProduct")

    const GetSingleProduct = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            // console.log(response.data)
            setSingleProduct(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        console.log(id);
        GetSingleProduct();
    }, [id])



    return (
        <div>
            <h1>Single Product - {id}</h1>
            <div>
                {singleProduct ? <div  style={{
                width : "100%",
                minHeight : "100vh",
                display : "flex",
                justifyContent : "space-between",
                border : "1px solid black"
            }} >
                    <div style={{
                        width : "50%",
                        height : "500px",
                        display : "flex",
                        justifyContent : "center",
                        alignItems : "center"
                    }}>
                    <img src={singleProduct.image}  style={{
                        width : "100%", height : "100%"
                    }}/>
                    </div>
                    <div style={{
                        width : "50%"
                    }}>
                        <h1>{singleProduct.title}</h1>
                    </div>
                </div> : <div>
                    <h1>Loading...</h1></div>}
            </div>
        </div>
    )
}

export default SingleProduct