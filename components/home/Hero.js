import Image from "next/image"; // Import Next.js Image component
import heroImage from "@/public/uni-banner.jpg"; // Static import for hero image
import bgOverlay from "@/public/white-overlay-top.png"; // Static import for overlay image
import hero1 from "@/public/hero-1-img.png"; // Static import for the hero image

const Hero = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${heroImage.src})` }} // Use heroImage.src for correct path
        className="hero-1 pt-36 pb-10 relative z-[3] bg-scroll w-full bg-no-repeat bg-center bg-cover"
      >
        <div className="container mx-auto py-10 px-10 md:px-0">
          <div className="flex flex-wrap mx-[-4] items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4">
              <div className="space-y-7 text-[#111111] order-2 lg:order-1">
                <h2 className="md:text-6xl text-4xl  md:mt-32 sm:mt-28 space-x-5 leading-snug font-bold">
                  Build And Grow Relation With Their Customers
                </h2>
                <p className="md:text-lg text-md lg:pr-24 md:mb-10 mb-4">
                  Feugiat primis ligula risus auctor at laoreet egestas augue
                  mauris viverra tortor in iaculis pretium magna mauris a
                  rhoncus ipsum feugiat primis ultrice
                </p>
                <div className="pt-4 pb-14">
                  <a
                    className="text-white text-lg no-underline font-medium py-3 px-8 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 font-mono relative border-0"
                    href="#"
                  >
                    See Case Studies
                  </a>
                </div>
              </div>
              <div className="order-1 md:w-8/12 lg:order-2 relative z-[3]">
                <Image
                  src={hero1} // Use Next.js Image component
                  alt="Digital Marketing"
                  className="w-full sm:scale-125 sm:translate-y-16"
                  layout="intrinsic"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${bgOverlay.src})` }} // Use bgOverlay.src for correct path
          className="absolute bottom-0 left-0 w-full h-10 bg-no-repeat bg-cover"
        ></div>
      </section>
    </>
  );
};

export default Hero;
