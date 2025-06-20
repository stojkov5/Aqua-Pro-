/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import "../styles/WhyChoose.css";
import { useTranslation } from "react-i18next";
import { CiBookmarkCheck } from "react-icons/ci";
import { PiChalkboardTeacher, PiPersonSimpleSwim } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { MdOutlineHealthAndSafety, MdLanguage } from "react-icons/md";

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

const WhyChoose = () => {
  const { t } = useTranslation();
  const features = t("whyChoose.features", { returnObjects: true });

  return (
    <motion.div
      className="why-section py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Row justify="center">
        <Col span={20} className="why-wrapper text-center">
          {/* Headline */}
          <motion.h1
            className="why-title montserrat-700"
            variants={itemVariants}
          >
            {t("whyChoose.title")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="why-subtitle montserrat-300"
            variants={itemVariants}
          >
            {t("whyChoose.subtitle")}
          </motion.p>

          {/* Feature cards */}
          <Row gutter={[16, 16]} justify="center">
            {features.map((item, index) => {
              const IconComponent = getIconByKey(item.icon);
              return (
                <Col
                  key={index}
                  xs={24}
                  sm={12}
                  md={8}
                  className="flex justify-center"
                >
                  <motion.div
                    variants={itemVariants}
                    className="why-item bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full w-full"
                  >
                    <div className="why-icon">{IconComponent}</div>
                    <div className="why-label montserrat-500">{item.label}</div>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
};

// Helper to return correct icon based on key
const getIconByKey = (key) => {
  const icons = {
    bookmark: <CiBookmarkCheck size={36} />,
    coach: <PiChalkboardTeacher size={36} />,
    progress: <GiProgression size={36} />,
    facility: <PiPersonSimpleSwim size={36} />,
    safety: <MdOutlineHealthAndSafety size={36} />,
    language: <MdLanguage size={36} />,
  };
  return icons[key] || null;
};

export default WhyChoose;
