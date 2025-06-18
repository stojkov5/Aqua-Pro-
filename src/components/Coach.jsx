/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import { Link } from "react-router";
import "../styles/Coach.css";

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

const Coach = () => {
  return (
    <motion.div
      className="coach-section my-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <Row justify="center">
        <Col span={20} className="coach-wrapper text-center rounded-2xl p-8">
          {/* Headline */}
          <motion.h1
            className="coach-title montserrat-700"
            variants={itemVariants}
          >
            Our Team of Professionals
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="coach-subtitle montserrat-300"
            variants={itemVariants}
          >
            Our coaches are certified by international swim bodies and bring
            years of experience teaching swimmers of all ages and abilities.
          </motion.p>

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
              <small className="montserrat-300">Meet the Team</small>
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

export default Coach;
