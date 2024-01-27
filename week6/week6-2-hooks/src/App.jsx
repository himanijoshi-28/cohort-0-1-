import React, { useEffect, useState } from "react";
// import "./App.css";
import axios from "axios";
// const handleClick = () => {
//   return <Todo id={1} />;
// };
const App = () => {
  const [ids, setId] = useState(1);

  return (
    <div>
      <button onClick={() => setId(1)}>Button1 </button>
      <button onClick={() => setId(2)}>Button2 </button>
      <button onClick={() => setId(3)}>Button3 </button>
      <button onClick={() => setId(4)}>Button4 </button>
      {/* {console.log(ids)} */}
      <Todo id={ids} />
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
