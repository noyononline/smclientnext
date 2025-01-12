import React from "react";

const Awardness = () => {
  return (
    <div className="pt-20 absolute md:top-[70%] bottom-[-100px] left-0 right-0 px-10 md:px-0">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="z-50 px-[50px] pt-[50px] pb-[45px] bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col">
            <div>
              <span className="relative capitalize mb-5 pl-4 text-green-700 text-lg font-semibold before:h-full before:w-1 before:absolute before:top-0 before:left-1 before:bg-green-700">
                Our Awards
              </span>
              <h3 className="text-[#111111] mb-0 text-3xl capitalize font-bold">
                Our Achievements
              </h3>
            </div>
            <p className="mt-3 text-[#666666] text-sm">
              Lorem ipsum dolor sit amet, elit, do risus commodo viverra
              facilisis
            </p>
          </div>
          <div className="flex flex-wrap mt-5">
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
              <div className="flex gap-5">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-[#3f9f42] text-7xl font-bold">294</h2>
                  <p className="text-lg font-medium">Project Done</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-[#3f9f42] text-7xl font-bold">1456</h2>
                  <p className="text-lg font-medium">Satisfied Customers</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-[#3f9f42] text-7xl font-bold">46K</h2>
                  <p className="text-lg font-medium">Total Earned</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-[#3f9f42] text-7xl font-bold">1,205</h2>
                  <p className="text-lg font-medium">Award Wins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awardness;
