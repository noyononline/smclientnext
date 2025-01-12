"use client";

import Image from "next/image";
import Team1 from "@/public/t1.jpg";
import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import { get_all_category } from "@/lib/store/features/category/categorySlice";
import { useSelector } from "react-redux";

const AllService = () => {
  const dispatch = useAppDispatch();
  const { categorys } = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(get_all_category());
  }, [dispatch]);

  console.log("categorys", categorys);

  return (
    <>
      <section className="bg-white py-24 px-10 md:px-0">
        <div className="container mx-auto">
          <div className="mt-6">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-6">
              {/* Repeated Team Member Block */}
              {categorys.map((_, index) => (
                <div key={index} className="flex justify-center items-center">
                  {/* Link for each item */}
                  <Link href={`/services/apple`}>
                    <div className="relative flex justify-center items-center rounded-lg shadow-lg overflow-hidden">
                      {/* Image Element */}
                      <Image
                        src={Team1}
                        alt="Digital Marketing"
                        className="max-w-full rounded-tl-lg rounded-tr-lg transition-all duration-75 ease-in-out rounded-bl-none"
                        layout="intrinsic"
                        priority
                      />
                      {/* Overlay Text */}
                      <div className="py-2 absolute bottom-2 z-20 px-4 bg-slate-900 flex rounded-sm hover:bg-[#3f9f42] justify-center items-center">
                        <h6 className="text-md font-bold uppercase text-white">
                          Apple
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllService;
