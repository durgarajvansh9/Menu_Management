import React from "react";
import "./dish.css";
const Dish = ({ item }) => {
  // console.log(item);
  return (
    <>
    
    <div className=" dish-style me-5 shadow-lg mb-5 bg-body rounded">
      
      <img className="dish-img" src={item.image_url} />
      <h4><strong>{item.name}</strong></h4>
      <div className="rating">
        <span className="price">Price: {item.price}</span>
        <span>{item.rating}</span>
        <span className="star fa fa-star checked"></span>
        
      </div>
      <button type="button" class="btn btn-warning btn-sm mb-5 rounded-pill w-50">Add to cart</button>
      </div>
      </>
  );
};

export default Dish;
