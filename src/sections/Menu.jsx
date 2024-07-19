const menuItems = [
  {
    id: 1,
    name: 'Schnitzel Classic',
    description: 'A classic schnitzel with a crispy coating.',
    price: 20.00,
    image: 'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5.jpg',
    available: 12,
    sold: 6,
    ingredients: [
      { name: 'Chicken Breast', quantity: '100' },
      { name: 'Breadcrumbs', quantity: '50' },
      { name: 'Egg', quantity: '1' },
      { name: 'Flour', quantity: '30' },
      { name: 'Salt', quantity: '5' },
      { name: 'Pepper', quantity: '2' }
    ]
  },
  {
    id: 2,
    name: 'Schnitzel Deluxe',
    description: 'A deluxe schnitzel with a savory sauce.',
    price: 25.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlfodoQPOEeGNluU2NyZmHGNLfcCp8rIbiQ&s',
    available: 8,
    sold: 5,
    ingredients: [
      { name: 'Chicken Breast', quantity: '150' },
      { name: 'Breadcrumbs', quantity: '60' },
      { name: 'Egg', quantity: '1' },
      { name: 'Flour', quantity: '40' },
      { name: 'Salt', quantity: '5' },
      { name: 'Pepper', quantity: '3' },
      { name: 'Savory Sauce', quantity: '30' }
    ]
  },
  {
    id: 3,
    name: 'Schnitzel Veggie',
    description: 'A vegetarian schnitzel option.',
    price: 18.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRma3rfa7u9P55Gmb4DeY3F7cr1G04mpu-wTw&s',
    available: 10,
    sold: 3,
    ingredients: [
      { name: 'Vegetarian Patty', quantity: '150' },
      { name: 'Breadcrumbs', quantity: '50' },
      { name: 'Egg', quantity: '1' },
      { name: 'Flour', quantity: '30' },
      { name: 'Salt', quantity: '5' },
      { name: 'Pepper', quantity: '2' }
    ]
  },
    {
      id: 4,
      name: 'Schnitzel Classic',
      description: 'A classic schnitzel with a crispy coating.',
      price: 20.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcN6jgVE0SHHHaPEhD3kB0PL7Aypfce9l9jA&s',
      available: 12,
      sold: 6,
    },
    {
      id: 5,
      name: 'Schnitzel Deluxe',
      description: 'A deluxe schnitzel with a savory sauce.',
      price: 25.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlfodoQPOEeGNluU2NyZmHGNLfcCp8rIbiQ&s',
      available: 8,
      sold: 5,
    },
    {
      id: 6,
      name: 'Schnitzel Veggie',
      description: 'A vegetarian schnitzel option.',
      price: 18.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRma3rfa7u9P55Gmb4DeY3F7cr1G04mpu-wTw&s',
      available: 10,
      sold: 3,
    },
    {
        id: 7,
        name: 'Schnitzel Deluxe',
        description: 'A deluxe schnitzel with a savory sauce.',
        price: 25.00,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlfodoQPOEeGNluU2NyZmHGNLfcCp8rIbiQ&s',
        available: 8,
        sold: 5,
      },
      {
        id: 8,
        name: 'Schnitzel Veggie',
        description: 'A vegetarian schnitzel option.',
        price: 18.00,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRma3rfa7u9P55Gmb4DeY3F7cr1G04mpu-wTw&s',
        available: 10,
        sold: 3,
      }
  ];

  
  import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
const Menu = ({ onAddToOrder }) => {
  const [quantities, setQuantities] = useState(menuItems.map(() => 0));

  const handleQuantityChange = (index, amount) => {
    setQuantities(prev => {
      const newQuantities = [...prev];
      const newQuantity = Math.max(0, newQuantities[index] + amount);
      const quantityChange = newQuantity - newQuantities[index];
      newQuantities[index] = newQuantity;

      onAddToOrder(menuItems[index], quantityChange);

      return newQuantities;
    });
  };

  return (
    <div className="container mx-auto p-8 h-screen">
      <div className='px-4'>
        <h2 className='font-montserrat font-semibold text-gray-700 text-xl'>Menu</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div key={item.id} className="bg-white flex flex-row px-4 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <div className='flex flex-col p-4'>
              <img src={item.image} alt={item.name} style={{height:"100px", width:"auto"}} className="object-cover rounded-3xl" />
              <span className="text-xl font-bold mt-4"><span className='text-lg text-blue-500'>$</span>{item.price.toFixed(2)}</span>
            </div>
            <div className="py-4">
              <h2 className="text font-semibold w-5/5 mb-2">{item.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between ml-8 mt-4 mb-4">
                <div className="flex items-center">
                  <button
                    className={`p-2 rounded-full ${quantities[index] === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    onClick={() => handleQuantityChange(index, -1)}
                    disabled={quantities[index] === 0}
                  >
                    <FaMinus />
                  </button>
                  <span className="mx-2">{quantities[index]}</span>
                  <button
                    className={`p-2 rounded-full ${quantities[index] === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    onClick={() => handleQuantityChange(index, 1)}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
