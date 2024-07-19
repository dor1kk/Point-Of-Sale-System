import React, { useState, useEffect } from 'react';
import Navbar from '../sections/Navbar';
import OrderList from '../sections/OrderList';
import Menu from '../sections/Menu';
import OrderDetails from '../sections/OrderDetails';
import OrderSummary from '../sections/OrderSummary';

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [proceededOrders, setProceededOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('proceededOrders')) || [];
    setProceededOrders(savedOrders);
  }, []);

  
  const handleAddToOrder = (item, quantity) => {
    setOrders(prevOrders => {
      const existingOrderIndex = prevOrders.findIndex(order => order.id === item.id);
      let updatedOrders;
  
      if (existingOrderIndex >= 0) {
        updatedOrders = [...prevOrders];
        updatedOrders[existingOrderIndex] = {
          ...updatedOrders[existingOrderIndex],
          quantity: updatedOrders[existingOrderIndex].quantity + quantity,
        };
      } else {
        updatedOrders = [...prevOrders, { ...item, quantity }];
      }
  
      console.log("Updated Orders:", updatedOrders);
  
      const updatedIngredients = updatedOrders.reduce((acc, order) => {
        console.log("Processing Order:", order);
  
        if (order.quantity > 0 && Array.isArray(order.ingredients)) {
          order.ingredients.forEach(ingredient => {
            acc[ingredient.name] = (acc[ingredient.name] || 0) + (ingredient.quantity * order.quantity);
          });
        } else {
          console.warn("No ingredients found for order:", order);
        }
        return acc;
      }, {});
  
      console.log("Updated Ingredients:", updatedIngredients);
  
      localStorage.setItem('dailyIngredients', JSON.stringify(updatedIngredients));
  
      return updatedOrders;
    });
  };
  
  
  

  const handleQuantityChange = (id, amount) => {
    setOrders(prevOrders => {
      const updatedOrders = prevOrders.map(order => {
        if (order.id === id) {
          const newQuantity = Math.max(0, order.quantity + amount);
          return { ...order, quantity: newQuantity };
        }
        return order;
      }).filter(order => order.quantity > 0);
      return updatedOrders;
    });
  };

  const handleProceed = () => {
    const newProceededOrders = [...proceededOrders, ...orders];
    setProceededOrders(newProceededOrders);
    localStorage.setItem('proceededOrders', JSON.stringify(newProceededOrders));
    setOrders([]); // Clear the current orders after proceeding
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <main className="flex flex-1 overflow-hidden">
        <div className='flex flex-row flex-1'>
          <div className='bg-gray-50 h-full overflow-y-auto'>
            <div className='p-4'>
              <OrderList orders={proceededOrders} />
            </div>
            <div>
              <Menu onAddToOrder={handleAddToOrder} />
            </div>
          </div>
          <div className='w-1/3 h-full'>
            <div className='p-4 h-full flex flex-col'>
              <div className="flex-1 overflow-y-auto">
                <OrderDetails orders={orders} onQuantityChange={handleQuantityChange} />
              </div>
              <div className="p-4">
                <OrderSummary orders={orders} onProceed={handleProceed} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow-md text-gray-800 p-4 text-center">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
