"use server";

import { createUser, findUser, updateFavourites } from "@/db/queries";
import connectMongo from "@/services/mongo";
import { revalidatePath } from "next/cache";

async function registerUser(formData) {
  try {
    const user = {};
    user.firstName = formData.get("firstName");
    user.lastName = formData.get("lastName");
    user.email = formData.get("email");
    user.password = formData.get("password");

    await connectMongo();

    const dbUser = await createUser(user);
    return dbUser;
  } catch (error) {
    throw error;
  }
}

async function performLogin(formData) {
  try {
    const user = {};
    user.email = formData.get("email");
    user.password = formData.get("password");

    await connectMongo();
    
    const found = await findUser(user);
    return found;
  } catch (error) {
    throw error;
  }
}

async function addFavourites(recipeId, userId) {
  try {
    const user = await updateFavourites(recipeId, userId);
    return user;
  } catch (error) {
    throw error;
  }

  revalidatePath("/login");
}

export { addFavourites, performLogin, registerUser };
