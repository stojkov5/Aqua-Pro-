/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import "../styles/About.css";

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

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="about-section py-30"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Row justify="center">
        <Col span={20} className="about-wrapper text-center">
          <motion.h1
            className="about-title montserrat-700"
            variants={itemVariants}
          >
            {t("about.title")}
          </motion.h1>

          <motion.section className="about-block" variants={itemVariants}>
            <h2 className="about-subtitle montserrat-600">
              {t("about.visionTitle")}
            </h2>
            <p className="about-text montserrat-300">{t("about.visionText")}</p>
          </motion.section>

          <motion.section className="about-block" variants={itemVariants}>
            <h2 className="about-subtitle montserrat-600">
              {t("about.missionTitle")}
            </h2>
            <p className="about-text montserrat-300">{t("about.missionText")}</p>
          </motion.section>

          <motion.section className="about-block" variants={itemVariants}>
            <h2 className="about-subtitle montserrat-600">
              {t("about.goalsTitle")}
            </h2>
            <Row justify="space-between" gutter={[16, 16]} align="middle">
              <Col xs={24} md={8} className="img-col justify-center items-center">
                <div className="about-img-wrapper">
                  <img src="/About/Swim1.webp" alt="" className="about-img" />
                </div>
              </Col>
              <Col xs={24} md={8}>
                <ul className="about-list montserrat-300 text-left mx-auto">
                  {t("about.goalsList", { returnObjects: true }).map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
              </Col>
              <Col xs={24} md={8} className="img-col justify-center items-center">
                <div className="about-img-wrapper">
                  <img src="/About/Swim2.webp" alt="" className="about-img" />
                </div>
              </Col>
            </Row>
          </motion.section>
        </Col>
      </Row>
    </motion.div>
  );
};

export default About;
