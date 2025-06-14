import { useState } from "react";
import { NavLink } from "react-router";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "../styles/Navbar.css";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/coaches", label: "COACHES" },
  { to: "/programs", label: "PROGRAMS" },
];

export default function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverXY, setHoverXY] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredIndex(index);
    setHoverXY({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <header className="w-full z-50 flex items-center justify-between py-3">
      <div className="text-xl font-bold text-white z-10">
        <img className="w-20" src="./Logo.png" alt="Aqua Pro Logo" />
      </div>

      {!isMobile && (
        <nav className="flex gap-6 text-white z-10">
          {navLinks.map(({ to, label }, index) => (
            <NavLink
              key={to}
              to={to}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="nav-link"
            >
              <span className="relative z-10">{label}</span>
              {hoveredIndex === index && (
                <span
                  className="splash"
                  style={{
                    top: hoverXY.y - 64,
                    left: hoverXY.x - 64,
                  }}
                />
              )}
              <span className="wave-underline" />
            </NavLink>
          ))}
        </nav>
      )}

      {!isMobile && (
        <div className="flex items-center gap-2 z-10">
          {["EN", "MK"].map((lang, i) => (
            <button
              key={lang}
              className="lang-button"
              onMouseMove={(e) => handleMouseMove(e, i + 100)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span className="relative z-10">{lang}</span>
              {hoveredIndex === i + 100 && (
                <span
                  className="splash"
                  style={{
                    top: hoverXY.y - 64,
                    left: hoverXY.x - 64,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: "24px", color: "white" }} />}
          onClick={() => setMenuOpen(true)}
          className="z-10"
        />
      )}

      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen backdrop-blur-md text-white flex flex-col items-center justify-center z-50"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-col items-center gap-6"
            >
              {navLinks.map(({ to, label }) => (
                <motion.div
                  key={to}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <NavLink
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl py-4"
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex gap-6"
              >
                {["EN", "MK"].map((lang) => (
                  <button key={lang} className="text-lg">
                    {lang}
                  </button>
                ))}
              </motion.div>
            </motion.div>

            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-6 text-white text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
