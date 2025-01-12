// components/ServiceSlide.tsx
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ServiceSlide = ({ image, title, description, link }) => {
  return (
    <div className="mt-6">
      <a className="no-underline" href={link}>
        <Image
          src={image}
          className="max-w-full h-auto"
          alt={title}
          layout="intrinsic"
        />
      </a>
      <div className="px-1 pt-4 pb-0">
        <h4 className="mb-3 text-2xl font-semibold">
          <a
            href={link}
            className="text-black no-underline outline-none hover:text-green-600 duration-100"
          >
            {title}
          </a>
        </h4>
        <p className="mt-0 text-gray-500 text-base mb-3">{description}</p>
        <a
          href={link}
          className="text-base flex items-center justify-start gap-2 hover:text-green-600 font-semibold text-black no-underline duration-100"
        >
          Explore Now <FaArrowRight className="text-base mt-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceSlide;
