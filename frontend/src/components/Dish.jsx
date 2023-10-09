import React from "react";
import "./dish.css";
const Dish = ({ item }) => {
  console.log(item);
  return (
    <div className=" dish-style">
      <h2>{item.name}</h2>
      <img className="dish-img" src={item.image_url} />
      <div className="rating">
        <span className="price">Price: {item.price}</span>
        <span>{item.rating}</span>
        <span className="star fa fa-star checked"></span>
      </div>
    </div>
  );
};

export default Dish;
