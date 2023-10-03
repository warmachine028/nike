/** @format */
"use client";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { SunIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const ThemeSwitch = () => {
  const navigate = useNavigate();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="inline-flex items-center">
      <SunIcon
        className={`mr-3 h-6 w-6 transition duration-300 cursor-pointer ${
          currentTheme === "dark" ? "text-coral-red" : "text-slate-gray"
        }`}
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      />
      <ShoppingCartIcon
        onClick={navigateToCart}
        className={`mr-3 h-6 w-6 transition duration-300 cursor-pointer ${
          currentTheme === "dark" ? "text-coral-red" : "text-slate-gray"
        }`}
      />
    </div>
  );
};

export default ThemeSwitch;
