import Dish from "../model/dish.js";
export const addDish = async (req, res) => {
  try {
    const dish = await Dish.create(req.body);
    if (dish) {
      return res.status(201).json({ message: "Dish added sucessfully" });
    } else {
      return res.json({ message: "Fialed to add" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error", err: err });
  }
};
export const getDish = async (req, res) => {
  try {
    const dish = await Dish.find();
    if (dish) {
      return res.status(200).json({ dish: dish });
    } else {
      return res.status(404).json({ message: "Failed to find" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error", err: err });
  }
};
export const updateDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (dish) {
      dish.name = req.body.name || dish.name;
      dish.description = req.body.description | dish.description;
      dish.price = req.body.price || dish.price;
      dish.image_url = req.body.image_url || dish.image_url;
      await dish.save();
      return res.status(200).json({ message: "Updated dish" });
    } else {
      return res.status(404).json({ message: "Failed to update dish" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error", err: err });
  }
};
export const deleteDish = async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (dish) {
      return res
        .status(200)
        .json({ message: "Dish deleted succeffuly", dish: dish });
    } else {
      return res.status(404).json({ message: "Failed to delete dish" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal server error", err: err });
  }
};
