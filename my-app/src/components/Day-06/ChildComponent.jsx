import { memo } from "react";

const ChildComponent = ({ todos, addToDo }) => {
  console.log("Inside Child component");
  console.log(todos);

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={addToDo} className="btn">
        Add Todo
      </button>

      <div>
        {todos.map((todo, i) => (
          <p key={i}>
            {i + 1}.{todo}
          </p>
        ))}
      </div>
    </div>
  );
};

export default memo(ChildComponent);

// here the memo check the props provided to the component
// it checks wheter they are same or not
// here todo prop is same todo = [] => []
// but the function addToDo is recreated at every render so it thinks as the function is new
// So we have used useCallback() that chaches the function
