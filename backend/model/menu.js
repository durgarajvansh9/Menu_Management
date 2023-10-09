import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dishes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Dish,
    },
  ],
});
const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
