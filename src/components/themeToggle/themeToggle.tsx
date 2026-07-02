import { FC } from "react";
import "./themeToggle.css";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle: FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="pf-theme-btn"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? "☀" : "☽"}
    </button>
  );
};

export default ThemeToggle;
