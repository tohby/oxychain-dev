import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Index from "./views/index";
import Token from "./views/token";

function App() {
  return (
    <div className="bg">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/token" element={<Token />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
