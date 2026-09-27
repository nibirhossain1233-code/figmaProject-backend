const { default: mongoose } = require("mongoose");

let specialDishesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "Description of the item",
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0.0,
    },
    image: {
      type: String,
      required: true,
    },
    isSpecial: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("SpecialDishes", specialDishesSchema);
