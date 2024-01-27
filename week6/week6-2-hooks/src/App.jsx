// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// const App = () => {
//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://sum-server.100xdevs.com/todos")
//       .then(async function (response) {
//         setTodos(response.data.todos);
//         console.log(response.data.todos);
//         console.log(todos);
//       });
//   }, []);
//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// };
// const Todo = ({ title, description }) => {
//   return (
//     <>
//       <h2>{title}</h2>
//       <h3>{description}</h3>
//     </>
//   );
// };
// export default App;
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
const App = () => {
  return (
    <div>
      <Todo id={1}></Todo>
    </div>
  );
};
const Todo = ({ id }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(async function (response) {
        setTodos(response.data.todo);
      });
  }, [todos]);
  return (
    <div>
      <h2>{todos.title}</h2>
      <h3>{todos.description}</h3>
    </div>
  );
};
export default App;
