import { useState } from "react";

import {
  Search
} from "lucide-react";

import EventCard from "../components/EventCard";

import { movies } from "../data/mockData";


export default function Movies() {

  const [query, setQuery] = useState("");


  const filteredMovies = movies.filter(
    (movie) => {

      const text = `
        ${movie.title}
        ${movie.location}
      `.toLowerCase();

      return text.includes(
        query.toLowerCase()
      );

    }
  );


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

        <p
          className="
            text-xs
            uppercase
            tracking-[0.25em]
            text-[var(--text-muted)]
          "
        >
          Big screen
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
          Movies.
        </h1>


        <p
          className="
            mt-5
            max-w-xl
            text-[var(--text-muted)]
          "
        >
          Find something worth leaving
          the house for.
        </p>


        {/* SEARCH */}

        <div
          className="
            mt-9
            flex
            max-w-xl
            items-center
            gap-3
            rounded-2xl
            border
            border-[var(--border-color)]
            bg-[var(--bg-card)]
            px-4
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
              Search movies...
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


        {/* MOVIES */}

        <div
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {filteredMovies.map((movie) => (

            <EventCard
              key={movie.id}
              event={movie}
              compact
            />

          ))}

        </div>


        {/* EMPTY */}

        {filteredMovies.length === 0 && (

          <div
            className="
              py-24
              text-center
              text-[var(--text-muted)]
            "
          >
            No movies found.
          </div>

        )}

      </div>

    </section>

  );
}