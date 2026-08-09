import { motion } from "framer-motion";

import {
  ArrowDown,
  Sparkles,
  Zap,
  Heart
} from "lucide-react";


export default function About() {

  return (

    <section
      className="
        min-h-screen
        bg-[var(--bg-primary)]
        pb-24
        pt-36
        transition-colors
        duration-300
      "
    >

      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          lg:px-8
        "
      >


        {/* =================================================
            INTRO
           ================================================= */}

        <div className="max-w-5xl">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[var(--text-muted)]
            "
          >
            The idea behind VYBE
          </p>


          <h1
            className="
              display-font
              mt-5
              text-5xl
              font-semibold
              leading-[1]
              tracking-[-0.04em]
              text-[var(--text-primary)]
              md:text-8xl
            "
          >

            We don't sell tickets.

            <span
              className="
                block
                text-[var(--text-muted)]
              "
            >
              We help people
              find stories.
            </span>

          </h1>


          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-[var(--text-secondary)]
            "
          >
            VYBE is a frontend concept for
            a more human entertainment platform
            — visual, fast, personal and built
            around the feeling of going somewhere.
          </p>

        </div>


        {/* =================================================
            VALUES
           ================================================= */}

        <div
          className="
            mt-24
            grid
            gap-5
            md:grid-cols-3
          "
        >

          <Value
            icon={<Sparkles />}
            number="01"
            title="Discover"
            text="
              Less noise. Better recommendations.
              A visual way to see what is actually
              happening.
            "
          />


          <Value
            icon={<Zap />}
            number="02"
            title="Experience"
            text="
              A booking journey that feels like
              choosing an experience instead of
              completing paperwork.
            "
          />


          <Value
            icon={<Heart />}
            number="03"
            title="Remember"
            text="
              Your bookings, saved experiences
              and activity stay together in one
              simple personal space.
            "
          />

        </div>


        {/* =================================================
            BACKGROUND
           ================================================= */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          viewport={{
            once: true
          }}

          transition={{
            duration: 0.5
          }}

          className="
            mt-24
            rounded-[36px]
            border
            border-[var(--border-color)]
            bg-[var(--bg-card)]
            p-8
            transition-colors
            duration-300
            md:p-14
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
              text-[var(--text-muted)]
            "
          >

            <ArrowDown size={16} />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.25em]
              "
            >
              Background
            </span>

          </div>


          <h2
            className="
              display-font
              mt-7
              max-w-4xl
              text-4xl
              font-semibold
              tracking-tight
              text-[var(--text-primary)]
              md:text-6xl
            "
          >
            Entertainment should feel exciting
            before you even arrive.
          </h2>


          <p
            className="
              mt-6
              max-w-3xl
              leading-8
              text-[var(--text-muted)]
            "
          >
            This concept focuses on cinematic
            discovery, fluid transitions, clear
            information and a booking flow that
            keeps the user focused on the experience.
          </p>

        </motion.div>

      </div>

    </section>

  );
}


/* =========================================================
   VALUE CARD
   ========================================================= */

function Value({
  icon,
  number,
  title,
  text
}) {

  return (

    <div
      className="
        rounded-[30px]
        border
        border-[var(--border-color)]
        bg-[var(--bg-card)]
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

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
          {icon}
        </div>


        <span
          className="
            text-xs
            text-[var(--text-muted)]
          "
        >
          {number}
        </span>

      </div>


      <h3
        className="
          mt-16
          text-2xl
          font-semibold
          text-[var(--text-primary)]
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-3
          leading-7
          text-[var(--text-muted)]
        "
      >
        {text}
      </p>

    </div>

  );

}