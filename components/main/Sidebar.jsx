import { getAllRecipes } from "@/db/queries";
import Link from "next/link";

async function Sidebar() {
  const recipes = await getAllRecipes();

  const uniqueCategory = [...new Set(recipes.map((recipe) => recipe.category))];

  return (
    <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
      {uniqueCategory.map((category, index) => (
        <li key={index}>
          <Link href={`/category/${category}`}> {category} </Link>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
