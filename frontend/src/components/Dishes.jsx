import React, { useEffect, useState } from "react";
import axios from "axios";
import Dish from "./Dish";
const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/menu_management/getDish",
        {}
      );
      //console.log(response.data.dish);
      setDishes(response.data.dish);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      {dishes.map((dish, index) => (
        <Dish key={index} item={dish} />
      ))}
    </div>
  );
};

export default Dishes;
