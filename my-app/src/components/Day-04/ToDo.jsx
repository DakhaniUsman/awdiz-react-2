import { useState } from "react";

const ToDo = () => {
  const [list, setList] = useState(["Eat", "Sleep", "Conquer", "Repeat"]);
  const [item, setItem] = useState("");
  console.log(item);

  const todoApp = {
    maxWidth: "450px",
    boxShadow: "0px 0px 10px #aaa",
    padding: "20px",
    borderRadius: "20px",
  };

  const input = {
    padding: "10px",
    marginRight: "20px",
    borderRadius: "15px",
    border: "1px solid black",
    outline: "none",
  };

  const inputField = {
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };


  const HandleChange = (e) => {
    setItem(e.target.value);
  };

  const HandleClick = () => {
    setList([...list, item]);
    setItem("");
  };

  return (
    <div>
      <h1 className="main-heading">To Do Page</h1>

      <div className="app" style={todoApp}>
        <div className="input-field" style={inputField}>
          <input
            type="text"
            name="todo"
            value={item}
            placeholder="Enter your todo"
            onChange={HandleChange}
            style={input}
          />
          <button
            className="btn"
            style={{
              marginTop: "0px",
            }}
            onClick={HandleClick}
          >
            +
          </button>
        </div>

        <div className="list">
          {list.map((list, i) => (
            <div>
              <h3 key={i} style={{ textAlign: "left" }}>
                {" "}
                {i + 1}. {list}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ToDo;
