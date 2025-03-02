import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallback = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [todos, setTodos] = useState([]);

  const addToDo = useCallback(() => {
    setTodos([...todos, "New Todo"]);
  },[todos]);

  // the problem here was when we use memo inside the child component it checks wheter the props are changed or not if the props are not changed the child component will not re render but since we have also send a function as a prop into child component the memo thinks that the function is different since the function are re created at avery render so we are using useCallback hook his hook is used to cache the function declaration so that the function is not re created at every render and the memo can work properly since both of its props are not changed 

  function IncrementCounterOne() {
    setCounterOne(counterOne + 1);
  }

  return (
    <div>
      <h1>Use Callback & Memo Page</h1>

      <h2>Counter 1 : {counterOne}</h2>
      <button className="btn" onClick={IncrementCounterOne}>
        +
      </button>

      <ChildComponent todos={todos} addToDo={addToDo} />
    </div>
  );
};

export default UseCallback;
