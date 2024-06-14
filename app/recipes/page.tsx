"use client"
import { useRouter } from 'next/navigation';
import recipes from '../../recipes.json'; 


export default function RecipesPage() {
  const router = useRouter();

  const handleRecipeClick = (id: string) => {
    router.push(`/recipes/${id}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-semibold mb-2">Receitas</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeClick(recipe.id)} className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-md">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
