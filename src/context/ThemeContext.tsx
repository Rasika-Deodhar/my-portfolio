import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  setDark: (v: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem("theme:isDark");
      if (saved != null) return saved === "true";
    } catch {
      /* ignore */
    }
    // optional: follow prefers-color-scheme by default
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    // apply to document root for CSS variables / selectors
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    try {
      localStorage.setItem("theme:isDark", isDark ? "true" : "false");
    } catch {
      /* ignore */
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((s) => !s);
  const setDark = (v: boolean) => setIsDark(v);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const v = useContext(ThemeContext);
  if (!v) throw new Error("useTheme must be used within ThemeProvider");
  return v;
}