import {
  useMemo,
  useState
} from "react";

import {
  Link,
  useParams
} from "react-router-dom";

import {
  ArrowLeft,
  Check
} from "lucide-react";

import BookingForm from "../components/BookingForm";

import {
  events,
  movies
} from "../data/mockData";


const rows = 5;
const cols = 8;


export default function Booking() {

  const { id } = useParams();


  const item = [
    ...events,
    ...movies
  ].find(
    (experience) =>
      experience.id === id
  );


  const [selected, setSelected] =
    useState(["B4"]);


  const seats = useMemo(() => {

    return Array.from(
      {
        length: rows * cols
      },
      (_, index) => {

        const row =
          String.fromCharCode(
            65 +
            Math.floor(index / cols)
          );

        const number =
          (index % cols) + 1;

        return `${row}${number}`;

      }
    );

  }, []);


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

        <h1>
          Booking not found.
        </h1>

      </section>

    );

  }


  const toggleSeat = (seat) => {

    setSelected((previous) => {

      if (
        previous.includes(seat)
      ) {

        return previous.filter(
          (item) => item !== seat
        );

      }


      return [
        ...previous,
        seat
      ];

    });

  };


  const total =
    selected.length *
    item.price;


  return (

    <section
      className="
        min-h-screen
        bg-[var(--bg-primary)]
        px-5
        pb-24
        pt-32
        transition-colors
        duration-300
        lg:px-8
      "
    >

      <div className="mx-auto max-w-7xl">


        {/* BACK */}

        <Link
          to={`/event/${item.id}`}
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-[var(--text-muted)]
            transition
            hover:text-[var(--text-primary)]
          "
        >

          <ArrowLeft size={16} />

          Back to experience

        </Link>


        {/* MAIN */}

        <div
          className="
            mt-8
            grid
            gap-10
            lg:grid-cols-[1fr_380px]
          "
        >


          {/* =================================================
              SEAT SECTION
             ================================================= */}

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.22em]
                text-[var(--text-muted)]
              "
            >
              01 · Choose your seats
            </p>


            <h1
              className="
                display-font
                mt-2
                text-4xl
                font-semibold
                text-[var(--text-primary)]
                md:text-5xl
              "
            >
              {item.title}
            </h1>


            <div
              className="
                mt-8
                rounded-[32px]
                border
                border-[var(--border-color)]
                bg-[var(--bg-secondary)]
                p-5
                transition-colors
                duration-300
                md:p-8
              "
            >

              {/* SCREEN */}

              <div
                className="
                  mb-10
                  rounded-full
                  border
                  border-[var(--border-color)]
                  bg-[var(--bg-card)]
                  py-3
                  text-center
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[var(--text-muted)]
                "
              >
                Screen / Stage
              </div>


              {/* SEATS */}

              <div
                className="
                  mx-auto
                  grid
                  max-w-md
                  grid-cols-8
                  gap-2
                  sm:gap-3
                "
              >

                {seats.map((seat) => {

                  const isSelected =
                    selected.includes(
                      seat
                    );


                  const isUnavailable =
                    [
                      "A2",
                      "A3",
                      "C5",
                      "D6",
                      "E1"
                    ].includes(seat);


                  return (

                    <button

                      key={seat}

                      disabled={
                        isUnavailable
                      }

                      onClick={() =>
                        toggleSeat(seat)
                      }

                      className={`
                        aspect-square
                        rounded-lg
                        text-[10px]
                        font-medium
                        transition-all
                        duration-200
                        sm:rounded-xl

                        ${
                          isUnavailable
                            ? `
                              bg-[var(--bg-elevated)]
                              text-[var(--text-muted)]
                              opacity-40
                              cursor-not-allowed
                            `
                            : isSelected
                              ? `
                                bg-[var(--accent)]
                                text-[var(--accent-text)]
                                scale-105
                              `
                              : `
                                border
                                border-[var(--border-color)]
                                bg-[var(--bg-card)]
                                text-[var(--text-muted)]
                                hover:border-[var(--text-secondary)]
                                hover:text-[var(--text-primary)]
                              `
                        }
                      `}
                    >

                      {isSelected ? (

                        <Check
                          className="mx-auto"
                          size={14}
                        />

                      ) : (

                        seat

                      )}

                    </button>

                  );

                })}

              </div>


              {/* LEGEND */}

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  justify-center
                  gap-5
                  text-xs
                  text-[var(--text-muted)]
                "
              >

                <span>
                  □ Available
                </span>

                <span>
                  ● Selected
                </span>

                <span>
                  ■ Unavailable
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              BOOKING SUMMARY
             ================================================= */}

          <aside
            className="
              h-fit
              rounded-[30px]
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
                text-xs
                uppercase
                tracking-[0.22em]
                text-[var(--text-muted)]
              "
            >
              02 · Your selection
            </p>


            <h2
              className="
                mt-3
                text-2xl
                font-semibold
                text-[var(--text-primary)]
              "
            >
              {item.title}
            </h2>


            <p
              className="
                mt-1
                text-sm
                text-[var(--text-muted)]
              "
            >
              {item.date}
              {" · "}
              {item.time}
            </p>


            <div
              className="
                my-6
                h-px
                bg-[var(--border-color)]
              "
            />


            <div
              className="
                flex
                justify-between
                gap-4
                text-sm
              "
            >

              <span
                className="
                  text-[var(--text-muted)]
                "
              >
                Seats
              </span>


              <span
                className="
                  text-right
                  text-[var(--text-primary)]
                "
              >
                {selected.join(", ")}
              </span>

            </div>


            <div
              className="
                mt-4
                flex
                justify-between
              "
            >

              <span>
                Total
              </span>


              <span
                className="
                  text-xl
                  font-semibold
                  text-[var(--text-primary)]
                "
              >
                ₹{total}
              </span>

            </div>


            <div
              className="
                my-7
                h-px
                bg-[var(--border-color)]
              "
            />


            <p
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.22em]
                text-[var(--text-muted)]
              "
            >
              03 · Details
            </p>


            <BookingForm
              event={item}
            />

          </aside>

        </div>

      </div>

    </section>

  );

}