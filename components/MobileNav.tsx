import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiCloseLargeFill } from "react-icons/ri";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = ({
  mobileNavOpen,
  toggleMenu,
}: {
  mobileNavOpen: boolean;
  toggleMenu: () => void;
}) => {
  const pathname = usePathname();

  // Variants untuk menu utama (smooth open & close)
  const mobileMenuVariant = {
    opened: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1], // cubic-bezier curve
      },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // Efek fade-in untuk elemen dalam menu
  const fadeInVariant = {
    opened: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // List menu animasi (staggered effect)
  const ulVariant = {
    opened: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  // Item menu animasi (dari bawah ke atas)
  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: "20%",
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.nav initial="closed" animate={mobileNavOpen ? "opened" : "closed"}>
      <motion.div
        variants={mobileMenuVariant}
        className="h-screen py-8 xl:py-12 text-white w-screen fixed top-0 bg-darken right-0 z-50"
      >
        {/* Tombol Close */}
        <motion.div
          variants={fadeInVariant}
          className="flex justify-end text-accent cursor-pointer mr-5"
          onClick={toggleMenu}
        >
          <RiCloseLargeFill size={32} />
        </motion.div>

        {/* List Menu */}
        <motion.div
          variants={ulVariant}
          className="flex flex-col items-center gap-8 mt-10"
        >
          {links.map((link, index) => (
            <Link href={link.path} key={index} onClick={toggleMenu}>
              <motion.div
                variants={liVariant}
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                className={`text-2xl capitalize font-medium transition-all hover:text-accent ${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : ""
                }`}
              >
                {link.name}
              </motion.div>
            </Link>
          ))}

          {/* Informasi Kontak */}
          <motion.div
            variants={fadeInVariant}
            className="flex flex-wrap items-center justify-center gap-8 w-full text-md"
          >
            <h5>+62 896 5618 3536</h5>
            <h5>ahnafrafid22@gmail.com</h5>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default MobileNav;
