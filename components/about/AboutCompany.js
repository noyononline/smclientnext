"use client";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import founderImg from "@/public/tc1.jpg";
import mainImg from "@/public/a2.jpg";

const AboutCompany = () => {
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-3">
              <div className="order-1">
                <div className="relative p-7">
                  <Image
                    className="relative max-w-full h-auto rounded-sm z-[2]"
                    src={mainImg}
                    alt="Social media marketing"
                    priority
                    layout="intrinsic"
                  />
                  <div className="text-center absolute top-0 left-0 z-[2] bg-white px-5 pt-5 pb-4 inline-block rounded-lg shadow-2xl">
                    <h4 className="my-0 text-black text-4xl font-bold">15+</h4>
                    <p className="text-sm text-stone-500">
                      Years Of Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <div className="pl-5">
                  <div className="">
                    <span className="relative capitalize mb-5 pl-4 text-green-700 text-lg font-medium before:h-full before:w-1 before:absolute before:top-0 before:left-1 before:bg-green-700">
                      About Our Company
                    </span>
                    <h3 className="text-black font-bold text-4xl">
                      Get To Audience With Targeted Ads On Associative Media
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
                  <div className="flex flex-wrap mt-6 items-center">
                    <Image
                      className="max-w-full h-auto rounded-full mr-4"
                      src={founderImg}
                      alt="Social media marketing"
                      priority
                      layout="intrinsic"
                    />
                    <div className="">
                      <h4 className="text-black mb-1 font-bold text-xl">
                        Adam Rueter
                      </h4>
                      <p className="text-base">Founder Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCompany;
