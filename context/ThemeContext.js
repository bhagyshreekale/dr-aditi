"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDark(true);
    setMounted(true);
  }, []);

  // Apply theme to body
useEffect(() => {
  const root = document.documentElement;

  if (dark) {
    root.classList.add("dark");
    root.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [dark]);

  if (!mounted) return null; // prevents hydration mismatch

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};