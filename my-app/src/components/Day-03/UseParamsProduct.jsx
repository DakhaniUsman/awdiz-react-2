import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const UseParamsProduct = () => {
    const router = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
      if (id){
        console.log(`fetching data for product ${id} ⏳`)
      }
    },[id])
    return (
    <div>
        <h1>Use Params Product Page</h1>
        <h2>Product - {id}</h2>
        <button className='btn' onClick={()=> router("/use-params")}>Use Params Page</button>
    </div>
  )
}

export default UseParamsProduct;