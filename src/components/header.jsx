// src/components/Header.jsx
import React from "react";

const Header = ({ name }) => {
  return (
    <div className="header">
      <h1>Welcome </h1>
      <p>Hi {name}, welcome back!</p>
    </div>
  );
};

export default Header;
