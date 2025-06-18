/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import "../styles/Footer.css";

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
              <li><a href="/programs">Programs</a></li>
              <li><a href="/coaches">Coaches</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact</a></li>
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
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTwitter /></a>
            </div>
            <div className="language-switcher">
              <label htmlFor="lang">Language:</label>
              <select id="lang" name="language">
                <option value="mk">MK</option>
                <option value="en">EN</option>
              </select>
            </div>
          </Col>
        </Row>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aqua Pro Swim Academy. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
