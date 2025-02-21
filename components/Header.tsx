"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

// Component
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const toggleMenu = () => setMobileNavOpen(!mobileNavOpen);
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ahnaf<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <div
            onClick={() => setMobileNavOpen(true)}
            className="cursor-pointer"
          >
            <CiMenuFries size={32} className="text-accent" />
          </div>
          <MobileNav mobileNavOpen={mobileNavOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
