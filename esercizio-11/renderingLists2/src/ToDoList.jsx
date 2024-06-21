import { useRef, useState } from "react";

export function ToDoList() {
  const [todos, setTodos] = useState([]);

  function handleTodo(e) {
    if (inputRef.current?.value) {
      setTodos([...todos, inputRef.current.value]);
      inputRef.current.value = null;
    }
  }

  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef}></input>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <p>{todo}</p>
            <button
              onClick={() =>
                setTodos(() => {
                  const newTodos = [...todos];
                  newTodos.splice(i, 1);
                  return newTodos;
                })
              }
            >
              remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleTodo}>Add</button>
      <button onClick={() => setTodos([])}>Reset</button>
    </div>
  );
}
