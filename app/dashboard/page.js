import { BsCurrencyDollar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div className="px-2 md:px-7 py-5">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div className="flex justify-between items-center p-5 bg-white shadow-md rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#1C2434]">
              <h2 className="text-3xl font-bold">1000</h2>
              <span className="text-md font-bold">Total Orders</span>
            </div>
            <div className="w-[47px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
              <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center p-5 bg-white shadow-md rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#1C2434]">
              <h2 className="text-3xl font-bold">10</h2>
              <span className="text-md font-bold">Pending Orders</span>
            </div>
            <div className="w-[47px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
              <RiProductHuntLine className="text-[#cd00e8] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center p-5 bg-white shadow-md rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#1C2434]">
              <h2 className="text-3xl font-bold">20</h2>
              <span className="text-md font-bold">Cancelled Orders</span>
            </div>
            <div className="w-[47px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl">
              <FaUsers className="text-[#00cfe8] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center p-5 bg-white shadow-md rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#1C2434]">
              <h2 className="text-3xl font-bold">20</h2>
              <span className="text-md font-bold">Complate Orders</span>
            </div>
            <div className="w-[47px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
              <AiOutlineShoppingCart className="text-[#7367f0] shadow-lg" />
            </div>
          </div>
        </div>

        <div className="w-full p-4 bg-white shadow-md rounded-md mt-6">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text-[#1C2434] pb-3">
              Recent Orders
            </h2>
            <Link
              href={"/dashboard/orders"}
              className="font-semibold text-sm text-[#1C2434]"
            >
              View All
            </Link>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-[#1C2434]">
              <thead className="text-sm text-[#1C2434] uppercase border-b border-slate-700">
                <tr>
                  <th scope="col" className="py-3 px-4">
                    Order Id
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Payment Status
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Project
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Duration
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Order Status
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5]?.map((recentO, i) => (
                  <tr key={i + 5}>
                    <td className="py-3 font-medium whitespace-nowrap px-4">
                      #dfdfdfdfdfdf
                    </td>
                    <td className="py-3 font-medium whitespace-nowrap px-4">
                      $20
                    </td>
                    <td className="py-3 font-medium whitespace-nowrap px-4">
                      <span>Unpaid</span>
                    </td>
                    <td className="py-3 font-medium whitespace-nowrap px-4">
                      <span>25 Dec 2024 - 28 Dec 2024</span>
                    </td>
                    <td className="py-3 font-medium whitespace-nowrap px-4">
                      <span>3 Days</span>
                    </td>
                    <td className="py-3 font-medium whitespace-nowrap px-4">
                      <span>Pending</span>
                    </td>
                    <td className="py-3 font-medium whitespace-nowrap px-4">
                      <Link href={`/dashboard/order/details/${i}`}>view</Link>
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

export default Dashboard;
