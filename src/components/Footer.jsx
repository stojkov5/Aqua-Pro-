/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css";
import LanguageSwitcher from "../components/LanguageSwithcer";
import { Link } from "react-router";
const Footer = () => {
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
            <h3 className="footer-title">Contact Us</h3>
            <p>Email: info@aquapro.mk</p>
            <p>Phone: +389 70 123 456</p>
            <p>Skopje Sports Center</p>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6} className="footer-content">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/team">Coaches</Link>
              </li>
              <li>
                <a href="/PrivacyPolicy.pdf" target="_blank">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Newsletter Signup */}
          <Col xs={24} sm={12} md={6} className="footer-content">
            <h3 className="footer-title">Newsletter</h3>
            <p>Subscribe for updates and offers</p>
            <input
              type="email"
              placeholder="Your email"
              className="footer-input"
            />
            <button className="footer-btn montserrat-300">Subscribe</button>
          </Col>

          {/* Social & Language */}
          <Col xs={24} sm={12} md={6} className="footer-content">
            <h3 className="footer-title">Follow Us</h3>
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
          &copy; {new Date().getFullYear()} Aqua Pro Swim Academy. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
