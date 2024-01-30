/* eslint-disable react/prop-types */
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, isevenSelector } from "./context/atoms/countAtom";
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
      <IsEven />
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
function IsEven() {
  const isEven = useRecoilValue(isevenSelector);
  return <div>{!isEven && <div>Count IS EVEN</div>}</div>;
}
export default App;
