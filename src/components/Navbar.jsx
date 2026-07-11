import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import Container from "./ui/Container";
import Button from "./ui/Button";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const CV_URL = "/toby-ishiwu-cv.pdf";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "backdrop-blur-xl bg-[#030712]/85 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-[#030712]/40 border-white/5",
      ].join(" ")}
    >
      <Container>
        <nav className="flex items-center justify-between h-28" aria-label="Primary navigation">
          <NavLink
            to="/"
            className="group text-4xl md:text-5xl font-black tracking-tight text-white select-none transition-transform duration-300 hover:scale-[1.04]"
            aria-label="Toby Ishiwu home"
          >
            Toby
            <span className="text-violet-500 transition-colors duration-300 group-hover:text-violet-400">.</span>
          </NavLink>

          <ul className="hidden md:flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-full p-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="relative">
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    [
                      "relative z-10 block px-6 py-3 text-base font-semibold rounded-full transition-colors duration-200",
                      isActive ? "text-white" : "text-gray-400 hover:text-white",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-violet-600/90"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Button
              href={CV_URL}
              variant="secondary"
              className="text-base px-6 py-3.5 hover:border-white/30"
              aria-label="Download CV"
            >
              <span className="flex items-center gap-2.5">
                <HiOutlineArrowDownTray className="w-5 h-5" />
                Download CV
              </span>
            </Button>

            <Button
              to="/contact"
              variant="primary"
              className="text-base px-7 py-3.5 bg-gradient-to-r from-violet-600 to-violet-400 shadow-lg shadow-violet-600/40 hover:shadow-xl hover:shadow-violet-600/60 hover:-translate-y-0.5 hover:scale-[1.03]"
              aria-label="Hire Me"
            >
              Hire Me
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="md:hidden relative inline-flex items-center justify-center w-12 h-12 rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="absolute">
                  <HiX className="w-6 h-6" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} className="absolute">
                  <HiMenu className="w-6 h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-[calc(100%+0.75rem)] left-4 right-4 z-40"
          >
            <div className="rounded-3xl border border-white/10 bg-[#030712]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
              <div className="flex flex-col gap-2 p-5">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      [
                        "px-5 py-4 rounded-2xl text-lg font-semibold transition-colors duration-200",
                        isActive ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white hover:bg-white/5",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="flex flex-col gap-3 mt-3 pt-5 border-t border-white/10">
                  <Button href={CV_URL} variant="secondary" className="w-full text-base py-4" aria-label="Download CV">
                    <span className="flex items-center justify-center gap-2">
                      <HiOutlineArrowDownTray className="w-5 h-5" />
                      Download CV
                    </span>
                  </Button>

                  <Button to="/contact" variant="primary" className="w-full text-base py-4 bg-gradient-to-r from-violet-600 to-violet-400 shadow-lg shadow-violet-600/40" aria-label="Hire Me">
                    Hire Me
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
