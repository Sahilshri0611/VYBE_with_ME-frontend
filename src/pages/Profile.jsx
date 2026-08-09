import { Link } from "react-router-dom";

import {
  CalendarDays,
  Heart,
  Ticket,
  Settings,
  ArrowUpRight
} from "lucide-react";

import { events } from "../data/mockData";


export default function Profile() {

  const upcoming =
    events[0];


  return (

    <section
      className="
        min-h-screen
        bg-[var(--bg-primary)]
        px-5
        pb-24
        pt-36
        transition-colors
        duration-300
        lg:px-8
      "
    >

      <div className="mx-auto max-w-7xl">


        {/* =================================================
            PROFILE HEADER
           ================================================= */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-6
            border-b
            border-[var(--border-color)]
            pb-10
            md:flex-row
            md:items-end
          "
        >

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-[var(--text-muted)]
              "
            >
              Your space
            </p>


            <h1
              className="
                display-font
                mt-3
                text-5xl
                font-semibold
                tracking-tight
                text-[var(--text-primary)]
                md:text-7xl
              "
            >
              Hey, Sahil.
            </h1>


            <p
              className="
                mt-4
                text-[var(--text-muted)]
              "
            >
              Your experiences,
              all in one place.
            </p>

          </div>


          {/* SETTINGS */}

          <button
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-[var(--border-color)]
              bg-[var(--bg-card)]
              px-5
              py-3
              text-sm
              text-[var(--text-secondary)]
              transition
              hover:text-[var(--text-primary)]
            "
          >

            <Settings size={16} />

            Settings

          </button>

        </div>


        {/* =================================================
            STATS
           ================================================= */}

        <div
          className="
            grid
            gap-4
            py-10
            sm:grid-cols-3
          "
        >

          <Stat
            icon={<Ticket size={18} />}
            value="12"
            label="Bookings"
          />

          <Stat
            icon={<Heart size={18} />}
            value="08"
            label="Saved"
          />

          <Stat
            icon={<CalendarDays size={18} />}
            value="05"
            label="Upcoming"
          />

        </div>


        {/* =================================================
            CONTENT
           ================================================= */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.3fr_.7fr]
          "
        >


          {/* UPCOMING */}

          <div
            className="
              rounded-[30px]
              border
              border-[var(--border-color)]
              bg-[var(--bg-card)]
              p-6
              transition-colors
              duration-300
              md:p-8
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.22em]
                text-[var(--text-muted)]
              "
            >
              Next up
            </p>


            <div
              className="
                mt-6
                overflow-hidden
                rounded-2xl
              "
            >

              <img
                src={upcoming.image}
                alt={upcoming.title}
                className="
                  h-64
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-105
                "
              />

            </div>


            <div
              className="
                mt-5
                flex
                items-end
                justify-between
                gap-4
              "
            >

              <div>

                <h2
                  className="
                    text-2xl
                    font-semibold
                    text-[var(--text-primary)]
                  "
                >
                  {upcoming.title}
                </h2>


                <p
                  className="
                    mt-2
                    text-sm
                    text-[var(--text-muted)]
                  "
                >
                  {upcoming.date}
                  {" · "}
                  {upcoming.time}
                  {" · "}
                  {upcoming.location}
                </p>

              </div>


              <Link
                to={`/event/${upcoming.id}`}
                className="
                  rounded-full
                  bg-[var(--accent)]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-[var(--accent-text)]
                "
              >
                View
              </Link>

            </div>

          </div>


          {/* ACTIVITY */}

          <div
            className="
              rounded-[30px]
              border
              border-[var(--border-color)]
              bg-[var(--bg-secondary)]
              p-6
              transition-colors
              duration-300
              md:p-8
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.22em]
                text-[var(--text-muted)]
              "
            >
              Your activity
            </p>


            <div className="mt-6 space-y-5">

              {[
                ["Concerts", 5],
                ["Movies", 3],
                ["Comedy", 2],
                ["Sports", 2]
              ].map(
                ([category, count]) => (

                  <div
                    key={category}
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[var(--border-color)]
                      pb-5
                    "
                  >

                    <span
                      className="
                        text-[var(--text-muted)]
                      "
                    >
                      {category}
                    </span>


                    <span
                      className="
                        text-sm
                        text-[var(--text-primary)]
                      "
                    >
                      {count}
                    </span>

                  </div>

                )
              )}

            </div>


            <button
              className="
                mt-7
                flex
                items-center
                gap-2
                text-sm
                text-[var(--text-muted)]
                transition
                hover:text-[var(--text-primary)]
              "
            >

              View all activity

              <ArrowUpRight size={15} />

            </button>

          </div>

        </div>

      </div>

    </section>

  );
}


/* =========================================================
   STAT COMPONENT
   ========================================================= */

function Stat({
  icon,
  value,
  label
}) {

  return (

    <div
      className="
        rounded-[26px]
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
          text-[var(--text-muted)]
        "
      >
        {icon}
      </div>


      <div
        className="
          mt-6
          text-4xl
          font-semibold
          text-[var(--text-primary)]
        "
      >
        {value}
      </div>


      <div
        className="
          mt-1
          text-sm
          text-[var(--text-muted)]
        "
      >
        {label}
      </div>

    </div>

  );

}