// import React, { useState } from "react";

// const App = () => {
//   const [todos, setTodo] = useState([
//     {
//       title: "title",
//     },
//   ]);
//   return (
//     <div>
//       {todos.map((todo) => {
//         <p>{todo.title}</p>;
//         console.log(todo.title);
//       })}
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch(`https://sum-server.100xdevs.com/todos`).then(async function (
        response
      ) {
        const json = await response.json();
        setTodos(json.todos);
        console.log(todos);
      });
    }, 10000);
  }, []);
  return (
    <>
      hello
      {todos.map((todo) => (
        <Todo title={todo.title} />
      ))}
    </>
  );
};
const Todo = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {/* <h5>{description}</h5> */}
    </div>
  );
};

export default App;
