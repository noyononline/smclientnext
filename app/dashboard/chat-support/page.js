"use client";
import React from "react";
import cate from "@/public/s5.jpg";
import Image from "next/image";
import { useAppSelector } from "@/lib/store/hooks/hooks";

const ChatSupport = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full bg-white shadow-md px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div className="w-full md:pl-4">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-3">
                <div className="relative">
                  <Image
                    className="w-[38px] h-[38px] border-2 border-green-600 rounded-full max-w-[38px] p-[3px]"
                    src={cate}
                    alt=""
                  />
                  {/* {activeAdmin && (
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  )} */}
                </div>
                <h2 className="text-base text-[#1C2434] font-semibold">
                  Support
                </h2>
              </div>
            </div>
            <div className="py-4">
              <div className="bg-slate-100 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                {[1, 2, 3].map((m, i) => {
                  if (userInfo._id !== m.senderId) {
                    return (
                      <div
                        key={i}
                        className="w-full flex justify-start items-center"
                      >
                        <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                          <div>
                            <Image
                              className="w-[38px] h-[38px] border-2 border-green-600 rounded-full max-w-[38px] p-[3px]"
                              src={cate}
                              alt=""
                            />
                          </div>
                          <div className="flex justify-center items-start flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white py-1 px-2 rounded-sm">
                            <span>{"Hello guys"}</span>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={i}
                        className="w-full flex justify-end items-center"
                      >
                        <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                          <div className="flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
                            <span>{"Hi everyone"}</span>
                          </div>
                          <div>
                            <Image
                              className="w-[38px] h-[38px] border-2 border-green-600 rounded-full max-w-[38px] p-[3px]"
                              src={cate}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <form className="flex gap-3">
              <input
                className="w-full flex justify-between px-2 border border-green-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#1C2434]"
                type="text"
                placeholder="input your message"
              />
              <button className="shadow-lg bg-indigo-500 hover:shadow-cyan-500/50 text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
