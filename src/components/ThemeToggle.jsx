import { motion } from "framer-motion";
import {
  Sun,
  Moon
} from "lucide-react";

import {
  useTheme
} from "../context/ThemeContext";


export default function ThemeToggle() {

  const {
    theme,
    toggleTheme
  } = useTheme();


  return (

    <button

      onClick={toggleTheme}

      type="button"

      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }

      title={
        theme === "dark"
          ? "Light mode"
          : "Dark mode"
      }

      className="
        relative
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-white/20
        bg-white
        text-black
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        hover:bg-white
      "
    >

      <motion.div

        key={theme}

        initial={{
          opacity: 0,
          scale: 0.4,
          rotate: -90
        }}

        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0
        }}

        transition={{
          duration: 0.25
        }}

      >

        {theme === "dark" ? (

          <Sun
            size={18}
            strokeWidth={2}
          />

        ) : (

          <Moon
            size={18}
            strokeWidth={2}
          />

        )}

      </motion.div>

    </button>

  );

}