import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const OrderDetails = ({ orders, onQuantityChange }) => {
  if (orders.length === 0) {
    return <p className="text-center text-gray-500">No orders yet.</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg ">
      <h2 className="text font-montserrat mb-4">Order Details</h2>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="flex items-center justify-between py-2 border-b">
            <img 
              src={order.image} 
              alt={order.name} 
              className="w-16 h-16 object-cover mr-4 rounded-lg" 
            />
            <div className='flex flex-col flex-1'>
              <h3 className="text-md font-semibold mb-2">{order.name}</h3>
             
              <div className="flex items-center gap-4 mt-4">
                <button
                  className={`p-1 rounded-full ${order.quantity === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                  onClick={() => onQuantityChange(order.id, -1)}
                  disabled={order.quantity === 0}
                >
                  <FaMinus />
                </button>
                <span className="text-xl font-semibold">{order.quantity}</span>
                <button
                  className={`p-1 rounded-full ${order.quantity === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                  onClick={() => onQuantityChange(order.id, 1)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
