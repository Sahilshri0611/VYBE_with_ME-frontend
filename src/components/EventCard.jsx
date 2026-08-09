import { motion } from "framer-motion";

import {
  Link
} from "react-router-dom";

import {
  MapPin,
  Star
} from "lucide-react";


export default function EventCard({
  event,
  compact = false
}) {

  return (

    <motion.article

      whileHover={{
        y: -8
      }}

      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22
      }}

      className="
        group
        min-w-[270px]
        overflow-hidden
        rounded-[28px]
        border
        border-[var(--border-color)]
        bg-[var(--bg-card)]
        transition-colors
        duration-300
      "
    >

      <Link
        to={`/event/${event.id}`}
      >


        {/* IMAGE */}

        <div
          className={`
            relative
            overflow-hidden

            ${
              compact
                ? "h-64"
                : "h-80"
            }
          `}
        >

          <motion.img

            src={event.image}

            alt={event.title}

            className="
              h-full
              w-full
              object-cover
            "

            whileHover={{
              scale: 1.08
            }}

            transition={{
              duration: 0.55
            }}

          />


          {/* IMAGE GRADIENT */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/5
              to-transparent
            "
          />


          {/* CATEGORY */}

          <div
            className="
              absolute
              left-4
              top-4
              rounded-full
              border
              border-white/15
              bg-black/45
              px-3
              py-1.5
              text-xs
              text-white
              backdrop-blur-md
            "
          >
            {event.type}
          </div>


          {/* TITLE */}

          <div
            className="
              absolute
              bottom-4
              left-4
              right-4
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                text-zinc-300
              "
            >

              <Star
                size={13}
                fill="currentColor"
              />

              {event.rating}

            </div>


            <h3
              className="
                mt-1
                text-xl
                font-semibold
                text-white
              "
            >
              {event.title}
            </h3>

          </div>

        </div>


        {/* CARD DETAILS */}

        <div className="p-4">


          <div
            className="
              flex
              items-center
              gap-2
              text-sm
              text-[var(--text-muted)]
            "
          >

            <MapPin size={15} />

            {event.location}

          </div>


          <div
            className="
              mt-3
              flex
              justify-between
              text-sm
            "
          >

            <span
              className="
                text-[var(--text-muted)]
              "
            >
              {event.date}
            </span>


            <span
              className="
                font-medium
                text-[var(--text-primary)]
              "
            >
              From ₹{event.price}
            </span>

          </div>

        </div>

      </Link>

    </motion.article>

  );

}