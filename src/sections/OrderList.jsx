import React from 'react';
import Slider from 'react-slick';

const OrderList = ({ orders }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-between py-4 px-4'>
        <h2 className='font-montserrat font-semibold text-gray-700 text-xl'>Order List</h2>
        <p className='text-blue-500 cursor-pointer'>See all</p>
      </div>
      <div className="overflow-hidden">
        <Slider {...settings} className="overflow-hidden">
          {orders.map(order => (
            <div key={order.id} className="p-2">
              <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">{order.name}</h3>
                <div className="flex flex-col justify-between mb-2">
                  <div className='flex gap-2 items-center'>
                    <p className="text-gray-700">{order.quantity} Piece</p>
                    <span className='rounded-full text-gray-700 w-2 h-2 bg-gray-500'></span>
                    <p className="text-gray-700">${order.price.toFixed(2)}</p>
                  </div>
                  <span className={`bg-green-200 text-green-700 rounded-2xl w-2/5 p-1 mt-2`}>
                    Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OrderList;
