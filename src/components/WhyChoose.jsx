/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import "../styles/WhyChoose.css";
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

// Data
const features = [
  { icon: <CiBookmarkCheck size={36} />, label: "International Standards" },
  {
    icon: <PiChalkboardTeacher size={36} />,
    label: "Certified, Experienced Coaches",
  },
  { icon: <GiProgression size={36} />, label: "Progress Tracking & Feedback" },
  {
    icon: <PiPersonSimpleSwim size={36} />,
    label: "Modern Facilities in Skopje",
  },
  {
    icon: <MdOutlineHealthAndSafety size={36} />,
    label: "Focus on Safety and Enjoyment",
  },
  {
    icon: <MdLanguage size={36} />,
    label: "Multilingual Staff (Macedonian, English, etc.)",
  },
];

const WhyChoose = () => {
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
            What Makes Us Different?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="why-subtitle montserrat-300"
            variants={itemVariants}
          >
            Why Choose Aqua Pro?
          </motion.p>

          {/* Feature cards */}
          <Row gutter={[16, 16]} justify="center">
            {features.map((item, index) => (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={8}
                className="flex justify-center"
              >
                <motion.div variants={itemVariants} className="why-item bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full w-full">
                  <div className="why-icon">{item.icon}</div>
                  <div className="why-label montserrat-500">{item.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </motion.div>
  );
};

export default WhyChoose;
