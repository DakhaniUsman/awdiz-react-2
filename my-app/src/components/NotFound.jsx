import React from 'react'

const NotFound = () => {
  return (
    <div style={{
        width : "100%",
        minHeight :"100vh",
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
    }}>
        <h1 style={{fontSize : "44px"}}>ERROR 404</h1>
        <h2>Looks like you are lost </h2>
    </div>
  )
}

export default NotFound