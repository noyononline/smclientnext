"use client";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { HiArrowSmRight } from "react-icons/hi";

const ContactForm = () => {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="flex gap-2 flex-col lg:flex-row justify-center">
            <div className="px-10 lg:w-5/12  w-full">
              <div className="w-full xs:w-full">
                <h3 className="mb-4 text-[#111111] text-3xl font-bold">
                  Have A Project Between Mind? Say Hi!
                </h3>
                <p className="text-md text-[#666]">
                  Please give us a call, drop us an email, or fill out the
                  contact form and we&apos;ll get back to you.
                </p>
              </div>
              <div className="pt-3">
                <h4 className="mb-2 flex gap-1 items-center text-[#111111] text-xl font-semibold">
                  <IoLocationSharp className="mt-1 text-xl text-[#3f9f42]" />
                  Address:
                </h4>
                <p className="text-md text-[#666]">
                  32 Street Name, New York, USA
                </p>
              </div>
              <div className="pt-3">
                <h4 className="mb-2 flex gap-1 items-center text-[#111111] text-xl font-semibold">
                  <MdEmail className="mt-1 text-xl text-[#3f9f42]" />
                  Email:
                </h4>
                <p className="text-md text-[#666]">hello@gliter.com</p>
              </div>
              <div className="pt-3">
                <h4 className="mb-2 flex gap-1 items-center text-[#111111] text-xl font-semibold">
                  <IoCall className="mt-1 text-xl text-[#3f9f42]" />
                  Call:
                </h4>
                <p className="text-md text-[#666]">+(029-22-2110)</p>
              </div>
              <div className="pt-3">
                <h4 className="mb-2 flex gap-1 items-center text-[#111111] text-xl font-semibold">
                  Follow Us:
                </h4>
                <ul className="flex gap-2 w-full">
                  <li>
                    <a href="">
                      <FaFacebookF className="w-[32px] h-[32px] bg-slate-100 rounded-full text-[#666] p-[5px] duration-500 ease-in-out hover:bg-green-600 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaLinkedinIn className="w-[32px] h-[32px] bg-slate-100  rounded-full text-[#666] p-[5px] duration-500 ease-in-out hover:bg-green-600 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter className="w-[32px] h-[32px] bg-slate-100  rounded-full text-[#666] p-[5px] duration-500 ease-in-out hover:bg-green-600 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram className="w-[32px] h-[32px] bg-slate-100  rounded-full text-[#666] p-[5px] duration-500 ease-in-out hover:bg-green-600 hover:text-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
                <div className="flex flex-col sm:flex-row gap-6 justify-between">
                  <div className="w-full md:w-6/12 sm:w-6/12">
                    <input
                      className="p-4 w-full my-3 bg-[#f6f6f6] outline-none border-transparent border duration-500 ease-out focus:border-[#3f9f42] text-md"
                      type="text"
                      id="name"
                      placeholder="Company Name*"
                    />
                    <div className="error handle"></div>
                  </div>
                  <div className="w-full md:w-6/12 sm:w-6/12">
                    <input
                      className="p-4 w-full my-3 bg-[#f6f6f6] outline-none border-transparent border duration-500 ease-out focus:border-[#3f9f42] text-md"
                      type="text"
                      id="name"
                      placeholder="Website URL*"
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
                    Send Message
                    <HiArrowSmRight className="font-medium mt-1 text-xl ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
