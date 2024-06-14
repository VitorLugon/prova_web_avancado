"use client";

import { useParams } from 'next/navigation';
import recipes from '../../../recipes.json'; 
export default function RecipeDetailsPage() {
  const { id } = useParams();


  const recipe = recipes.find((r) => r.id === parseInt(id, 10));


  if (!recipe) {
    return <div className="text-center mt-8">Receita não encontrada</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="mb-4 rounded-lg" />
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredientes:</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-1">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Instruções:</h2>
        <p className="text-gray-800">{recipe.instructions}</p>
      </div>
    </div>
  );
}

