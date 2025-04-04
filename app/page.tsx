"use client";
import { Button } from "@/components/ui/button";
import { FiEye } from "react-icons/fi";

import React, { useState } from "react";

// Component
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import ModalResume from "@/components/ModalResume";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I{"'"}m <br />
              <span className="text-accent">Ahnaf Rafid</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A passionate web developer with expertise in React.js, Next.js,
              and the latest frameworks. I have a strong interest in web
              development and enjoy building dynamic, high-performance
              applications
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsOpen(true)}
                className="uppercase flex items-center gap-2 cursor-pointer"
              >
                <span>My Resume</span>
                <FiEye className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <ModalResume isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
};

export default Home;
