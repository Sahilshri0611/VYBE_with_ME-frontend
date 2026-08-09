import {
  useEffect,
  useState
} from "react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  Link,
  NavLink
} from "react-router-dom";

import {
  Menu,
  Search,
  UserRound,
  X
} from "lucide-react";

import ThemeToggle
  from "./ThemeToggle";


export default function Navbar() {

  const [
    scrolled,
    setScrolled
  ] = useState(false);


  const [
    mobileOpen,
    setMobileOpen
  ] = useState(false);


  /* =======================================================
     SCROLL DETECTION
     ======================================================= */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 50
      );

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /* =======================================================
     NAVIGATION
     ======================================================= */

  const links = [

    {
      path: "/",
      label: "Discover"
    },

    {
      path: "/movies",
      label: "Movies"
    },

    {
      path: "/events",
      label: "Events"
    },

    {
      path: "/about",
      label: "About"
    }

  ];


  /* =======================================================
     CLOSE MOBILE MENU
     ======================================================= */

  const closeMobileMenu = () => {

    setMobileOpen(false);

  };


  return (

    <>

      {/* ===================================================
          NAVBAR
         =================================================== */}

      <motion.header

        animate={{
          height:
            scrolled
              ? "68px"
              : "84px"
        }}

        transition={{
          duration: 0.25,
          ease: "easeOut"
        }}

        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-colors
          duration-300

          ${
            scrolled
              ? `
                border-b
                border-[var(--border-color)]
                bg-[var(--bg-primary)]/90
                backdrop-blur-xl
              `
              : `
                border-b
                border-transparent
                bg-transparent
              `
          }
        `}
      >

        <div
          className="
            mx-auto
            flex
            h-full
            max-w-7xl
            items-center
            justify-between
            px-5
            lg:px-8
          "
        >

          {/* =================================================
              LOGO
             ================================================= */}

          <Link

            to="/"

            onClick={
              closeMobileMenu
            }

            className={`
              display-font
              text-2xl
              font-bold
              tracking-tight
              transition-colors
              duration-300

              ${
                scrolled
                  ? "text-[var(--text-primary)]"
                  : "text-white"
              }
            `}
          >

            VYBE

            <span
              className={`
                transition-colors

                ${
                  scrolled
                    ? "text-[var(--text-muted)]"
                    : "text-white/50"
                }
              `}
            >
              .
            </span>

          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
             ================================================= */}

          <nav
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >

            {links.map(
              (link) => (

                <NavLink

                  key={
                    link.path
                  }

                  to={
                    link.path
                  }

                  className={({
                    isActive
                  }) => `

                    text-sm
                    font-medium
                    transition-colors
                    duration-200

                    ${
                      scrolled

                        ?

                        (
                          isActive

                            ?

                            "text-[var(--text-primary)]"

                            :

                            "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        )

                        :

                        (
                          isActive

                            ?

                            "text-white"

                            :

                            "text-white/60 hover:text-white"
                        )
                    }

                  `}
                >

                  {link.label}

                </NavLink>

              )
            )}

          </nav>


          {/* =================================================
              DESKTOP ACTIONS
             ================================================= */}

          <div
            className="
              hidden
              items-center
              gap-3
              md:flex
            "
          >

            {/* SEARCH */}

            <Link

              to="/events"

              aria-label="Search"

              title="Search experiences"

              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white
                text-black
                shadow-lg
                transition-all
                duration-200
                hover:scale-105
              "
            >

              <Search
                size={18}
                strokeWidth={2}
              />

            </Link>


            {/* THEME TOGGLE */}

            <ThemeToggle />


            {/* PROFILE */}

            <Link

              to="/profile"

              className={`
                flex
                items-center
                gap-2
                rounded-full
                px-4
                py-2.5
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:scale-[1.02]

                ${
                  scrolled

                    ?

                    `
                      bg-[var(--accent)]
                      text-[var(--accent-text)]
                    `

                    :

                    `
                      bg-white
                      text-black
                    `
                }
              `}
            >

              <UserRound
                size={16}
              />

              Profile

            </Link>

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
             ================================================= */}

          <button

            type="button"

            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }

            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }

            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white
              text-black
              shadow-lg
              transition-all
              duration-200
              hover:scale-105
              md:hidden
            "
          >

            {mobileOpen ? (

              <X
                size={20}
              />

            ) : (

              <Menu
                size={20}
              />

            )}

          </button>

        </div>


        {/* =================================================
            MOBILE MENU
           ================================================= */}

        <AnimatePresence>

          {mobileOpen && (

            <motion.div

              initial={{
                opacity: 0,
                height: 0
              }}

              animate={{
                opacity: 1,
                height: "auto"
              }}

              exit={{
                opacity: 0,
                height: 0
              }}

              transition={{
                duration: 0.25
              }}

              className="
                overflow-hidden
                border-t
                border-[var(--border-color)]
                bg-[var(--bg-primary)]
                md:hidden
              "
            >

              <div
                className="
                  mx-auto
                  max-w-7xl
                  px-5
                  py-6
                "
              >

                {/* MOBILE LINKS */}

                <nav
                  className="
                    flex
                    flex-col
                    gap-2
                  "
                >

                  {links.map(
                    (link) => (

                      <NavLink

                        key={
                          link.path
                        }

                        to={
                          link.path
                        }

                        onClick={
                          closeMobileMenu
                        }

                        className={({
                          isActive
                        }) => `

                          rounded-2xl
                          px-4
                          py-3
                          text-lg
                          transition-colors

                          ${
                            isActive

                              ?

                              `
                                bg-[var(--bg-card)]
                                text-[var(--text-primary)]
                              `

                              :

                              `
                                text-[var(--text-muted)]
                                hover:bg-[var(--bg-card)]
                                hover:text-[var(--text-primary)]
                              `
                          }

                        `}
                      >

                        {link.label}

                      </NavLink>

                    )
                  )}

                </nav>


                {/* MOBILE ACTIONS */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[var(--border-color)]
                    pt-6
                  "
                >

                  {/* THEME */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <span
                      className="
                        text-sm
                        text-[var(--text-muted)]
                      "
                    >
                      Appearance
                    </span>

                    <ThemeToggle />

                  </div>


                  {/* PROFILE */}

                  <Link

                    to="/profile"

                    onClick={
                      closeMobileMenu
                    }

                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[var(--accent)]
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-[var(--accent-text)]
                    "
                  >

                    <UserRound
                      size={16}
                    />

                    Profile

                  </Link>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.header>

    </>

  );

}