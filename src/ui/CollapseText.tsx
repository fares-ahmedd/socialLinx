import { useState } from "react";

function CollapseText({ content }: { content: string }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const threshold = 20;
  const words = content.split(" ");

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <p className="text-white">
      {isCollapsed && words.length > threshold
        ? `${words.slice(0, threshold).join(" ")}... `
        : content}
      {words.length > threshold && (
        <button
          className="text-primary-500 hover:underline ml-2"
          onClick={toggleCollapse}
        >
          {isCollapsed ? "See more" : "Show less"}
        </button>
      )}
    </p>
  );
}

export default CollapseText;
