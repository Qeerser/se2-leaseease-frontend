"use client";
import React, { useState } from "react";

interface ButtonGroupProps {
  buttons: string[];
  onClick?: (activeButton: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, onClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (onClick) {
      onClick(buttons[index]);
    }
  };

  return (
    <div className="flex h-9 p-1 justify-left items-center rounded-lg bg-zinc-100">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={`px-4 py-2 rounded-lg ${
            index === activeIndex
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;