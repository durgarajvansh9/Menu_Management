import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dishes from "./components/Dishes";
const App = () => {
  return (
    <div>
      <h1 className="food-style fs-1 fw-bolder">Food Menu</h1>
      <Navbar/>
      <Dishes />
    </div>
  );
};

export default App;
