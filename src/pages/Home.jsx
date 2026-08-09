import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import CategoryCard from "../components/CategoryCard";
import SectionHeading from "../components/SectionHeading";

import { events, movies } from "../data/mockData";


export default function Home() {

  return (
    <>

      {/* =================================================
          HERO
         ================================================= */}

      <Hero />


      {/* =================================================
          TRENDING EXPERIENCES
         ================================================= */}

      <section
        className="
          bg-[var(--bg-primary)]
          px-5
          py-20
          transition-colors
          duration-300
          lg:px-8
        "
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="What's happening"
            title="Trending right now"

            action={
              <Link
                to="/events"
                className="
                  text-sm
                  text-[var(--text-muted)]
                  transition
                  hover:text-[var(--text-primary)]
                "
              >
                View all →
              </Link>
            }
          />

          <div
            className="
              no-scrollbar
              flex
              gap-5
              overflow-x-auto
              pb-4
            "
          >

            {events.slice(0, 5).map((event) => (

              <EventCard
                key={event.id}
                event={event}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CATEGORIES
         ================================================= */}

      <section
        className="
          border-y
          border-[var(--border-color)]
          bg-[var(--bg-secondary)]
          px-5
          py-20
          transition-colors
          duration-300
          lg:px-8
        "
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Choose your mood"
            title="Explore experiences"
          />

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >

            <CategoryCard
              name="Concerts"
              description="Live music & festivals"
            />

            <CategoryCard
              name="Movies"
              description="Big screen moments"
            />

            <CategoryCard
              name="Comedy"
              description="Laugh out loud"
            />

            <CategoryCard
              name="Sports"
              description="Feel the energy"
            />

            <CategoryCard
              name="Theatre"
              description="Stories on stage"
            />

          </div>

        </div>

      </section>


      {/* =================================================
          MOVIES
         ================================================= */}

      <section
        className="
          bg-[var(--bg-primary)]
          px-5
          py-20
          transition-colors
          duration-300
          lg:px-8
        "
      >

        <div className="mx-auto max-w-7xl">

          <SectionHeading

            eyebrow="For your next night out"

            title="Movies worth watching"

            action={
              <Link
                to="/movies"
                className="
                  text-sm
                  text-[var(--text-muted)]
                  transition
                  hover:text-[var(--text-primary)]
                "
              >
                See movies →
              </Link>
            }

          />

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {movies.map((movie) => (

              <EventCard
                key={movie.id}
                event={movie}
                compact
              />

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          VYBE DIFFERENCE
         ================================================= */}

      <section
        className="
          bg-[var(--bg-primary)]
          px-5
          pb-24
          transition-colors
          duration-300
          lg:px-8
        "
      >

        <div className="mx-auto max-w-7xl">

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
              overflow-hidden
              rounded-[36px]
              border
              border-[var(--border-color)]
              bg-[var(--bg-card)]
              p-8
              transition-colors
              duration-300
              md:p-12
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-[var(--text-muted)]
              "
            >
              The VYBE difference
            </p>


            <h2
              className="
                display-font
                mt-4
                max-w-3xl
                text-4xl
                font-semibold
                tracking-tight
                text-[var(--text-primary)]
                md:text-6xl
              "
            >
              Less scrolling.
              More experiences.
            </h2>


            <p
              className="
                mt-5
                max-w-2xl
                leading-7
                text-[var(--text-muted)]
              "
            >
              Discover what is actually worth doing with
              a cleaner, more visual booking experience
              designed around people, not listings.
            </p>


            <Link
              to="/about"
              className="
                mt-8
                inline-flex
                rounded-full
                bg-[var(--accent)]
                px-6
                py-3
                text-sm
                font-semibold
                text-[var(--accent-text)]
                transition
                hover:scale-[1.02]
              "
            >
              Our story
            </Link>

          </motion.div>

        </div>

      </section>

    </>
  );
}