const express = require("express");
const { createSpecialDishesController, updateSpecialDishesController, deleteSpecialDishesController, getSpecialDishesController, } = require("../controllers/specialDishes.controller");
const router = express.Router();

router.post("/create", createSpecialDishesController);
router.put("/update/:id", updateSpecialDishesController);
router.delete("/delete/:id", deleteSpecialDishesController);
router.get("/get_Special_Dishes", getSpecialDishesController);

module.exports = router;