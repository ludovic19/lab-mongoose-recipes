const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");
const { insertMany } = require("./models/Recipe.model");

const MONGODB_URI =
  "mongodb+srv://ludovix:TYqQvuhKrjLRN2Hd@cluster0.ssmscaf.mongodb.net/?retryWrites=true&w=majority";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })

  // Run your code here, after you have insured that the connection was made
  .then(async () => {
    const recipe = await Recipe.create({
      title: "mochi",
      level: "UltraPro Chef",
      ingredients: ["sucre"],
      cuisine: "Asian",
      DishType: "dessert",
      Duration: 10,
      Creator: "John Doe",
    });
    console.log(`title:${recipe.title}`);
    // await Recipe.insertMany(data).then((res) => {
    //   res.map((e) => console.log(e.title));
    // });
  })
  // .then(async () => {
  //   await Recipe.insertMany(data);
  //   data.map(() => console.log(data.title));
  // })
  .then(() => {
    return Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { $set: { duration: 100 } }
    );
  })
  .then(() => {
    return Recipe.findOneAndDelete({ title: "Carrot Cake" });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
const allrecipes = Recipe.insertMany(data).then(async () => {
  await allrecipes.map((elem) => console.log(elem.title));
});
// console.log(data);
// async () => {
//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log(`Connected to the database: "${x.connection.name}"`);
//     (x) => {
//       // Before adding any recipes to the database, let's remove all existing ones
//       return Recipe.deleteMany();
//     };
//     const newRecipe = await Recipe.create({
//       title: "Asian Glazed Chicken Thighs",
//       level: "Amateur Chef",
//       ingredients: [
//         "1/2 cup rice vinegar",
//         "5 tablespoons honey",
//         "1/3 cup soy sauce (such as Silver Swan®)",
//         "1/4 cup Asian (toasted) sesame oil",
//         "3 tablespoons Asian chili garlic sauce",
//         "3 tablespoons minced garlic",
//         "salt to taste",
//         "8 skinless, boneless chicken thighs",
//       ],
//       cuisine: "Asian",
//       dishType: "main_course",
//       image:
//         "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
//       duration: 40,
//       creator: "Chef LePapu",
//     });
//     console.log(newRecipe.json());
//   } catch (error) {
//     console;
//     log(error);
//   }
// };
