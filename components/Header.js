"use client";
import React from "react";
import Image from "next/image";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // For hamburger menu icon
import Link from "next/link"; // Next.js Link component
import logo2 from "@/public/logo-2.png"; // Ensure this is the correct path
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/lib/store/hooks/hooks";

const Header = ({ accountClass = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // Mobile menu state
  const [isScrolled, setIsScrolled] = React.useState(false); // Scroll state for header

  const { userInfo } = useAppSelector((state) => state.auth);
  const pathname = usePathname();

  // Handle scroll event without useEffect
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener on mount and cleanup on unmount
  React.useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header w-full p-0">
      <div className="fixed top-0 left-0 right-0 z-[1030]">
        <div
          className={`py-2 ${accountClass} px-0 w-full h-auto transition-all delay-75 duration-700 ${
            isScrolled ? "bg-white shadow-2xl" : ""
          }`}
        >
          <div className="my-0 container flex justify-between items-center mx-auto relative py-1 px-0">
            <div className="ml-5">
              <Link href="/">
                <Image
                  className="w-40 h-12"
                  src={logo2}
                  alt="header-logo"
                  priority={isScrolled} // Adding priority if scrolled
                  layout="intrinsic"
                />
              </Link>
            </div>

            {/* Desktop menu */}
            <nav className="p-0 lg:flex hidden">
              <ul className="text-left flex mx-auto my-0 p-0">
                <li className="text-center capitalize p-0 m-0">
                  <Link
                    href="/"
                    className={`block py-3 px-5 text-lg no-underline font-bold font-mono ${
                      pathname !== "/" ? "" : "text-[#16A34A]"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="text-center capitalize p-0 m-0">
                  <Link
                    href="/about-us"
                    className={`block py-3 px-5 text-lg no-underline font-bold font-mono ${
                      pathname !== "/about-us" ? "" : "text-[#16A34A]"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li className="text-center capitalize p-0 m-0">
                  <Link
                    href="/services"
                    className={`block py-3 px-5 text-lg no-underline font-bold font-mono ${
                      pathname !== "/services" ? "" : "text-[#16A34A]"
                    }`}
                  >
                    Service
                  </Link>
                </li>
                <li className="text-center capitalize p-0 m-0">
                  <Link
                    href="/contact-us"
                    className={`block py-3 px-5 text-lg no-underline font-bold font-mono ${
                      pathname !== "/contact-us" ? "" : "text-[#16A34A]"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="text-center capitalize p-0 m-0">
                  <Link
                    href="/faq"
                    className={`block py-3 px-5 text-lg no-underline font-bold font-mono ${
                      pathname !== "/faq" ? "" : "text-[#16A34A]"
                    }`}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex justify-center items-center gap-10">
              {userInfo ? (
                <Link
                  href="/dashboard"
                  className="capitalize text-lg no-underline font-bold gap-5   flex items-center justify-center  border-0"
                >
                  {userInfo.name}
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              ) : (
                <>
                  <div className="flex">
                    <Link
                      href="/account/login"
                      className={`block py-3 px-5 text-lg no-underline font-bold font-mono ${
                        pathname !== "/account/login" ? "" : "text-[#16A34A]"
                      }`}
                    >
                      Login
                    </Link>
                    <Link
                      href="/account/signup"
                      className={`block py-3 px-5 text-lg no-underline font-bold font-mono ${
                        pathname !== "/account/signup" ? "" : "text-[#16A34A]"
                      }`}
                    >
                      Signup
                    </Link>
                  </div>
                </>
              )}

              {/* Mobile menu icon */}
              <div className="block pr-5 sm:pr-0 lg:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu state
                  className="text-2xl text-[#3f9f42] "
                >
                  {isMobileMenuOpen ? (
                    <HiX className="w-10 h-10 text-6xl" />
                  ) : (
                    <HiMenuAlt3 className="w-10 h-10 text-6xl" />
                  )}{" "}
                  {/* Show X or hamburger icon */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[75px] w-[80%] left-14 right-20 bg-white z-[99999] shadow-lg">
          <nav className="overflow-y-scroll max-h-[64vh]">
            <ul className="text-left flex flex-col mx-auto my-0 p-0">
              <li className="capitalize px-10 p-0 m-0">
                <Link
                  href="/"
                  className={`block py-3  px-5 text-lg no-underline font-bold font-mono border-t-2 border-solid border-[#dbeefd] ${
                    pathname !== "/" ? "text-[#677294]" : "text-[#16A34A]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu when a link is clicked
                >
                  Home
                </Link>
              </li>
              <li className="capitalize  px-10 p-0 m-0">
                <Link
                  href="/about-us"
                  className={`block py-3 px-5  text-lg no-underline font-bold font-mono border-t-2 border-solid border-[#dbeefd] ${
                    pathname !== "/about-us"
                      ? "text-[#677294]"
                      : "text-[#16A34A]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="capitalize  px-10 p-0 m-0">
                <Link
                  href="/services"
                  className={`block py-3 px-5  text-lg no-underline font-bold font-mono border-t-2 border-solid border-[#dbeefd] ${
                    pathname !== "/services"
                      ? "text-[#677294]"
                      : "text-[#16A34A]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Service
                </Link>
              </li>
              <li className="capitalize  px-10 p-0 m-0">
                <Link
                  href="/contact-us"
                  className={`block py-3 px-5  text-lg no-underline font-bold font-mono border-t-2 border-solid border-[#dbeefd] ${
                    pathname !== "/contact-us"
                      ? "text-[#677294]"
                      : "text-[#16A34A]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li className="capitalize  px-10 p-0 m-0">
                <Link
                  href="/faq"
                  className={`block py-3 px-5 text-lg no-underline font-bold font-mono border-t-2 border-solid border-[#dbeefd] ${
                    pathname !== "/faq" ? "text-[#677294]" : "text-[#16A34A]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
