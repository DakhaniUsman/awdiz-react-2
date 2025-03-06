import React, { useContext } from 'react'
import { MyCounterContext } from '../../context/CounterContext'

const ContextCounter = () => {

  const {state,dispatch} = useContext(MyCounterContext)

  return (
    <div>
      <h1>Context Counter Page</h1>


      <h2>Context Counter : {state.counter} </h2>
      <button className='btn' onClick={()=> dispatch({type : "INCREMENT"})}>+</button>
      <button className='btn' onClick={()=> dispatch({type : "DECREMENT"})}>-</button>
      <button className='btn' onClick={()=> dispatch({type : "RESET"})}>Reset</button>
    </div>

  )
}

export default ContextCounter