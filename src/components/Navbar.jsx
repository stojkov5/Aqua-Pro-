/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Row, Col } from "antd";
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
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverXY, setHoverXY] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const navigate = useNavigate();

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredIndex(index);
    setHoverXY({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLinkClick = (to) => {
    setIsTransitioning(true);
    setProgress(0);

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setProgress(count);
      if (count >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          navigate(to);
          setIsTransitioning(false);
        }, 500); // slight pause after 100%
      }
    }, 10); 
  };

  return (
    <Row justify="center" className="absolute w-full z-50 py-3">
      <Col span={20}>
        <div className="flex items-center justify-between w-full">
          {/* Left: Logo */}
          <div className="text-xl font-bold text-white z-10">
            <img className="w-20" src="./Logo.png" alt="Aqua Pro Logo" />
          </div>

          {/* Center: Navigation Links (Desktop only) */}
          {!isMobile && (
            <nav className="flex gap-6 text-white z-10">
              {navLinks.map(({ to, label }, index) => {
                const isActive = location.pathname === to;

                return (
                  <button
                    key={to}
                    onClick={() => handleLinkClick(to)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`nav-link relative ${isActive ? "active" : ""}`}
                  >
                    <span className="relative z-10">{label}</span>
                    {(hoveredIndex === index || isActive) && (
                      <span
                        className="splash"
                        style={{
                          top: hoverXY.y - 64,
                          left: hoverXY.x - 64,
                        }}
                      />
                    )}
                    <span className="wave-underline" />
                  </button>
                );
              })}
            </nav>
          )}

          {/* Right: Language Switcher or Hamburger (based on screen size) */}
          <div className="z-10">
            {!isMobile ? (
              <div className="flex items-center gap-2">
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
            ) : (
              <Button
                type="text"
                icon={
                  <MenuOutlined style={{ fontSize: "24px", color: "white" }} />
                }
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {menuOpen && isMobile && (
            <motion.div
              className="mobile-menu fixed top-0 left-0 w-full h-screen backdrop-blur-md text-white flex flex-col items-center justify-center z-50"
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
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        handleLinkClick(to);
                      }}
                      className="nav-link text-lg"
                    >
                      {label}
                    </button>
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
      </Col>

     {/* Transition Loader */}
<AnimatePresence>
  {isTransitioning && (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[100] bg-blue-300 bg-linear-to-b to-blue-800 bg-opacity-90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[80%] max-w-[500px] text-center space-y-6"
      >
        {/* Logo */}
        <img
          src="./Logo.png"
          alt="Logo"
          className="w-16 h-16 mx-auto animate-bounce"
        />

        {/* Progress Bar */}
        <div className="relative w-full h-10 bg-gray-800 rounded-full overflow-hidden">
          {/* Water fill background */}
          <div
            className="absolute inset-0 water-fill"
            style={{ width: `${progress}%` }}
          >
            {/* Wave SVG overlay */}
            <svg
              className="wave-svg"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 10 Q 25 0, 50 10 T 100 10 V10 H0 Z"
                fill="rgba(255,255,255,0.2)"
              />
            </svg>
          </div>

          {/* Percent text */}
          <div className="relative z-10 text-white text-sm h-full flex items-center justify-center font-semibold">
            {progress}%
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </Row>
  );
}
