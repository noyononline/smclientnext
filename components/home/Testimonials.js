"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

import { BiSolidQuoteAltRight } from "react-icons/bi";

import Testimg from "@/public/tc2.jpg";

const Testimonials = () => {
  return (
    <>
      <section className="bg-white pb-24 pt-[250px] px-10">
        <div className="container mx-auto">
          <div className="text-center mx-auto">
            <span className="relative capitalize mb-5 pl-4 text-green-700 text-lg font-medium before:h-full before:w-1 before:absolute before:top-0 before:left-1 before:bg-green-700">
              Testimonials
            </span>
            <h3 className="text-black font-bold text-4xl">Our Happy Clients</h3>
          </div>
          <div className="mt-6">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                540: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              spaceBetween={50}
              slidesPerView={3}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper gap-10 sm:px-5"
            >
              {[...Array(4)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="mt-6">
                    <div className="items-center text-center px-6 pt-5 pb-14 border border-gray-400 bg-white rounded-md">
                      <BiSolidQuoteAltRight className="text-5xl text-center hover:text-green-600 max-w-full h-auto w-fit mx-auto text-gray-400 transition-all duration-150 ease-in-out" />
                      <p className="italic text-center text-black text-base mb-0">
                        “Had a fantastic time at Gliter, got to meet a lot of
                        great people and hear some amazing talks. Thanks @gliter
                        for a super day!”
                      </p>
                    </div>
                    <div className="text-center relative mt-[-40px] mb-[-2px]">
                      <Image
                        src={Testimg} // Use Next.js Image component
                        alt="Digital Marketing"
                        className="rounded-full max-w-full h-auto w-fit mx-auto"
                        layout="intrinsic"
                        priority
                      />
                      <h4 className="text-black text-2xl mt-3 mb-1 font-semibold">
                        Robert Cook
                      </h4>
                      <p className="text-sm mb-0 text-slate-500">
                        Front End Developer
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
