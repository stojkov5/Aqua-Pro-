/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Row, Col } from "antd";
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
  return (
    <motion.div
      className="about-section py-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Row justify="center">
        <Col span={20} className="about-wrapper text-center">
          <motion.h1
            className="about-title montserrat-700"
            variants={itemVariants}
          >
            Recognisable for elite organisation, professional work by the
            coaches, healthy swimmers, and happy parents
          </motion.h1>

          <motion.section className="about-block" variants={itemVariants}>
            <h2 className="about-subtitle montserrat-600">VISION</h2>
            <p className="about-text montserrat-300">
              Swimming club AQUA PRO – ACADEMY Martin Stefanovski, through a
              professional coaching program, to enable every swimmer to
              gradually and in a healthy way develop their swimming skills to
              the limit of their capabilities. To be a club from which top and
              quality swimmers will emerge, representatives who will represent
              the country in major European and world competitions. Let's
              advocate for the introduction of swimming in primary schools as a
              compulsory sport, and the promotion of lifelong swimming as an
              integral part of modern and cultural living.
            </p>
          </motion.section>

          <motion.section className="about-block" variants={itemVariants}>
            <h2 className="about-subtitle montserrat-600">MISSION</h2>
            <p className="about-text montserrat-300">
              Our mission is for every child to develop swimming skills from a
              young age, to raise the quality of sports swimming to the highest
              level, to increase the mass of swimming in Skopje and beyond, and
              to run the club in a modern and high-quality way. Our club should
              be recognised for top organisation, professional work of trainers,
              healthy swimmers and satisfied parents.
            </p>
          </motion.section>

          <motion.section className="about-block" variants={itemVariants}>
            <h2 className="about-subtitle montserrat-600">
              GOALS AND OBJECTIVES
            </h2>
            <Row justify="space-between" gutter={[16, 16]} align="middle">
              <Col xs={24} md={8} className="img-col justify-center items-center">
                <div className="about-img-wrapper">
                  <img
                    src="/About/Swim1.webp"
                    alt=""
                    className="about-img"
                  />
                </div>
              </Col>
              <Col xs={24} md={8}>
                <ul className="about-list montserrat-300 text-left mx-auto">
                  <li>- training of non-swimmers and swimmers;</li>
                  <li>- encouraging physical health;</li>
                  <li>
                    - application of swimming in preventive therapeutic and
                    rehabilitation purposes;
                  </li>
                  <li>- development and availability of swimming aids;</li>
                  <li>- promoting the sport of swimming in R.M.</li>
                </ul>
              </Col>
              <Col xs={24} md={8} className="img-col justify-center items-center">
                <div className="about-img-wrapper">
                  <img
                    src="/About/Swim2.webp"
                    alt=""
                    className="about-img"
                  />
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
