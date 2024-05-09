// Tooltip.tsx
import React, { useState } from "react";

interface TooltipProps {
  content: string;
  position: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          className={`absolute bg-dark-4 opacity-80 text-white py-1 px-2 rounded ${positionClasses[position]}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const positionClasses: { [key: string]: string } = {
  top: "bottom-full mb-2 left-[-6px]",
  bottom: "top-full mt-2 left-[-6px]",
};

export default Tooltip;
