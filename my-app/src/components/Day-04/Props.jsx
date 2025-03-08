import React from 'react'
// import styled from 'styled-components'

const Props = ({counter,setCounter}) => {

  // const MyStyledComponent = styled.div`
  //   width : 100%,
  // `

  const font = {
    textTransform : "uppercase"
  }

  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button className='btn' onClick={()=> setCounter(counter + 1)}>+</button>
        <p style={font}>This counter is taken and changed through props</p>
    </div>
  )
}

export default Props;