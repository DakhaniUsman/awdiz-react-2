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
