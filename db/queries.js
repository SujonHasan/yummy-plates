import { recipesModel } from "@/models/recipes-model";
import connectMongo from "@/services/mongo";
import mongoose, { VirtualType, connect } from "mongoose";

const { userModel } = require("@/models/user-Model");

async function createUser(user) {

  const existingUser = await userModel.findOne({ email: user.email }).lean();

  if (existingUser) return null;

  // const newUser = await userModel.create(user);
  const newUser = await new userModel(user).save();

  return JSON.parse(JSON.stringify(newUser));
}

async function findUser(user) {

  const fUser = await userModel.findOne(user).lean();

  if (fUser) return  JSON.parse(JSON.stringify(fUser));

  return null;
}

async function getAllRecipes() {  
  let recipes = [];

  recipes = await recipesModel.find().lean();

  if (recipes) {
    const plainRecipes = recipes.map(recipe => {
      return JSON.parse(JSON.stringify(recipe));
    })

    return plainRecipes;
  }

  return null;
}

async function getRecipe(_id) {
  await connectMongo();
  const recipe = await recipesModel.findById(_id).lean();
  return recipe;
}

async function getCategoryRecipes(category) {

  await connectMongo();
  const categoryRecipes = await recipesModel.find({ category }).lean();

  if(categoryRecipes){

    const plainCategoryRecipes = categoryRecipes.map(categoryRecipe =>{

      return JSON.parse(JSON.stringify(categoryRecipe));
    })

    return plainCategoryRecipes;

  }

  return null;
}

async function updateFavourites(recipeId, userId) {
  
  await connectMongo();
  const user = await userModel.findById(userId);

  if (user) {
    const recipe = user.favourites.find((id) => id.toString() === recipeId);

    if (recipe) {
      user.favourites.pull(new mongoose.Types.ObjectId(recipeId));
    } else {
      user.favourites.push(new mongoose.Types.ObjectId(recipeId));
    }

    user.save();

    return JSON.parse(JSON.stringify(user));
  }
}

export {
  createUser,
  findUser,
  getAllRecipes,
  getCategoryRecipes,
  getRecipe,
  updateFavourites,
};
