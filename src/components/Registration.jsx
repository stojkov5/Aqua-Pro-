/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import "../styles/Registration.css";

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

const pricingTiers = [
  {
    title: "Monthly Plan",
    price: "€60 / month",
    details: "Includes 2 sessions per week.",
  },
  {
    title: "Private Lessons",
    price: "€35 / session",
    details: "One-on-one coaching, flexible scheduling.",
  },
  {
    title: "Family Package",
    price: "€160 / month",
    details: "Covers up to 3 family members, 2 sessions/week each.",
  },
];

const Registration = () => {
  return (
    <motion.div
      className="registration-section my-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <Row justify="center">
        <Col
          span={20}
          className="text-center registration-container p-8 rounded-2xl"
        >
          {/* Title */}
          <motion.h2
            className="registration-title montserrat-700 mb-4"
            variants={itemVariants}
          >
            Get Started Today
          </motion.h2>

          {/* Steps */}
          <motion.ol
            className="registration-steps montserrat-300 mb-10 text-gray-200 text-left mx-auto max-w-2xl list-decimal pl-5"
            variants={itemVariants}
          >
            <li>Choose your program</li>
            <li>Book a free trial</li>
            <li>Join the Aqua Pro family</li>
          </motion.ol>

          {/* Pricing Cards */}
          <Row gutter={[16, 16]} justify="center">
            {pricingTiers.map((tier, idx) => (
              <Col key={idx} xs={24} sm={12} md={8}>
                <motion.div className="pricing-card" variants={itemVariants}>
                  <h3 className="text-xl font-semibold mb-2">{tier.title}</h3>
                  <p className="text-lg font-bold mb-1">{tier.price}</p>
                  <p className="text-sm text-gray-100">{tier.details}</p>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* CTA Button */}
          <motion.div
            className="mt-8 registration-button-container"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="registration-btn montserrat-300"
            >
              Register Now
            </motion.button>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Registration;
