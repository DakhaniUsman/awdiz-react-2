import { useRef, useState } from "react";

const UseRef = () => {

    const counter = useRef(0);

    const [counter1,setCounter1] = useState(10);



    const HandleClick = () => {
        counter.current++;
        console.log("ref counter : ",counter.current)
    }

    return (
        <div>
            <h1>Use Ref Page</h1>

            <h2>Ref Counter: {counter.current}</h2>
            <button className="btn" onClick={HandleClick}>+</button>

            <h2>State Counter : {counter1}</h2>
            <button className="btn" onClick={()=> setCounter1(counter1 + 1)}>+</button>
        </div>
    )
}

export default UseRef;

// useRef is a hook in react that lets you cache a value and prevent the component from re redndering