import { useState } from "react";

const Todo3 = () => {

    const [list, setList] = useState(["Eat", "Work", "Sleep"])

    const [newTodo, SetNewTodo] = useState("");

    const HandleChange = (event) => {
        SetNewTodo(event.target.value);
    }

    const handleClick = () => {
        setList([...list,newTodo]);
        SetNewTodo("");
    }

    return (
        <div>
            <h1>To Do App</h1>


            <input type="text" value={newTodo} onChange={HandleChange} />
            <button onClick={handleClick}>Add</button>

            <div>

                {list.map((item, i) => (

                    <h1 key={item}>{i+ 1}. {item}</h1>
                ))}
            </div>
        </div>
    )

}

export default Todo3;