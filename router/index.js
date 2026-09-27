const express = require("express");
const router = express.Router();
const customerFavoritesApirouter = require("./customerFavorites.api");
const specialDishesApirouter = require("./specialDishes.api");
router.use("/customer_favorites/api", customerFavoritesApirouter);
router.use("/special_dishes/api", specialDishesApirouter);

module.exports = router;
