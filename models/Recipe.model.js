const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true,
    unique: true,
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"],
  },
  ingredients: [String],
  cuisine: { type: String, required: true },
  DishType: {
    type: String,
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other",
    ],
  },
  Image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  Duration: { type: Number, min: 0 },
  Creator: String,
  Created: { type: Date, default: Date.now() },
  // created - Type Date. By default, today.
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
