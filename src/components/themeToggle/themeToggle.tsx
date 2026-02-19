import React, { FC } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle: FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={`p-3 rounded-full transition-all duration-300 ${
        isDark ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" : "bg-gray-100 hover:bg-gray-200 text-gray-900"
      }`}
      aria-label="Toggle theme"
    >
      {/* TODO: On hover change the color of toggle */}
      {isDark ? <Sun id="theme-toggle" size={24} color="black"/> : <Moon id="theme-toggle" size={24} color="black" />}
    </div>
  );
};

export default ThemeToggle;