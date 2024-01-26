import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

let counter = 4;
const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Title 1", description: "Description here..." },
    { id: 2, title: "Title 2", description: "Description here..." },
    { id: 3, title: "Title 3", description: "Description here..." },
  ]);
  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: `Title ${counter}`,
        description: "Description here...",
      },
    ]);
  };
  return (
    <div>
      <button onClick={addTodo}>ADD TODO</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

export default App;
