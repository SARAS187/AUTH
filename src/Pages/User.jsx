import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom"; // Import necessary hooks
import Header from "../components/header";
import demoData from "../data/demoData"; // Import demo data

const User = () => {
  const location = useLocation(); // useLocation hook to get location object
  const [logedIn, setLogedIn] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("UserToken");
    if (token == null) {
      setLogedIn(false);
    }
  }, []);

  if (!logedIn) {
    return <Navigate to="/" />; // Redirect to login if not logged in
  }

  // Check if location.state is available and handle the fullname
  const fullname = location.state ? location.state.fullname : "User";

  return (
    <>
      <Header name={fullname} />
      <div className="container">
        <h3 className="mt-4">Welcome to Darwin, hi {fullname}</h3>
        <h4 className="mt-3">Here is your demo table:</h4>

        {/* Table with demo data */}
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {demoData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.job}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
