/* eslint-disable no-unused-vars */
import "../styles/Home.css";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AboutSection from "../components/AboutSection";
import OurPrograms from "../components/OurPrograms";
import WhyChoose from "../components/WhyChoose";
import Coach from "../components/Coach";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";
import Registration from "../components/Registration";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row className="landing overflow-hidden" justify="center">
        <Col span={20}>
          <Row justify="center" className="relative z-10">
            <Col className="landing-text text-center" span={20}>
              <motion.h1
                className="landing-title montserrat-700"
                initial="hidden"
                animate="visible"
                custom={0}
                variants={textVariants}
              >
                {t("home.title")}
              </motion.h1>

              <motion.h3
                className="landing-subtitle montserrat-300"
                initial="hidden"
                animate="visible"
                custom={1}
                variants={textVariants}
              >
                {t("home.subtitle")}
              </motion.h3>

              <motion.div
                className="button-container"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={textVariants}
              >
                <motion.button
                  className="landing-btn montserrat-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 12px rgba(255,255,255,0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("home.bookLesson")}
                </motion.button>

                <motion.button
                  className="landing-btn montserrat-300 "
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 12px rgba(255,255,255,0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("home.learnMore")}
                </motion.button>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="bg-black h-2"></div>
      <AboutSection />
      <OurPrograms />
      <WhyChoose />
      <Coach />
      <div className="bg-black h-2"></div>
      <Testimonials />
      <div className="bg-black h-2"></div>
      <Location />
      <Registration />
    </>
  );
};

export default Home;
