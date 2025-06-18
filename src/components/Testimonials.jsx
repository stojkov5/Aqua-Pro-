/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Carousel, Row, Col } from "antd";
import "../styles/Testimonials.css";

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

const testimonials = [
  "My son went from afraid of the water to swimming laps in weeks!",
  "Professional, friendly, and motivating coaches.",
  "The best swim academy in Skopje – hands down.",
];

const Testimonials = () => {
  return (
    <motion.div
      className="testimonials-section py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
    >
      <Row justify="center">
        <Col span={20} className="testimonials-wrapper text-center rounded-2xl p-8">
          {/* Headline */}
          <motion.h1
            className="testimonials-title montserrat-700"
            variants={itemVariants}
          >
            What Parents and Swimmers Say
          </motion.h1>

          {/* Carousel */}
          <motion.div variants={itemVariants}>
            <Carousel autoplay dots className="testimonial-carousel mt-6">
              {testimonials.map((quote, index) => (
                <div key={index}>
                  <p className="testimonial-quote montserrat-400">{`"${quote}"`}</p>
                </div>
              ))}
            </Carousel>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Testimonials;
