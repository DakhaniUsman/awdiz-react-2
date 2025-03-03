import { useState } from "react";

const Todo3 = () => {

    const [list, setList] = useState(["Eat", "Work", "Sleep"])

    const [newTodo, SetNewTodo] = useState("");

    const [isEditing, setisEditing] = useState(false);

    const [editIndex, setEditIndex] = useState(null);

    const [editItem, setEditItem] = useState("");

    const HandleChange = (event) => {
        SetNewTodo(event.target.value);
    }

    const handleClick = () => {
        if (newTodo.trim() === "") { alert("Todo cannot be epmty..."); return; }

        setList([...list, newTodo]);
        SetNewTodo("");
    }

    const editToDo = (index) => {
        setisEditing(true);
        setEditIndex(index);
    }

    const deleteToDo = (index) => {
        setList(list.filter((_, i) => (i !== index)));
        setisEditing(false)
        setEditItem("");
    }

    const saveToDo = () => {
        if (editItem.trim() === "") { alert("Todo cannot be epmty..."); return; }
        const updatedTodos = [...list];
        updatedTodos[editIndex] = editItem;
        setList(updatedTodos);
        setisEditing(false)
        setEditItem("");


    }

    return (
        <div>
            <h1>To Do App</h1>


            <input type="text" value={newTodo} onChange={HandleChange} />
            <button onClick={handleClick}>Add</button>

            <div>

                {list.map((item, index) => (
                    <>
                        {isEditing && editIndex === index ? <input value={editItem} onChange={(event) => setEditItem(event.target.value)} onBlur={()=> setisEditing(false)}/> : <h1 key={index}>{index + 1}. {item}</h1>}

                        <div>
                            {isEditing && editIndex === index ? <button onClick={() => saveToDo(index)}>Save</button> : <button onClick={() => editToDo(index)}>Edit</button>}
                            <button onClick={() => deleteToDo(index)}>Delete</button>
                        </div>
                    </>
                ))}

            </div>
        </div>
    )

}

export default Todo3;