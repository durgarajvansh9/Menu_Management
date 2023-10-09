import React from "react";
import "./App.css";
import Dishes from "./components/Dishes";
const App = () => {
  return (
    <div>
      <h1 className="food-style">Food Menu</h1>
      <Dishes />
    </div>
  );
};

export default App;
