// Tooltip.tsx
import React, { useState } from "react";

interface TooltipProps {
  content: string;
  position: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position,
  children,
  className,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <span
          className={`absolute bg-dark-4 opacity-80 text-white py-1 px-2 rounded ${positionClasses[position]} z-[48594984894984]`}
        >
          {content}
        </span>
      )}
    </span>
  );
};

const positionClasses: { [key: string]: string } = {
  top: "bottom-full mb-2 left-[-6px]",
  bottom: "top-full mt-2 left-[-6px]",
};

export default Tooltip;
