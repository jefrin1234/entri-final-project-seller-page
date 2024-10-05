
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../config/axiosInstance';
import { FaBoxOpen } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function SellerOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { seller } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get(`/orders/seller-orders/${seller.id}`);
        setOrders(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching orders');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleUpdateStatus = async (orderId, itemId, newStatus) => {
    try {
      const response = await axiosInstance({
        method: 'POST',
        url: '/orders/update-order',
        data: {
          orderId,
          itemId,
          newStatus,
        },
      });

      setOrders(
        orders.map((order) => {
          if (order._id === orderId) {
            return {
              ...order,
              items: order.items.map((item) => {
                if (item.productId._id === itemId) {
                  return { ...item, status: newStatus };
                }
                return item;
              }),
            };
          }
          return order;
        })
      );
    } catch (err) {
      console.error('Error updating status', err);
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Your Orders</h1>
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-4 p-6 sm:p-8 text-center">
          <FaBoxOpen className="text-6xl text-gray-400" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">No orders found</h2>
          <p className="text-gray-500">You have no new orders!</p>
        </div>
      ) : (
        orders.map((order) => {
          const sellerTotal = order.items.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0);

          return (
            <div key={order._id} className="bg-white shadow-md rounded-lg p-4 mb-6">
              <div className="text-center">
                <h2 className="text-sm sm:text-lg font-semibold">Order ID:</h2>
                <h3 className="text-xs sm:text-sm font-light text-gray-700">{order._id}</h3>
              </div>
              <p className="text-gray-700">
                Total Price: <span className="font-bold">${sellerTotal.toFixed(2)}</span>
              </p>
              <p className="text-gray-700">
                Payment Method: <span className="font-bold">{order.paymentMethod}</span>
              </p>
              <p className="text-gray-700">
                Payment Status: <span className="font-bold">{order.paymentStatus}</span>
              </p>
              <p className="text-gray-700">
                Order Status: <span className="font-bold">{order.orderStatus}</span>
              </p>

              <div className="border p-4 rounded-md mt-4">
                <p className="text-black font-bold">Shipping Address:</p>
                <div className="ml-4 text-gray-700 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-4">
                  <span>{order?.address.fullName}</span>
                  <span>{order?.address?.phoneNumber}</span>
                  <span>{order?.address.streetAddress},</span>
                  <span>{order?.address?.city},</span>
                  <span>{order?.address?.state},</span>
                  <span>{order?.address?.postalCode}</span>
                </div>
              </div>

              <div className="mt-4">
                {order.items.map((item) => (
                  <div key={item.productId._id} className="border p-4 mb-4 rounded bg-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <img
                        src={item.productId.images[0]}
                        alt={item.productName}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.productId.name}</h4>
                        <p>
                          Quantity: <span className="font-bold">{item.quantity}</span>
                        </p>
                        <p>
                          Price: <span className="font-bold">${item.price}</span>
                        </p>
                        <p>
                          Status:{' '}
                          <span
                            className={`font-bold ${
                              item.status === 'delivered' ? 'text-green-600' : 'text-yellow-600'
                            }`}
                          >
                            {item.status}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-2">
                      <select
                        value={item.status}
                        onChange={(e) => handleUpdateStatus(order._id, item.productId._id, e.target.value)}
                        className="border rounded p-1 w-full sm:w-auto"
                      >
                        <option value="pending">Pending</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="canceled">Canceled</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default SellerOrders;
