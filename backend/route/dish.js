import express from "express";
import {
  addDish,
  deleteDish,
  getDish,
  updateDish,
} from "../controller/dishes.js";
import auth from "../middleware/authorization.js";
const dishRouter = express.Router();

dishRouter.post("/addDish", auth, addDish);
dishRouter.get("/getDish", getDish);
dishRouter.put("/updateDish/:id", auth, updateDish);
dishRouter.delete("/deleteDish/:id", auth, deleteDish);
export default dishRouter;
