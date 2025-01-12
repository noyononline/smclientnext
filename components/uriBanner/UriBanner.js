import unImage from "@/public/uni-banner.jpg";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const UniBanner = ({ title, pathlink, linktitle }) => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${unImage.src})` }}
        className="overflow-hidden bg-no-repeat relative w-full bg-cover"
      >
        <div className="container mx-auto">
          <div className="text-center pt-40 pb-24">
            <h2 className="text-5xl font-bold capitalize text-[#111111] mb-5">
              {title}
            </h2>
            <ul className="flex gap-2 justify-center items-center">
              <li className="flex gap-1 justify-center items-center">
                <Link
                  href={"/"}
                  className="text-[#111111] w-full duration-500 outline-none text-lg font-semibold"
                >
                  Home
                </Link>
                <MdOutlineKeyboardDoubleArrowRight className="text-center mt-1 text-2xl" />
              </li>
              <li className="flex justify-center items-center">
                <Link
                  href={pathlink}
                  className="text-[#3e9d41] capitalize w-full duration-500 outline-none text-lg font-semibold"
                >
                  {linktitle}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default UniBanner;
