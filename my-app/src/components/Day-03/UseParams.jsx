import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const UseParams = () => {


    const router = useNavigate();
    const [numbers, setNumber] = useState([1,2,3,4,5,6,7])

    return (
        <div>


            <h1>Use Params Page</h1>

            {numbers.map((num,i)=>(
    
                console.log(i + 1),
                <button key={i + 1} className="btn" onClick={()=> router(`/use-params-product/${num}`)}>Page {num}</button>
            ))}

            {/* <button className="btn" onClick={() => { router("/use-params/2") }}>Page 2</button>
            <button className="btn" onClick={() => { router("/use-params/3") }}>Page 3</button>
            <button className="btn" onClick={() => { router("/use-params/4") }}>Page 4</button>
            <button className="btn" onClick={() => { router("/use-params/5") }}>Page 5</button> */}
        </div>
    )
}

export default UseParams