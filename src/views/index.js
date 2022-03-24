import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="d-grid gap-2 col-3 mx-auto mt-5 text-white">
      <h1>Welcome to Oxychain</h1>
      <p>Restoring the forests with the power of blockchain</p>

      <Link to="/token" className="btn btn-success">
        Go to Oxy farm
      </Link>
      
    </div>
  );
};

export default index;
