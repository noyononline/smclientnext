"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const router = useRouter();
  const pathname = router.pathname;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/services", label: "Service" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <nav className="p-0 lg:flex hidden">
        <ul className="text-left flex mx-auto my-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href} className="text-center capitalize p-0 m-0">
              <Link
                href={link.href}
                className={`block py-3 px-5 text-lg no-underline font-bold font-mono ${
                  pathname === link.href ? "text-[#16A34A]" : "text-[#677294]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[75px] w-[80%] left-14 right-20 bg-white z-[99999] shadow-lg">
          <nav className="overflow-y-scroll max-h-[64vh]">
            <ul className="text-left flex flex-col mx-auto my-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href} className="capitalize px-10 p-0 m-0">
                  <Link
                    href={link.href}
                    className={`block py-3 px-5 text-lg no-underline font-bold font-mono border-t-2 border-solid border-[#dbeefd] ${
                      pathname === link.href
                        ? "text-[#16A34A]"
                        : "text-[#677294]"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
