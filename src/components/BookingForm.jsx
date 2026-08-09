import { useForm } from "react-hook-form";

import {
  CheckCircle2
} from "lucide-react";


export default function BookingForm({
  event
}) {

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();


  const onSubmit = (data) => {

    alert(
      `Demo booking created for ${data.name}. No payment/API is connected.`
    );

    console.log(
      "Booking data:",
      data
    );

  };


  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >


      {/* =================================================
          NAME
         ================================================= */}

      <div>

        <label
          className="
            mb-2
            block
            text-sm
            text-[var(--text-muted)]
          "
        >
          Full name
        </label>


        <input

          {...register(
            "name",
            {
              required:
                "Name is required",

              minLength: {
                value: 3,
                message:
                  "Enter at least 3 characters"
              }
            }
          )}

          placeholder="Your name"

          className="
            w-full
            rounded-2xl
            border
            border-[var(--border-color)]
            bg-[var(--bg-secondary)]
            px-4
            py-3.5
            text-[var(--text-primary)]
            outline-none
            transition
            placeholder:text-[var(--text-muted)]
            focus:border-[var(--text-secondary)]
          "
        />


        {errors.name && (

          <p
            className="
              mt-1
              text-xs
              text-red-400
            "
          >
            {errors.name.message}
          </p>

        )}

      </div>


      {/* =================================================
          EMAIL
         ================================================= */}

      <div>

        <label
          className="
            mb-2
            block
            text-sm
            text-[var(--text-muted)]
          "
        >
          Email
        </label>


        <input

          type="email"

          {...register(
            "email",
            {
              required:
                "Email is required",

              pattern: {
                value:
                  /^\S+@\S+\.\S+$/,

                message:
                  "Enter a valid email"
              }
            }
          )}

          placeholder="you@example.com"

          className="
            w-full
            rounded-2xl
            border
            border-[var(--border-color)]
            bg-[var(--bg-secondary)]
            px-4
            py-3.5
            text-[var(--text-primary)]
            outline-none
            transition
            placeholder:text-[var(--text-muted)]
            focus:border-[var(--text-secondary)]
          "
        />


        {errors.email && (

          <p
            className="
              mt-1
              text-xs
              text-red-400
            "
          >
            {errors.email.message}
          </p>

        )}

      </div>


      {/* =================================================
          TICKETS
         ================================================= */}

      <div>

        <label
          className="
            mb-2
            block
            text-sm
            text-[var(--text-muted)]
          "
        >
          Tickets
        </label>


        <select

          {...register(
            "tickets",
            {
              required: true
            }
          )}

          defaultValue="1"

          className="
            w-full
            rounded-2xl
            border
            border-[var(--border-color)]
            bg-[var(--bg-secondary)]
            px-4
            py-3.5
            text-[var(--text-primary)]
            outline-none
          "
        >

          {[1, 2, 3, 4, 5, 6].map(
            (number) => (

              <option
                key={number}
                value={number}
              >
                {number}
                {" "}
                ticket
                {number > 1
                  ? "s"
                  : ""}
              </option>

            )
          )}

        </select>

      </div>


      {/* =================================================
          SUMMARY
         ================================================= */}

      <div
        className="
          rounded-2xl
          border
          border-[var(--border-color)]
          bg-[var(--bg-secondary)]
          p-4
        "
      >

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
              text-[var(--text-secondary)]
            "
          >
            {event.title}
          </span>


          <span
            className="
              text-[var(--text-primary)]
            "
          >
            ₹{event.price}
          </span>

        </div>


        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            text-xs
            text-[var(--text-muted)]
          "
        >

          <CheckCircle2
            size={14}
          />

          Demo frontend booking

        </div>

      </div>


      {/* =================================================
          SUBMIT
         ================================================= */}

      <button

        type="submit"

        className="
          w-full
          rounded-full
          bg-[var(--accent)]
          py-4
          font-semibold
          text-[var(--accent-text)]
          transition-all
          duration-200
          hover:scale-[1.01]
        "
      >
        Continue to payment
      </button>

    </form>

  );

}