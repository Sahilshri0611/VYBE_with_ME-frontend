import { Link, useParams } from "react-router-dom";

import {
  MapPin,
  CalendarDays,
  Clock3,
  Star,
  ArrowLeft
} from "lucide-react";

import {
  events,
  movies
} from "../data/mockData";


export default function EventDetails() {

  const { id } = useParams();


  const item = [
    ...events,
    ...movies
  ].find(
    (experience) =>
      experience.id === id
  );


  if (!item) {

    return (

      <section
        className="
          min-h-screen
          bg-[var(--bg-primary)]
          px-5
          pt-40
          text-center
        "
      >

        <h1
          className="
            text-3xl
            font-semibold
            text-[var(--text-primary)]
          "
        >
          Experience not found
        </h1>

      </section>

    );

  }


  return (

    <section
      className="
        bg-[var(--bg-primary)]
        pb-24
        pt-24
        transition-colors
        duration-300
      "
    >


      {/* =================================================
          HERO IMAGE
         ================================================= */}

      <div
        className="
          relative
          h-[55vh]
          min-h-[420px]
          overflow-hidden
        "
      >

        <img
          src={item.image}
          alt={item.title}
          className="
            h-full
            w-full
            object-cover
          "
        />


        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />


        {/* BACK */}

        <Link
          to={
            item.type === "Movie"
              ? "/movies"
              : "/events"
          }

          className="
            absolute
            left-5
            top-8
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-black/30
            px-4
            py-2
            text-sm
            text-white
            backdrop-blur-md
          "
        >

          <ArrowLeft size={16} />

          Back

        </Link>


        {/* TITLE */}

        <div
          className="
            absolute
            bottom-10
            left-0
            right-0
            mx-auto
            max-w-7xl
            px-5
            lg:px-8
          "
        >

          <div
            className="
              mb-3
              inline-flex
              rounded-full
              bg-white
              px-3
              py-1
              text-xs
              font-semibold
              text-black
            "
          >
            {item.type}
          </div>


          <h1
            className="
              display-font
              text-5xl
              font-semibold
              tracking-tight
              text-white
              md:text-7xl
            "
          >
            {item.title}
          </h1>

        </div>

      </div>


      {/* =================================================
          CONTENT
         ================================================= */}

      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          px-5
          pt-10
          lg:grid-cols-[1fr_360px]
          lg:px-8
        "
      >

        <div>


          {/* INFORMATION */}

          <div
            className="
              grid
              gap-3
              sm:grid-cols-4
            "
          >

            <Info
              icon={<MapPin size={17} />}
              label="Location"
              value={item.location}
            />

            <Info
              icon={<CalendarDays size={17} />}
              label="Date"
              value={item.date}
            />

            <Info
              icon={<Clock3 size={17} />}
              label="Time"
              value={item.time}
            />

            <Info
              icon={<Star size={17} />}
              label="Rating"
              value={item.rating}
            />

          </div>


          {/* ABOUT */}

          <div className="mt-14">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.22em]
                text-[var(--text-muted)]
              "
            >
              About the experience
            </p>


            <p
              className="
                mt-4
                max-w-2xl
                text-lg
                leading-8
                text-[var(--text-secondary)]
              "
            >
              {item.description}
            </p>

          </div>


          {/* VENUE */}

          <div
            className="
              mt-12
              border-t
              border-[var(--border-color)]
              pt-8
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
              Venue
            </p>


            <h2
              className="
                mt-2
                text-2xl
                font-semibold
                text-[var(--text-primary)]
              "
            >
              {item.venue}
            </h2>


            <p
              className="
                mt-2
                text-[var(--text-muted)]
              "
            >
              {item.location}
            </p>

          </div>

        </div>


        {/* =================================================
            BOOKING CARD
           ================================================= */}

        <aside
          className="
            h-fit
            rounded-[28px]
            border
            border-[var(--border-color)]
            bg-[var(--bg-card)]
            p-6
            transition-colors
            duration-300
            lg:sticky
            lg:top-24
          "
        >

          <p
            className="
              text-sm
              text-[var(--text-muted)]
            "
          >
            Tickets from
          </p>


          <p
            className="
              mt-1
              text-3xl
              font-semibold
              text-[var(--text-primary)]
            "
          >
            ₹{item.price}
          </p>


          <div
            className="
              my-6
              h-px
              bg-[var(--border-color)]
            "
          />


          <Link
            to={`/booking/${item.id}`}
            className="
              block
              rounded-full
              bg-[var(--accent)]
              py-4
              text-center
              font-semibold
              text-[var(--accent-text)]
              transition
              hover:scale-[1.01]
            "
          >
            Book tickets
          </Link>


          <p
            className="
              mt-4
              text-center
              text-xs
              text-[var(--text-muted)]
            "
          >
            Frontend demo — no payment/API
            is connected.
          </p>

        </aside>

      </div>

    </section>

  );
}


/* =========================================================
   INFORMATION CARD
   ========================================================= */

function Info({
  icon,
  label,
  value
}) {

  return (

    <div
      className="
        rounded-2xl
        border
        border-[var(--border-color)]
        bg-[var(--bg-card)]
        p-4
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


      <p
        className="
          mt-3
          text-xs
          text-[var(--text-muted)]
        "
      >
        {label}
      </p>


      <p
        className="
          mt-1
          text-sm
          text-[var(--text-primary)]
        "
      >
        {value}
      </p>

    </div>

  );

}