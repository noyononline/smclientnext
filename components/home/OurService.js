"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

import ServiceSlide from "../Slider/ServiceSlide";

import serviceImg1 from "@/public/s5.jpg";
import serviceImg2 from "@/public/s5.jpg";
import serviceImg3 from "@/public/s5.jpg";
import serviceImg4 from "@/public/s5.jpg";

import serviceImg5 from "@/public/s5.jpg";

const OurService = () => {
  const services = [
    {
      image: serviceImg1,
      title: "Competitive Research & Assurance",
      description:
        "Dolore magna aliqua quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis.",
      link: "#",
    },
    {
      image: serviceImg2,
      title: "Competitive Research & Assurance",
      description:
        "Dolore magna aliqua quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis.",
      link: "#",
    },
    {
      image: serviceImg3,
      title: "Competitive Research & Assurance",
      description:
        "Dolore magna aliqua quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis.",
      link: "#",
    },
    {
      image: serviceImg4,
      title: "Competitive Research & Assurance",
      description:
        "Dolore magna aliqua quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis.",
      link: "#",
    },
    {
      image: serviceImg5,
      title: "Competitive Research & Assurance",
      description:
        "Dolore magna aliqua quis ipsum suspendisse ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis.",
      link: "#",
    },
  ];

  return (
    <>
      <section className="bg-white py-24 px-10 md:px-0">
        <div className="container mx-auto">
          <div className="text-center mx-auto">
            <span className="relative capitalize mb-5 pl-4 text-green-700 text-lg font-medium before:h-full before:w-1 before:absolute before:top-0 before:left-1 before:bg-green-700">
              Our services
            </span>
            <h3 className="text-black font-bold text-4xl">
              Services For Business
            </h3>
          </div>
          <div className="mt-6">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                540: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              spaceBetween={50}
              slidesPerView={3}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper gap-10"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <ServiceSlide
                    image={service.image}
                    title={service.title}
                    description={service.description}
                    link={service.link}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
