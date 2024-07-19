import React, { useState, useEffect } from 'react';

const IngredientList = () => {
  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    const storedIngredients = JSON.parse(localStorage.getItem('dailyIngredients')) || {};
    setIngredients(storedIngredients);
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Ingredient List</h2>
      <ul>
        {Object.entries(ingredients).map(([name, quantity]) => (
          <li key={name} className="flex justify-between py-1">
            <span>{name}</span>
            <span>{quantity} grams</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
