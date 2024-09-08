import RecipeCard from "@/components/main/RecipeCard";
import { getCategoryRecipes } from "@/db/queries";

export const metadata = {
  title: "Yummy Plates | Categorys",
  description:
    "Welcome to Your Website. Learn more about our products and services.",
};

async function CategoryPage({ params }) {
  const { category } = params;

  const DecodeCategory = decodeURIComponent(category);

  const categoryrecipes = await getCategoryRecipes(DecodeCategory);

  return (
    <main>
      <section className="container py-8">
        <div>
          <h3 className="font-semibold text-xl"> {DecodeCategory} </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {categoryrecipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CategoryPage;
