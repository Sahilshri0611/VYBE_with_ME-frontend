import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import {
  Search,
  ArrowDown
} from "lucide-react";

import {
  Link
} from "react-router-dom";


export default function Hero() {

  /* =======================================================
     PARALLAX
     ======================================================= */

  const {
    scrollY
  } = useScroll();


  const imageY = useTransform(
    scrollY,
    [0, 700],
    [0, 190]
  );


  const contentY = useTransform(
    scrollY,
    [0, 500],
    [0, 80]
  );


  const contentOpacity =
    useTransform(
      scrollY,
      [0, 450],
      [1, 0]
    );


  return (

    <section
      className="
        relative
        flex
        min-h-[720px]
        items-end
        overflow-hidden
        md:min-h-screen
      "
    >

      {/* =================================================
          PARALLAX IMAGE
         ================================================= */}

      <motion.div

        style={{
          y: imageY
        }}

        className="
          absolute
          -top-24
          bottom-0
          left-0
          right-0
        "
      >

        <img

          src="
            https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=90
          "

          alt="Live entertainment experience"

          className="
            h-full
            w-full
            object-cover
          "

        />

      </motion.div>


      {/* =================================================
          DARK OVERLAY
          
          IMPORTANT:
          This stays dark even in LIGHT MODE.
         ================================================= */}

      <div
        className="
          hero-overlay-left
          absolute
          inset-0
        "
      />


      <div
        className="
          hero-overlay-bottom
          absolute
          inset-0
        "
      />


      {/* =================================================
          GRID
         ================================================= */}

      <div
        className="
          hero-grid
          absolute
          inset-0
          opacity-30
        "
      />


      {/* =================================================
          HERO CONTENT
         ================================================= */}

      <motion.div

        style={{
          y: contentY,
          opacity: contentOpacity
        }}

        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-5
          pb-20
          pt-44
          lg:px-8
        "
      >

        <div
          className="
            max-w-4xl
          "
        >

          {/* =================================================
              EYEBROW
             ================================================= */}

          <motion.div

            initial={{
              opacity: 0,
              y: 20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.6
            }}

            className="
              mb-6
              inline-flex
              rounded-full
              border
              border-white/20
              bg-black/35
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.25em]
              text-white
              backdrop-blur-xl
            "
          >

            Discover
            <span className="mx-2">
              ·
            </span>
            Experience
            <span className="mx-2">
              ·
            </span>
            Remember

          </motion.div>


          {/* =================================================
              TITLE
              
              ALWAYS WHITE
             ================================================= */}

          <motion.h1

            initial={{
              opacity: 0,
              y: 35
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.8,
              delay: 0.1
            }}

            className="
              display-font
              hero-title
              text-5xl
              font-semibold
              leading-[0.94]
              tracking-[-0.045em]
              sm:text-7xl
              lg:text-8xl
            "
          >

            Your next

            <span
              className="
                block
                text-white/65
              "
            >
              unforgettable
            </span>

            <span
              className="
                block
                text-white
              "
            >
              experience.
            </span>

          </motion.h1>


          {/* =================================================
              DESCRIPTION
              
              ALWAYS LIGHT
             ================================================= */}

          <motion.p

            initial={{
              opacity: 0,
              y: 25
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.7,
              delay: 0.25
            }}

            className="
              hero-description
              mt-8
              max-w-2xl
              text-base
              leading-7
              md:text-lg
            "
          >

            Find movies, concerts, comedy,
            sports and experiences that make
            your week feel less ordinary.

          </motion.p>


          {/* =================================================
              SEARCH / CTA
             ================================================= */}

          <motion.div

            initial={{
              opacity: 0,
              y: 25
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.7,
              delay: 0.35
            }}

            className="
              mt-8
              flex
              max-w-2xl
              flex-col
              gap-3
              sm:flex-row
            "
          >

            {/* SEARCH */}

            <Link

              to="/events"

              className="
                flex
                flex-1
                items-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-black/40
                px-5
                py-4
                text-sm
                text-white/70
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/40
                hover:bg-black/55
                hover:text-white
              "
            >

              <Search
                size={18}
              />

              <span>
                Search experiences,
                artists, places...
              </span>

            </Link>


            {/* CTA */}

            <Link

              to="/events"

              className="
                rounded-full
                bg-white
                px-7
                py-4
                text-center
                text-sm
                font-semibold
                text-black
                shadow-xl
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-white/90
              "
            >
              Explore now
            </Link>

          </motion.div>


          {/* =================================================
              SCROLL INDICATOR
             ================================================= */}

          <motion.div

            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            transition={{
              duration: 1,
              delay: 0.8
            }}

            className="
              mt-14
              flex
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/50
            "
          >

            <motion.div

              animate={{
                y: [0, 5, 0]
              }}

              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >

              <ArrowDown
                size={16}
              />

            </motion.div>


            Scroll to explore

          </motion.div>

        </div>

      </motion.div>

    </section>

  );

}