"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalResume({ isOpen, onClose }: ModalResumeProps) {
  if (!isOpen) return null;

  const animate = {
    opened: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1], // cubic-bezier curve
      },
    },
    closed: {
      y: "100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
      initial="closed"
      animate={isOpen ? "opened" : "closed"}
    >
      {/* Animasi Modal */}
      <motion.div
        variants={animate}
        className="bg-primary w-[90%] h-[90%] max-w-6xl p-6 rounded-lg shadow-lg"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">My Resume</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition"
          >
            <X className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
        <iframe
          src="/assets/resume/Ahnaf Rafid N - Curriculum Vitae.pdf"
          className="w-full h-[800px] border rounded-lg "
          title="Resume"
        />
      </motion.div>
    </motion.div>
  );
}
