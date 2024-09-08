import Sidebar from "./Sidebar";
import RecipeCard from "./RecipeCard";
import { getAllRecipes } from "@/db/queries";

async function Main() {
  
  const recipes = await getAllRecipes();

  // console.log("get all recipes form mongoose =========     ", recipes);

  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <div className="col-span-12 md:col-span-3">
          <h3 className="font-bold text-xl">Recipes</h3>
          <Sidebar />
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">

            {
              recipes.map(recipe => <RecipeCard key={recipe._id} recipe = {recipe} />)
            }

          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
