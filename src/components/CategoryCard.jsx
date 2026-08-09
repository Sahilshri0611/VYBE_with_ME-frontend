import { motion } from "framer-motion";

import {
  Music2,
  Film,
  Mic2,
  Trophy,
  Theater
} from "lucide-react";

import {
  Link
} from "react-router-dom";


const icons = {

  Concerts: Music2,

  Movies: Film,

  Comedy: Mic2,

  Sports: Trophy,

  Theatre: Theater

};


export default function CategoryCard({
  name,
  description
}) {

  const Icon =
    icons[name] || Music2;


  return (

    <Link
      to={
        name === "Movies"
          ? "/movies"
          : "/events"
      }
    >

      <motion.div

        whileHover={{
          scale: 1.025
        }}

        className="
          group
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-[var(--border-color)]
          bg-[var(--bg-card)]
          p-6
          transition-colors
          duration-300
        "
      >

        <div
          className="
            flex
            h-44
            flex-col
            justify-between
          "
        >


          {/* ICON */}

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-[var(--accent)]
              text-[var(--accent-text)]
            "
          >

            <Icon size={21} />

          </div>


          {/* TEXT */}

          <div>

            <h3
              className="
                text-2xl
                font-semibold
                text-[var(--text-primary)]
              "
            >
              {name}
            </h3>


            <p
              className="
                mt-1
                text-sm
                text-[var(--text-muted)]
              "
            >
              {description}
            </p>

          </div>

        </div>


        {/* DECORATION */}

        <div
          className="
            absolute
            -right-12
            -top-12
            h-40
            w-40
            rounded-full
            bg-[var(--text-primary)]
            opacity-[0.025]
            blur-2xl
            transition
            group-hover:opacity-[0.07]
          "
        />

      </motion.div>

    </Link>

  );

}