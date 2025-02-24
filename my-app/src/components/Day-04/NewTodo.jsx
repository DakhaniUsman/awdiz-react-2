import React, { useState } from "react";

const NewTodo = () => {
  const [todos, setTodos] = useState(["Eat", "Sleep", "Conquer", "Repeat"]);
  const [newTodo, setNewTodo] = useState("");
  const count = todos.length;
  // console.log(count);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClick = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <h1>To Do List : {count}</h1>

      <div className="input-field">
        <input
          type="text"
          value={newTodo}
          placeholder="Add to do..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>+</button>
      </div>

      {todos.map((todo, i) => (
        <div>
          <p key={todo}>
            {i + 1}. {todo}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewTodo;
