'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

function RecipeCard({recipe}) {
  const route = useRouter();

  const handleClick = (id) => {
    route.push(`/recipes/${id}`);
  };
  
  return (
    <>
      <div className="card" onClick={() => handleClick(recipe._id)}>
        <Image
          src={recipe.thumbnail}
          width={160}
          height={300}
          className="rounded-md"
          alt="Image"
        />
        <h4 className="my-2">{recipe.name}</h4>
        <div className="py-2 flex justify-between text-xs text-gray-500">
          <span>⭐️ {recipe.rating}.0</span>
          <span>By: {recipe.author}</span>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
