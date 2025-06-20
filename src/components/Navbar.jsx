import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next"; // ✅ Import hook
import LanguageSwitcher from "../components/LanguageSwithcer";
import "../styles/Navbar.css";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/team", label: "COACHES" },
  { to: "/programs", label: "PROGRAMS" },
];

export default function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverXY, setHoverXY] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ useTranslation hook
  const dropdownTimeoutRef = useRef(null);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredIndex(index);
    setHoverXY({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLinkClick = (to) => {
    navigate(to);
    setDropdownOpen(false);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <Row justify="center" className="absolute w-full z-50 py-3">
      <Col span={20}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="text-xl font-bold text-white z-10">
            <img className="w-20" src="./Logo.png" alt="Aqua Pro Logo" />
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex gap-6 text-white z-10">
              {navLinks.map(({ to, label }, index) => {
                const isActive = location.pathname === to;
                const isAbout = label === "ABOUT";

                return (
                  <div
                    key={to}
                    className="relative"
                    onMouseEnter={isAbout ? handleDropdownEnter : undefined}
                    onMouseLeave={isAbout ? handleDropdownLeave : undefined}
                  >
                    <button
                      onClick={() => handleLinkClick(to)}
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`nav-link relative ${isActive ? "active" : ""}`}
                    >
                      <span className="relative z-10">{t(label)}</span>
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

                    {isAbout && dropdownOpen && (
                      <div
                        className="dropdown-menu absolute top-full mt-2 left-0"
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <button
                          onClick={() => handleLinkClick("/levels")}
                          onMouseMove={(e) => handleMouseMove(e, 999)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className={`nav-link relative ${
                            location.pathname === "/levels" ? "active" : ""
                          }`}
                        >
                          <span className="relative z-10">{t("LEVELS")}</span>
                          {hoveredIndex === 999 && (
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
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          )}

          {/* Language Switcher or Mobile Menu Icon */}
          <div className="z-10">
            {!isMobile ? (
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
              </div>
            ) : (
              <Button
                type="text"
                icon={<MenuOutlined style={{ fontSize: "24px", color: "white" }} />}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && isMobile && (
          <div className="mobile-menu fixed top-0 left-0 w-full h-screen backdrop-blur-xl text-white flex flex-col items-center justify-center z-50">
            <div className="flex flex-col items-center gap-6">
              {navLinks.map(({ to, label }) => (
                <button
                  key={to}
                  onClick={() => {
                    setMenuOpen(false);
                    handleLinkClick(to);
                  }}
                  className="nav-link text-lg"
                >
                  {t(label)}
                </button>
              ))}

              {/* Levels link under ABOUT for mobile */}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLinkClick("/levels");
                }}
                className="nav-link text-lg"
              >
                {t("LEVELS")}
              </button>

              {/* Language Switcher in mobile */}
              <div className="flex gap-6">
                <LanguageSwitcher />
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-6 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        )}
      </Col>
    </Row>
  );
}
