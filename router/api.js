const express = require("express");
const { createCustomerFavoritesController, updateCustomerFavoritesController, deleteCustomerFavoritesController, getCustomerFavoritesController } = require("../controllers/customerFavorites.controller");
const router = express.Router();

router.post("/customer_Favorites/create", createCustomerFavoritesController);
router.put("/customer_Favorites/update/:id", updateCustomerFavoritesController);
router.delete("/customer_Favorites/delete/:id", deleteCustomerFavoritesController);
router.get("/customer_Favorites/get_customer_Favorites", getCustomerFavoritesController);





module.exports = router