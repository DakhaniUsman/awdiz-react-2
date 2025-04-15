import React, { useContext } from 'react'
import { MyCounterContext } from '../../context/CounterContext'

const ContextCounter = () => {

  const {state,dispatch} = useContext(MyCounterContext)
  console.log(state)
 
  return (
    <div style={{
      width : "100%",
      height : "100vh",
      backgroundColor : state.isLight ? "white" : "#333"
    }}>
      <h1>Context Counter Page</h1>


      <h2>Context Counter : {state.counter} </h2>
      <button className='btn' onClick={()=> dispatch({type : "INCREMENT"})}>+</button>
      <button className='btn' onClick={()=> dispatch({type : "DECREMENT"})}>-</button>
      <button className='btn' onClick={()=> dispatch({type : "RESET"})}>Reset</button>

      <h2>Theme : {state.isLight ? "Light Mode" : " Dark Mode"}</h2>
      <button className='btn' onClick={()=> dispatch({type : "TOGGLE_THEME"})}>{state.isLight ? "🌙" : "☀️"}</button>
    </div>

  )
}

export default ContextCounter