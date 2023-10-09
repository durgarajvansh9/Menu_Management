import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    default: null, // You can set a default value or leave it as null
  },
  category: {
    type: String,
    required: true,
  },
  rating: Number,
});
const Dish = mongoose.model("Dish", dishSchema);
export default Dish;
