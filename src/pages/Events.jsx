import { useMemo, useState } from "react";

import {
  Search,
  SlidersHorizontal
} from "lucide-react";

import EventCard from "../components/EventCard";

import { events } from "../data/mockData";


export default function Events() {

  const [query, setQuery] = useState("");

  const [type, setType] = useState("All");


  const types = [
    "All",
    "Concert",
    "Comedy",
    "Festival",
    "Sports",
    "Theatre"
  ];


  const filteredEvents = useMemo(() => {

    return events.filter((event) => {

      const searchText = `
        ${event.title}
        ${event.location}
        ${event.type}
      `.toLowerCase();


      const matchesSearch =
        searchText.includes(
          query.toLowerCase()
        );


      const matchesType =
        type === "All" ||
        event.type === type;


      return (
        matchesSearch &&
        matchesType
      );

    });

  }, [query, type]);


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


        {/* HEADER */}

        <div className="max-w-3xl">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-[var(--text-muted)]
            "
          >
            Discover
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
            Find your next VYBE.
          </h1>


          <p
            className="
              mt-5
              text-[var(--text-muted)]
            "
          >
            Live shows, festivals, comedy,
            sports and more.
          </p>

        </div>


        {/* SEARCH + FILTER */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-4
            lg:flex-row
          "
        >


          {/* SEARCH */}

          <div
            className="
              flex
              flex-1
              items-center
              gap-3
              rounded-2xl
              border
              border-[var(--border-color)]
              bg-[var(--bg-card)]
              px-4
              transition-colors
              duration-300
            "
          >

            <Search
              size={18}
              className="text-[var(--text-muted)]"
            />


            <input

              value={query}

              onChange={(e) =>
                setQuery(e.target.value)
              }

              placeholder="
                Search experiences...
              "

              className="
                w-full
                bg-transparent
                py-4
                text-[var(--text-primary)]
                outline-none
                placeholder:text-[var(--text-muted)]
              "

            />

          </div>


          {/* FILTER */}

          <div
            className="
              flex
              items-center
              gap-2
              overflow-x-auto
              no-scrollbar
            "
          >

            <SlidersHorizontal
              size={18}
              className="
                mr-1
                shrink-0
                text-[var(--text-muted)]
              "
            />


            {types.map((item) => (

              <button

                key={item}

                onClick={() =>
                  setType(item)
                }

                className={`
                  whitespace-nowrap
                  rounded-full
                  px-4
                  py-2.5
                  text-sm
                  transition-all
                  duration-200

                  ${
                    type === item
                      ? `
                        bg-[var(--accent)]
                        text-[var(--accent-text)]
                      `
                      : `
                        border
                        border-[var(--border-color)]
                        text-[var(--text-muted)]
                        hover:text-[var(--text-primary)]
                      `
                  }
                `}
              >

                {item}

              </button>

            ))}

          </div>

        </div>


        {/* EVENTS */}

        <div
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {filteredEvents.map((event) => (

            <EventCard
              key={event.id}
              event={event}
            />

          ))}

        </div>


        {/* EMPTY STATE */}

        {filteredEvents.length === 0 && (

          <div
            className="
              py-24
              text-center
              text-[var(--text-muted)]
            "
          >

            No experiences found.

          </div>

        )}

      </div>

    </section>

  );
}