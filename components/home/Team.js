import Image from "next/image";
import Team1 from "@/public/t1.jpg";
const Team = () => {
  return (
    <>
      <section className="bg-white py-24 px-10 md:px-0">
        <div className="container mx-auto">
          <div className="text-center mx-auto">
            <span className="relative capitalize mb-5 pl-4 text-green-700 text-lg font-medium before:h-full before:w-1 before:absolute before:top-0 before:left-1 before:bg-green-700">
              Our Team
            </span>
            <h3 className="text-black font-bold text-4xl">
              We Are Ready To Serving
            </h3>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap mx-6 justify-center items-center">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-6 items-center justify-center">
                {/* Repeated Team Member Block */}
                {[1, 2, 3, 4].map((_, index) => (
                  <div
                    key={index}
                    className="mt-8 rounded-lg shadow-2xl bg-white"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={Team1} // Use Next.js Image component
                        alt="Digital Marketing"
                        className="max-w-full rounded-tl-lg rounded-tr-lg transition-all duration-75 ease-in-out rounded-bl-none"
                        layout="intrinsic"
                        priority
                      />
                    </div>
                    <div className="py-6 px-7 text-center">
                      <h4 className="mb-1 text-2xl font-bold text-black">
                        David Monteiro
                      </h4>
                      <p>Back End Developer</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
