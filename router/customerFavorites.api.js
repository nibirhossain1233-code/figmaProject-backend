const express = require("express");
const {
  createCustomerFavoritesController,
  updateCustomerFavoritesController,
  deleteCustomerFavoritesController,
  getCustomerFavoritesController,
} = require("../controllers/customerFavorites.controller");
const router = express.Router();

router.post("/create", createCustomerFavoritesController);
router.put("/update/:id", updateCustomerFavoritesController);
router.delete("/delete/:id",
  deleteCustomerFavoritesController,
);
router.get("/get_customer_Favorites",getCustomerFavoritesController,
);

module.exports = router;
