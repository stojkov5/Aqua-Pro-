/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import { Link } from "react-router"; // ✅ Corrected router import
import "../styles/OurPrograms.css"; // ✅ New custom CSS

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

// Program data
const programs = [
  {
    title: "Learn to Swim (Ages 3+)",
    description: "Building water confidence through structured play.",
  },
  {
    title: "Stroke Development (Juniors & Teens)",
    description: "Focused technique improvement for young swimmers.",
  },
  {
    title: "Competitive Swim Training",
    description:
      "For athletes aiming for performance and national/international events.",
  },
  {
    title: "Adult Swimming",
    description:
      "Whether learning to swim or refining technique, it’s never too late.",
  },
  {
    title: "Private Lessons",
    description: "One-on-one coaching for rapid progress.",
  },
];

const OurPrograms = () => {
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
            Programs for Every Level
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="programs-subtitle montserrat-300"
            variants={itemVariants}
          >
            Tailored swim lessons for every stage of the journey.
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

          {/* Bottom-Right Arrow */}
          <motion.div
            className="absolute bottom-4 right-4"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="/programs"
              className="flex items-center gap-2 text-white read-more"
            >
              <small className="montserrat-300">View Full Schedule</small>
              <svg
                className="w-6 h-6 "
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
