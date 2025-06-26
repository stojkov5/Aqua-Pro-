/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/Location.css";
import { Link } from "react-router";
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Location = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="location-section py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Row justify="center">
        <Col span={20} className="location-wrapper text-center">
          {/* Headline */}
          <motion.h1
            className="location-title montserrat-700"
            variants={itemVariants}
          >
            {t("location.title")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="location-subtitle montserrat-300"
            variants={itemVariants}
          >
            {t("location.subtitle")}
          </motion.p>

          {/* Map Embed */}
          <motion.div
            className="location-map-container"
            variants={itemVariants}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2096.2467819128306!2d21.40246110609218!3d42.010133312144674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354145da25f9897%3A0xe52281f5c1e82031!2sSwimming%20center%20Boris%20Trajkovski!5e0!3m2!1sen!2smk!4v1750246992957!5m2!1sen!2smk"
              className="location-map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Buttons */}

          <motion.div
            className="location-button-container"
            variants={itemVariants}
          >
            <Link to="/schedule">
              <motion.button
                className="location-btn montserrat-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 12px rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {t("location.scheduleBtn")}
              </motion.button>
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfdxA7-fPEZUGFV9oQB9TaEX_Xtwsp0ED8NessTaU1I9FGXQw/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="location-btn montserrat-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 12px rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {t("location.bookBtn")}
              </motion.button>
            </a>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Location;
