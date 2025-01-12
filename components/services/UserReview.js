"use client";

import { HiArrowSmRight } from "react-icons/hi";

const UserReview = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-3">
            <h2 className="text-3xl font-bold">User Reviews and Comment</h2>
          </div>
          <p className="text-sm md:px-40 px-5 text-center">
            Here at SMM Panelogy we pride ourselves in exceptional service and
            affordable prices. Don&apos;t just take our word for it&apos;s check
            out our customer reviews below!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10">
            <div className="p-10 w-full rounded-md shadow-xl">
              <form>
                <div className="flex flex-col sm:flex-row gap-6 justify-between">
                  <div className="w-full md:w-6/12 sm:w-6/12">
                    <input
                      className="p-4 w-full my-3 bg-[#f6f6f6] outline-none border-transparent border duration-500 ease-out focus:border-[#3f9f42] text-md"
                      type="text"
                      id="name"
                      placeholder="Name*"
                    />
                    <div className="error handle"></div>
                  </div>
                  <div className="w-full md:w-6/12 sm:w-6/12">
                    <input
                      className="p-4 w-full my-3 bg-[#f6f6f6] outline-none border-transparent border duration-500 ease-out focus:border-[#3f9f42] text-md"
                      type="email"
                      id="email"
                      placeholder="Email*"
                    />
                    <div className="error handle"></div>
                  </div>
                </div>
                <div className="flex gap-6 flex-col sm:flex-row justify-between">
                  <div className="w-full md:w-6/12 sm:w-6/12">
                    <input
                      className="p-4 w-full my-3 bg-[#f6f6f6] outline-none border-transparent border duration-500 ease-out focus:border-[#3f9f42] text-md"
                      type="text"
                      id="name"
                      placeholder="Phone Number*"
                    />
                    <div className="error handle"></div>
                  </div>
                  <div className="w-full md:w-6/12 sm:w-6/12">
                    <input
                      className="p-4 w-full my-3 bg-[#f6f6f6] outline-none border-transparent border duration-500 ease-out focus:border-[#3f9f42] text-md"
                      type="text"
                      id="name"
                      placeholder="Subject*"
                    />
                    <div className="error handle"></div>
                  </div>
                </div>

                <div className="block">
                  <textarea
                    className="p-4 w-full my-3 bg-[#f6f6f6] outline-none border-transparent border duration-500 ease-out focus:border-[#3f9f42] text-md"
                    type="text"
                    id="name"
                    cols="30"
                    rows="5"
                    placeholder="Your Messages*"
                  ></textarea>
                  <div className="error handle"></div>
                </div>
                <div className="block">
                  <button
                    className="p-4 flex justify-center items-center w-full my-3 bg-[#3f9f42] text-white rounded-md outline-none border-transparent border duration-500 ease-out focus:border-[#3f9f42] text-md"
                    type="submit"
                    id="name"
                  >
                    Submit Review
                    <HiArrowSmRight className="font-medium mt-1 text-xl ml-2" />
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full mt-10">
              <div className="mb-2">
                <h3 className="text-[#111111] text-md italic font-bold">
                  Tuesday, July 18 ,2023
                </h3>
                <q className="text-sm text-[#666]">
                  The Podcast Rating & Reviews service is excellent for me. I
                  was recommended this website by a friend, and I am happy with
                  the service. It&apos;s fast and reliable. Thank you!
                </q>
                <p className="text-sm text-[#111]">--Clement M. Fenton</p>
              </div>
              <div className="mb-2">
                <h3 className="text-[#111111] text-md italic font-bold">
                  Tuesday, July 18 ,2023
                </h3>
                <q className="text-sm text-[#666]">
                  The Podcast Rating & Reviews service is excellent for me. I
                  was recommended this website by a friend, and I am happy with
                  the service. It&apos;s fast and reliable. Thank you!
                </q>
                <p className="text-sm text-[#111]">--Clement M. Fenton</p>
              </div>
              <div className="mb-2">
                <h3 className="text-[#111111] text-md italic font-bold">
                  Tuesday, July 18 ,2023
                </h3>
                <q className="text-sm text-[#666]">
                  The Podcast Rating & Reviews service is excellent for me. I
                  was recommended this website by a friend, and I am happy with
                  the service. It&apos;s fast and reliable. Thank you!
                </q>
                <p className="text-sm text-[#111]">--Clement M. Fenton</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserReview;
