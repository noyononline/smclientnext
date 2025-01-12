import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import CopyWrite from "./CopyWrite";

import logo from "@/public/logo-2.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="py-24 bg-[#e5e7e9]">
        <div className="container mx-auto">
          <div className="flex justify-between flex-col md:flex-row px-10 sm:px-10 lg:px-3">
            <div className="flex flex-col md:flex-row justify-start">
              <div className="lg:w-6/12 md:pr-16 pr-0 lg:pr-5">
                <Link href={"/"}>
                  <Image
                    src={logo} // Use Next.js Image component
                    alt="Spotify podcast promotion"
                    className="max-w-full h-auto z-[5]"
                    layout="intrinsic"
                    priority
                  />
                </Link>

                <p className="text-slate-950 my-7 text-sm font-semibold lg:pr-7 sm:pr-0 md:pr-10 xs:pr-2 text-justify">
                  Gliter partners with businesses across every major industry to
                  make amazing products and connect the dots between people to
                  people.
                </p>
                <ul className="flex gap-2 w-full">
                  <li>
                    <a href="">
                      <FaFacebookF className="w-[32px] h-[32px] bg-white rounded-full text-[#666] p-[5px] duration-500 ease-in-out hover:bg-green-600 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaLinkedinIn className="w-[32px] h-[32px] bg-white rounded-full text-[#666] p-[5px] duration-500 ease-in-out hover:bg-green-600 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter className="w-[32px] h-[32px] bg-white rounded-full text-[#666] p-[5px] duration-500 ease-in-out hover:bg-green-600 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaInstagram className="w-[32px] h-[32px] bg-white rounded-full text-[#666] p-[5px] duration-500 ease-in-out hover:bg-green-600 hover:text-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pr-16 lg:pr-5 lg:w-6/12">
              <h3 className="text-slate-950 capitalize mb-5 mt-5 font-semibold text-3xl">
                Company
              </h3>
              <div className="flex flex-col gap-5 justify-start">
                <Link href={"/about-us"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    About us
                  </h4>
                </Link>
                <Link href={"/faq"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    FAQ
                  </h4>
                </Link>
                <Link href={"/faq"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    Help & Support
                  </h4>
                </Link>

                <Link href={"/about-us"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    Terms of Service
                  </h4>
                </Link>
                <Link href={"/about-us"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    Refund Policy
                  </h4>
                </Link>
                <Link href={"/about-us"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    Privacy Policy
                  </h4>
                </Link>
              </div>
            </div>
            <div className="pr-16">
              <h3 className="text-slate-950 capitalize mb-5 mt-5 font-semibold text-3xl">
                Services
              </h3>
              <div className="flex flex-col gap-5 justify-start">
                <Link href={"/about-us"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    About us
                  </h4>
                </Link>
                <Link href={"/faq"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    FAQ
                  </h4>
                </Link>
                <Link href={"/faq"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    Help & Support
                  </h4>
                </Link>

                <Link href={"/about-us"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    Terms of Service
                  </h4>
                </Link>
                <Link href={"/about-us"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    Refund Policy
                  </h4>
                </Link>
                <Link href={"/about-us"}>
                  <h4 className="text-sm capitalize text-slate-950 font-medium">
                    Privacy Policy
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CopyWrite />
      </div>
    </>
  );
};

export default Footer;
