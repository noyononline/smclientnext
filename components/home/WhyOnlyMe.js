import Image from "next/image";
import mainImg from "@/public/ww3.jpg";
import { FaCheck } from "react-icons/fa";
import Awardness from "./Awardness";
const WhyOnlyMe = () => {
  return (
    <>
      <section className=" py-36 px-10 md:px-0 gradient-bg1 relative">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 place-items-center gap-3">
              <div className="order-2 mt-10 lg:mt-0">
                <div className="relative p-7">
                  <Image
                    src={mainImg} // Use Next.js Image component
                    alt="Digital Marketing"
                    className="relative max-w-full h-auto rounded-sm z-[2]"
                    layout="intrinsic"
                    priority
                  />
                  <div className="text-center absolute top-0 left-0 z-[2] bg-green-600 px-5 pt-5 pb-4 inline-block rounded-lg shadow-2xl">
                    <h4 className="my-0 text-white text-4xl font-bold">50+</h4>
                    <p className="text-sm text-slate-50 font-medium capitalize">
                      team members
                    </p>
                  </div>
                  <div className="text-center absolute bottom-0 right-0 z-[2] bg-white px-5 pt-5 pb-4 inline-block rounded-lg shadow-2xl">
                    <h4 className="my-0 text-green-600 text-4xl font-bold">
                      1550+
                    </h4>
                    <p className="text-md text-gray-600 font-medium capitalize">
                      project complate
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1">
                <div className="pl-5 pr-5">
                  <div className="">
                    <span className="relative capitalize mb-5 pl-4 text-green-700 text-lg font-semibold before:h-full before:w-1 before:absolute before:top-0 before:left-1 before:bg-green-700">
                      Why Only We
                    </span>
                    <h3 className="text-black font-bold text-4xl">
                      Reason For Choosing Our Strike Consultancy
                    </h3>
                  </div>
                  <p className="mt-5 mb-0 text-base text-stone-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                    eiusmod tempo Risus commodo viverra maecenas accumsan lacus
                    vel facilisis.
                  </p>
                  <p className="mt-5 mb-0 text-base text-stone-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
                    eiusmod tempo incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrice.Risus commodo viverra
                    maecenas accumsan lacus vel facilisis.
                  </p>
                  <div className="mt-3">
                    <ul className="m-0 p-0 list-none">
                      <li className="text-black inline-flex items-center w-[48%] mt-4 font-semibold text-base">
                        <FaCheck className="text-lg text-green-700 mr-2" />
                        We do Give Our Best
                      </li>
                      <li className="text-black inline-flex items-center w-[48%] mt-4 font-semibold text-base">
                        <FaCheck className="text-lg text-green-700 mr-2" />
                        We do Give Our Best
                      </li>
                      <li className="text-black inline-flex items-center w-[48%] mt-4 font-semibold text-base">
                        <FaCheck className="text-lg text-green-700 mr-2" />
                        We do Give Our Best
                      </li>
                      <li className="text-black inline-flex items-center w-[48%] mt-4 font-semibold text-base">
                        <FaCheck className="text-lg text-green-700 mr-2" />
                        We do Give Our Best
                      </li>
                      <li className="text-black inline-flex items-center w-[48%] mt-4 font-semibold text-base">
                        <FaCheck className="text-lg text-green-700 mr-2" />
                        We do Give Our Best
                      </li>
                      <li className="text-black inline-flex items-center w-[48%] mt-4 font-semibold text-base">
                        <FaCheck className="text-lg text-green-700 mr-2" />
                        We do Give Our Best
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Awardness />
        </div>
      </section>
    </>
  );
};

export default WhyOnlyMe;
