// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 10000);
  });
  return <div>{render ? <MyComponent /> : <div></div>}</div>;
};

export default App;

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

function MyComponent() {
  useEffect(() => {
    //on mount only this code runs
    console.log("component mounted");
    //for clean up purpose : on second rendering this will run first
    //runs also when dependency changes
    // when unmount only this will run
    return () => {
      console.log("component unmounted");
    };
  }, []);

  // Render UI
  return <div>from my component</div>;
}
