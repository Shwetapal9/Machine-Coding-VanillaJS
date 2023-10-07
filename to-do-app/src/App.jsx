import { useState } from "react";
import { toast } from "react-toastify";

function App() {
  let [todo, setTodo] = useState("");
  let [allTodos, setAllTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setAllTodos([
        { id: `${todo}-${Date.now()}`, name: todo, markcompleted: false },
        ...allTodos,
      ]);
    }
    setTodo("");
  };
  const handleInput = (e) => {
    setTodo(e.target.value);
  };
  const handleComplete = (list) => {
    let index = allTodos.indexOf(list);
    let comp = { id: list.id, name: list.name, markcompleted: true };
    allTodos.splice(index, 1, comp);
    setAllTodos([...allTodos]);
  };
  const handleDelete = (id) => {
    let newTodos = allTodos.filter((t) => id !== t.id);
    setAllTodos(newTodos);
  };
  return (
    <>
      <div className="container">
        <h1>Todo List Application</h1>
        <form className="todo-input" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={handleInput} />
          <button type="submit">Add</button>
        </form>
        <ul className="todo-list">
          {allTodos.map((list) => (
            <li className="single-todo" key={list.id}>
              <span>{list.name}</span>
              <div className="util-btn">
                {list.markcompleted ? (
                  <button className="comp">Completed</button>
                ) : (
                  <button
                    onClick={() => {
                      handleComplete(list);
                    }}
                  >
                    Mark As Completed
                  </button>
                )}
                <button
                  className="del"
                  onClick={() => {
                    handleDelete(list.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
