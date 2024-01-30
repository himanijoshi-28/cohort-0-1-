/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { countContext } from "./context.js";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <countContext.Provider value={count}>
        <Count setCount={setCount} />
      </countContext.Provider>
    </div>
  );
};
function Count({ setCount }) {
  const count = useContext(countContext);
  return (
    <div>
      {count}
      <Buttons count={count} setCount={setCount} />;
    </div>
  );
}
function Buttons({ setCount }) {
  let count = useContext(countContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count++);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count--);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
