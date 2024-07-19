import React from 'react';

const OrderSummary = ({ orders, onProceed }) => {
  const totalQuantity = orders.reduce((sum, order) => sum + order.quantity, 0);
  const totalPrice = orders.reduce((sum, order) => sum + (order.price * order.quantity), 0).toFixed(2);

  return (
    <div className="bg-white rounded-lg ">
      <h2 className="text-md font-montserrat mb-4">Order Summary</h2>
      <div className="mb-4 flex flex-col gap-2">
        <p className="text-xs bg-gray-100 px-4 py-2 rounded-xl">Total Quantity: {totalQuantity}</p>
        <p className="text-xs bg-gray-100 px-4 py-2 rounded-xl">Total Price: ${totalPrice}</p>
      </div>
      <button
        className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={onProceed}
      >
        Proceed
      </button>
    </div>
  );
};

export default OrderSummary;
