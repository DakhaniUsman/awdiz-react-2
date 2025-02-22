import { useEffect, useState } from "react";

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    const [counterSecond, setCounterSecond] = useState(99);

    // no dependency
    // useEffect(()=>{console.log("Component Rendered ⚡")})

    // empty dependency
    // useEffect(()=>{console.log("Component Rendered on initial load ⚡")},[])

    // single dependency
    // useEffect(()=> {console.log("Component is rendered on initail load as well as counter state is changed ⚡")},[counter])

    // multiple dependency
    useEffect(()=> {console.log("U have made the component re render 🥴")},[counter,counterSecond])

    return (
        <div>
            <h1>Use Effect Page</h1>
            {/* type 1 */}
            {/* in this type*/}
            <h1>Counter : {counter} </h1>
            <button className="btn" onClick={()=> setCounter((prevState)=> prevState + 1) }>+</button>


            <h1>Counter : {counterSecond} </h1>
            <button className="btn" onClick={()=> setCounterSecond((prevState)=> prevState + 1) }>+</button>

        </div>


    )
}

export default UseEffect;