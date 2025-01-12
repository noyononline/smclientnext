import { BiLogInCircle, BiCategory } from "react-icons/bi";
import {
  AiFillDashboard,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaUsers } from "react-icons/fa";
import { FiUsers, FiMessageSquare } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import logo from "@/public/logo-2.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import {
  customer_logout,
  messageClear,
} from "@/lib/store/features/auth/authSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Sidebar = ({ setShowSidebar, showSidebar }) => {
  const pathname = usePathname();
  const navigate = useRouter();

  const dispatch = useAppDispatch();
  const { errorMessage, successMessage } = useAppSelector(
    (state) => state.auth
  );

  const allNav = [
    {
      id: 1,
      title: "Dashboard",
      icon: <AiFillDashboard />,
      role: "admin",
      path: "/dashboard",
    },
    {
      id: 2,
      title: "Orders",
      icon: <AiOutlineShoppingCart />,
      role: "admin",
      path: "/dashboard/orders",
    },
    {
      id: 3,
      title: "Category",
      icon: <BiCategory />,
      role: "admin",
      path: "/dashboard/category",
    },

    {
      id: 5,
      title: "All Service",
      icon: <RiProductHuntLine />,
      role: "admin",
      path: "/dashboard/all-service",
    },

    {
      id: 7,
      title: "Chat Support",
      icon: <FiMessageSquare />,
      role: "admin",
      path: "/dashboard/chat-support",
    },

    {
      id: 8,
      title: "Profile",
      icon: <FaUsers />,
      role: "admin",
      path: "/dashboard/profile",
    },
  ];

  const handleLogOut = async () => {
    // Remove the JWT token from localStorage
    //localStorage.removeItem("adminToken");
    try {
      dispatch(customer_logout());
      localStorage.removeItem("userToken");
    } catch (error) {
      console.log(error);
      toast.error("Logout Failed, please try again!");
    }
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage, dispatch]);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#d3dadf80] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#E1F4FB] z-50 top-0 pt-24 h-screen shadow-md transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        {/* <div className="h-[70px] flex justify-center items-center">
          <Link href="/" className="w-[180px] h-[50px]">
            <Image className="w-full h-full my-3" src={logo} alt="SMM Panel" />
          </Link>
        </div> */}
        <div className="px-[16px] mt-5">
          <ul>
            {allNav.map((n) => (
              <li key={n.title}>
                <Link
                  href={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-green-200 shadow-indigo-500/30 text-green-600 font-extrabold duration-500"
                      : "text-stone-950 font-bold  duration-200"
                  } px-[12px] py-[9px] rounded-sm flex justify-start gap-3 items-center  hover:pl-5 transition-all w-full mb-1`}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogOut}
                className="text-stone-950 font-bold duration-200
                 flex justify-start gap-3 items-center px-[15px] py-[9px] hover:pl-5 transition-all w-full mb-1"
              >
                <span>
                  <BiLogInCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
