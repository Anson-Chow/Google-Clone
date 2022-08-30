import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
        <Route path = "/search" element = {<SearchPage />} />
        <Route path = "/" element = {<Home /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
