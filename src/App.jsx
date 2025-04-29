import React from "react";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import { Route, Routes, BrowserRouter } from "react-router-dom"; // Use Routes instead of Switch
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Login />} /> {/* Use element instead of component */}
          <Route path="/admin" element={<Admin />} /> {/* Use element instead of component */}
          <Route path="/user" element={<User />} /> {/* Use element instead of component */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
