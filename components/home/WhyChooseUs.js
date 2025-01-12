import Image from "next/image";

import mainImg from "@/public/a2.jpg";
const WhyChoseUs = () => {
  return (
    <>
      <section className="py-24 gradient-bg1">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 place-items-center gap-3">
              <div className="order-1">
                <div className="relative p-7">
                  <Image
                    src={mainImg} // Use Next.js Image component
                    alt="Digital Marketing"
                    className="relative max-w-full h-auto rounded-sm z-[2]"
                    layout="intrinsic"
                    priority
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
                <div className="px-5">
                  <div className="">
                    <span className="relative capitalize mb-5 pl-4 text-green-700 text-lg font-medium before:h-full before:w-1 before:absolute before:top-0 before:left-1 before:bg-green-700">
                      Why Choose Us
                    </span>
                    <h3 className="text-black font-bold text-4xl">
                      We Offer Unique & Advanced Designs Centers
                    </h3>
                  </div>
                  <div className="mt-6 rounded-lg p-6 bg-white group hover:bg-green-600 text-black group-hover:text-white shadow-xl relative z-[2] transition-all duration-500 ease-in-out">
                    <h4 className="mb-4 text-2xl font-semibold transition-all duration-500 ease-in-out group-hover:text-white">
                      Developing Strategy
                    </h4>
                    <p className="mb-0 text-base text-stone-600 transition-all duration-500 ease-in-out group-hover:text-white">
                      It is advantageous when the dummy text.
                    </p>
                  </div>

                  <div className="mt-6 rounded-lg p-6 bg-white group hover:bg-green-600 text-black group-hover:text-white shadow-xl relative z-[2] transition-all duration-500 ease-in-out">
                    <h4 className="mb-4 text-2xl font-semibold transition-all duration-500 ease-in-out group-hover:text-white">
                      Developing Strategy
                    </h4>
                    <p className="mb-0 text-base text-stone-600 transition-all duration-500 ease-in-out group-hover:text-white">
                      It is advantageous when the dummy text.
                    </p>
                  </div>
                  <div className="mt-6 rounded-lg p-6 bg-white group hover:bg-green-600 text-black group-hover:text-white shadow-xl relative z-[2] transition-all duration-500 ease-in-out">
                    <h4 className="mb-4 text-2xl font-semibold transition-all duration-500 ease-in-out group-hover:text-white">
                      Developing Strategy
                    </h4>
                    <p className="mb-0 text-base text-stone-600 transition-all duration-500 ease-in-out group-hover:text-white">
                      It is advantageous when the dummy text.
                    </p>
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

export default WhyChoseUs;
