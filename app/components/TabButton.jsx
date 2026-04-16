import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100%)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = "text-black";

  return (
    <button
      onClick={selectTab}
      className="flex flex-col items-start transition duration-150 ease-in-out group"
      aria-pressed={active}
    >
      <span
        className={`font-semibold transition-colors duration-200 group-hover:text-blue-500 ${buttonClasses}`}
      >
        {children}
      </span>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-blue-500 mt-2"
      ></motion.div>
    </button>
  );
};

export default TabButton;