import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Header from "../components/header";
import demoData from "../data/demoData"; // Import demo data

const Admin = () => {
  const location = useLocation(); // useLocation hook to get location object
  const [logedIn, setLogedIn] = useState(true);
  const [data, setData] = useState(demoData); // State to manage demo data
  const [editedRow, setEditedRow] = useState(null); // To track the row being edited
  const [editedData, setEditedData] = useState({}); // To track changes in the edited row

  useEffect(() => {
    const token = localStorage.getItem("AdminToken");
    if (token == null) {
      setLogedIn(false);
    }
  }, []);

  if (!logedIn) {
    return <Navigate to="/" />; // Redirect to login if not logged in
  }

  // Handle editing a row
  const handleEditClick = (row) => {
    setEditedRow(row.id);
    setEditedData({ ...row }); // Pre-fill the data into the editor
  };

  // Handle input changes for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save the edited row
  const handleSave = () => {
    const updatedData = data.map((row) =>
      row.id === editedRow ? { ...row, ...editedData } : row
    );
    setData(updatedData);
    setEditedRow(null); // Reset the edit state
  };

  // Cancel the edit
  const handleCancel = () => {
    setEditedRow(null); // Reset the edit state
  };

  return (
    <>
      <Header name={location.state.fullname} />
      <div className="container">
        <h3 className="mt-4">Welcome to Darwin, hi {location.state.fullname}</h3>

        <div className="row mt-4">
          {/* First Box: Display demo data */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Demo Data</div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Job</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                        <td>{row.job}</td>
                        <td>
                          <button
                            className="btn btn-warning"
                            onClick={() => handleEditClick(row)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Second Box: Edit Demo Data */}
          <div className="col-md-6">
            {editedRow && (
              <div className="card">
                <div className="card-header">Edit Data</div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={editedData.name || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Age</label>
                      <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={editedData.age || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Job</label>
                      <input
                        type="text"
                        className="form-control"
                        name="job"
                        value={editedData.job || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary ms-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
