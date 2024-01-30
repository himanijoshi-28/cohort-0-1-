/* eslint-disable react/prop-types */
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./context/atoms/countAtom";
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
};

function Count() {
  console.log("rerender");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}
function Buttons() {
  let [count, setCount] = useRecoilState(countAtom);
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
