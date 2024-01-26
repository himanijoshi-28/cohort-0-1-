import React from "react";
import CardWrapper from "./components/CardWrapper";
import TextComponent from "./components/TextComponent";

const App = () => {
  return (
    <div>
      <CardWrapper innercomponent={<TextComponent />} />
    </div>
  );
};
// const CardWrapper = ({ innercomponent }) => {
//   return <div style={{ border: "2px solid black " }}>{innercomponent}</div>;
// };

// const TextComponent = () => {
//   return <div>Hey this is text compo</div>;
// };

export default App;
