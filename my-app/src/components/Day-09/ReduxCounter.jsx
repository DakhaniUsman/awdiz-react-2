import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {

    const counter = useSelector((state) => state.counter)
    console.log(counter)
    const dispatch = useDispatch();

    const isLight = useSelector((state) => state.isLight);
    console.log("isLight :" , isLight)
  return (
    <div style={{
        width : "100%",
        height : "100vh",
        backgroundColor : isLight ? "white" : "#333"
      }}>
        <h1> Redux Counter</h1>
        <h2>Counter : {counter}</h2>

        <button className='btn' onClick={()=> dispatch({type : "INCREMENT"})}>+</button>
        <button className='btn' onClick={()=> dispatch({type : "DECREMENT"})}>-</button>
        <button className='btn' onClick={()=> dispatch({type : "RESET"})}>Reset</button>

        <h2>Theme : {isLight ? "Light Mode" : " Dark Mode"}</h2>
        <button className='btn' onClick={()=> dispatch({type : "TOGGLE_THEME"})}>{isLight ? "🌙" : "☀️"}</button>



    </div>
  )
}

export default ReduxCounter