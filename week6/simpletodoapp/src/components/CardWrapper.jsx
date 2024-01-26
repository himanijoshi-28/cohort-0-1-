import React from "react";

const CardWrapper = ({ innercomponent }) => {
  return (
    <div
      style={{ border: "2px solid black ", height: "620px", width: "620px" }}
    >
      {innercomponent}
    </div>
  );
};

export default CardWrapper;
