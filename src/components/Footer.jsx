/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";
import LanguageSwitcher from "../components/LanguageSwithcer";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.footer
      className="footer-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-inner">
        <Row justify="center" gutter={[24, 24]}>
          {/* Contact Info */}
          <Col xs={24} sm={12} md={6} className="footer-content">
            <h3 className="footer-title">{t("footer.contactTitle")}</h3>
            <p>Email: aquaproswim@gmail.com</p>
            <p>Phone: 071 248 750</p>
            <p>{t("footer.address")}</p>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6} className="footer-content">
            <h3 className="footer-title">{t("footer.quickLinksTitle")}</h3>
            <ul className="footer-links">
              <li>
                <Link to="/programs">{t("footer.links.programs")}</Link>
              </li>
              <li>
                <Link to="/team">{t("footer.links.coaches")}</Link>
              </li>
              <li>
                <Link to="/faq">{t("footer.links.pp")}</Link>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfdxA7-fPEZUGFV9oQB9TaEX_Xtwsp0ED8NessTaU1I9FGXQw/viewform"
                  target="_blank"
                >
                  {t("footer.links.contact")}
                </a>
              </li>
            </ul>
          </Col>

          {/* Newsletter Signup */}
          <Col xs={24} sm={12} md={6} className="footer-content">
            <h3 className="footer-title">{t("footer.newsletterTitle")}</h3>
            <p>{t("footer.newsletterDesc")}</p>
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="footer-input"
            />
            <button className="footer-btn montserrat-300">
              {t("footer.subscribe")}
            </button>
          </Col>

          {/* Social & Language */}
          <Col xs={24} sm={12} md={6} className="footer-content">
            <h3 className="footer-title">{t("footer.followUs")}</h3>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/AquaProSwimming/?ref=_xav_ig_profile_page_web_0515#"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/aquaproswimming/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@aquaproswimmingacademy5793"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </div>
            <div className="language-switcher">
              <LanguageSwitcher />
            </div>
          </Col>
        </Row>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Aqua Pro Swim Academy.{" "}
          {t("footer.rights")}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
