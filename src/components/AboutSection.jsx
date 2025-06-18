/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import { Link } from "react-router";
import "../styles/Home.css";
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

const AboutSection = () => {
  return (
    <motion.div
      className="about-section my-10 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <Row justify="center">
        <Col span={20} className="text-center about rounded-2xl relative p-8">
          {/* Title */}
          <motion.h1
            className="home-title montserrat-700"
            variants={itemVariants}
          >
            Who We Are
          </motion.h1>

          {/* Paragraph */}
          <motion.div variants={itemVariants}>
            <p className="montserrat-300 mt-4">
              Aqua Pro International Swimming Academy is Skopje's premier swim
              training center, offering world-class instruction in a safe,
              structured, and motivating environment. With internationally
              certified coaches and personalized programs, we help swimmers of
              all ages unlock their full potential – whether it’s their first
              splash or the road to competition.
            </p>
          </motion.div>

          {/* Bottom-Right Animated Arrow */}
          {/* CTA link */}
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
              <small className="montserrat-300">Read More</small>
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

export default AboutSection;
