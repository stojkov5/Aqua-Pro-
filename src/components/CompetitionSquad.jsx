/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../styles/CompetitionSquad.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CompetitionSquad = () => {
  const { t } = useTranslation();

  return (
    <Row justify="center" className="py-30">
      <Col span={20}>
        <motion.div
          className="competition-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            className="competition-title"
            variants={fadeInUp}
            custom={0}
          >
            {t("competitionSquad.title")}
          </motion.h1>

          <Row gutter={[32, 32]} align="middle" className="competition-block">
            <Col xs={24} md={12}>
              <motion.h2
                className="competition-subtitle montserrat-600"
                variants={fadeInUp}
                custom={1}
              >
                {t("competitionSquad.leadCoachTitle")}
              </motion.h2>
              <motion.p
                className="competition-text montserrat-300"
                variants={fadeInUp}
                custom={2}
              >
                {t("competitionSquad.leadCoachExperience")}
              </motion.p>
              <motion.p
                className="competition-text"
                variants={fadeInUp}
                custom={3}
              >
                {t("competitionSquad.leadCoachAchievements")}
              </motion.p>
            </Col>
            <Col xs={24} md={12} className="img-col">
              <motion.div
                className="competition-img-wrapper"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <img
                  src="/Coaches/Coci.webp"
                  alt="Coach Sotir Trajkovski"
                  className="competition-img"
                />
              </motion.div>
            </Col>
          </Row>

          <motion.div className="competition-block">
            <motion.h2
              className="competition-subtitle montserrat-600"
              variants={fadeInUp}
              custom={4}
            >
              {t("competitionSquad.pathwayTitle")}
            </motion.h2>
            <motion.p className="competition-text" variants={fadeInUp} custom={5}>
              {t("competitionSquad.pathwayParagraph1")}
            </motion.p>
            <motion.p className="competition-text" variants={fadeInUp} custom={6}>
              {t("competitionSquad.pathwayParagraph2")}
            </motion.p>
            <motion.p className="competition-text" variants={fadeInUp} custom={7}>
              {t("competitionSquad.pathwayParagraph3")}
            </motion.p>
          </motion.div>
        </motion.div>
      </Col>
    </Row>
  );
};

export default CompetitionSquad;
