"use client";
import React from "react";
import { BsImages } from "react-icons/bs";
import { FadeLoader, PropagateLoader } from "react-spinners";
import Image from "next/image";
import Link from "next/link";
import cate from "@/public/s5.jpg";
import { useAppSelector } from "@/lib/store/hooks/hooks";

const profile = () => {
  const { userInfo } = true;
  const loader = false;
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex justify-between items-center  p-4  rounded-md">
        <h1 className="text-[#1C2434] font-bold text-2xl">Settings</h1>
      </div>
      <div className="flex  justify-start lg:justify-between w-full gap-10 p-4">
        <div className="w-full lg:w-6/12">
          <div className="w-full p-4 bg-white shadow-md rounded-md">
            <div className="relative overflow-x-auto">
              <div className="flex justify-between items-center  p-4  rounded-md">
                <h1 className="text-[#1C2434] font-bold text-lg">
                  Change Your Photo
                </h1>
              </div>
              <div className="w-full p-4 bg-slate-100 rounded-md text-[#1C2434]">
                <div className="flex justify-center items-center py-3">
                  {userInfo?.image ? (
                    <label
                      htmlFor="img"
                      className="h-[210px] w-[300px] cursor-pointer p-3 relative overflow-hidden"
                    >
                      <Image
                        className="w-full h-full object-cover"
                        src={cate}
                        alt=""
                      />
                      {loader && (
                        <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                          <span>
                            <FadeLoader />
                          </span>
                        </div>
                      )}
                    </label>
                  ) : (
                    <label
                      htmlFor="img"
                      className="flex justify-center items-center flex-col h-[210px] w-[300px] cursor-pointer border border-dashed hover:border-indigo-500 border-[#1C2434] relative"
                    >
                      <span>
                        <BsImages />
                      </span>
                      <span>Select Image</span>
                      {loader && (
                        <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                          <span>
                            <FadeLoader />
                          </span>
                        </div>
                      )}
                    </label>
                  )}
                  <input type="file" name="img" id="img" className="hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="w-full p-4 bg-white shadow-md rounded-md">
            <div className="relative overflow-x-auto">
              <div className="p-4  rounded-md">
                <h1 className="text-[#1C2434] mb-5 font-bold text-lg">
                  Change password
                </h1>
                <form>
                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="currentpassword">Current password</label>
                    <input
                      type="password"
                      id="currentpassword"
                      name="currentpassword"
                      placeholder="*******"
                      className="px-4 py-2 text-[#1C2434] focus:border-indigo-500 outline-none bg-transparent border border-indigo-700 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="newpassword">New password</label>
                    <input
                      type="password"
                      id="newpassword"
                      name="newpassword"
                      placeholder="********"
                      className="px-4 py-2 text-[#1C2434] focus:border-indigo-500 outline-none bg-transparent border border-indigo-700 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-1 mb-3">
                    <label htmlFor="confirmpassword">Confirm password</label>
                    <input
                      type="password"
                      id="confirmpassword"
                      name="confirmpassword"
                      placeholder="********"
                      className="px-4 py-2 text-[#1C2434] focus:border-indigo-500 outline-none bg-transparent border border-indigo-700 rounded-md"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-12 py-2 my-2"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
