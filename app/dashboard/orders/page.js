"use client";
import Link from "next/link";

const Orders = () => {
  return (
    <>
      <div className="px-2 md:px-7 py-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-600">My Orders</h2>
          <select className="outline-none px-3 bg-white py-1 border rounded-md text-slate-600">
            <option value="all">--order status</option>
            <option value="placed">Placed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
            <option value="werehouse">Werehouse</option>
          </select>
        </div>
        <div className="pt-4">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 shadow-md">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Payment Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Duration
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Order Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((order, i) => (
                  <tr key={i} className="bg-white border-b">
                    <td className="px-6 py-4 font-semibold whitespace-nowrap">
                      #dfdfdfdfdfdf
                    </td>
                    <td className="px-6 py-4 font-semibold whitespace-nowrap">
                      $20
                    </td>
                    <td className="px-6 py-4 font-semibold whitespace-nowrap">
                      Unpaid
                    </td>
                    <td className="px-6 py-4 font-semibold whitespace-nowrap">
                      25 Dec 2024 - 28 Dec 2024
                    </td>
                    <td className="px-6 py-4 font-semibold whitespace-nowrap">
                      3 Days
                    </td>
                    <td className="px-6 py-4 font-semibold whitespace-nowrap">
                      Pending
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/dashboard/order-details/${order._id}`}>
                        <span className="bg-green-100 text-green-800 text-sm font-normal px-2 py-[1px] rounded">
                          View
                        </span>
                      </Link>
                      {order.payment_status !== "paid" && (
                        <span
                          onClick={() => redirect(order)}
                          className="bg-green-100 whitespace-nowrap text-green-800 ml-2 cursor-pointer text-sm font-normal px-2 py-[1px] rounded"
                        >
                          Pay Now
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
