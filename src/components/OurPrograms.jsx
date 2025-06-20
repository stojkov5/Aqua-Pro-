/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import { Link } from "react-router";
import { useTranslation } from "react-i18next"; // ✅ i18n translation
import "../styles/OurPrograms.css";

// Animation variants
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

const OurPrograms = () => {
  const { t } = useTranslation();

  const programs = t("ourPrograms.programs", { returnObjects: true });

  return (
    <motion.div
      className="programs-section my-10 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <Row justify="center">
        <Col span={20} className="text-center programs-wrapper relative p-8">
          {/* Title */}
          <motion.h1
            className="programs-title montserrat-700"
            variants={itemVariants}
          >
            {t("ourPrograms.title")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="programs-subtitle montserrat-300"
            variants={itemVariants}
          >
            {t("ourPrograms.subtitle")}
          </motion.p>

          {/* Cards */}
          <Row gutter={[16, 16]} justify="center" className="mt-2">
            {programs.map((program, index) => (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={12}
                className="flex justify-center"
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full w-full"
                >
                  <h3 className="text-lg font-semibold mb-2 montserrat-600">
                    {program.title}
                  </h3>
                  <p className="text-sm montserrat-300">
                    {program.description}
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* CTA */}
          <motion.div
            className="absolute bottom-2 right-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/team"
              className="meet-team-btn flex items-center gap-2 justify-center"
            >
              <small className="montserrat-300">{t("ourPrograms.cta")}</small>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default OurPrograms;
