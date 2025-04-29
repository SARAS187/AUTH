import React from "react";

const BlockA = () => {
  const myStyle = {
    backgroundColor: "Green",
    height: "50px",
    width: "100px",
    marginTop: "100px",
  };
  return (
    <>
      <div style={myStyle}>
        <span>Block A</span>
      </div>
    </>
  );
};

export default BlockA;
