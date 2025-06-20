/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef } from "react";
import { Row, Col, Card, Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive"; // install if not already
import "../styles/CoachPage.css";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Coaches = () => {
  const { t } = useTranslation();
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const coachesData = t("coaches.data", { returnObjects: true });

  const handleOpenModal = (coach) => {
    setSelectedCoach(coach);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCoach(null);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <Row justify="center" className="py-30">
        <Col span={20} className="coaches-section text-center">
          <motion.h1
            className="coaches-title montserrat-700"
            variants={itemVariants}
          >
            {t("coaches.title")}
          </motion.h1>
          <motion.span
            className="coaches-text montserrat-300"
            variants={itemVariants}
          >
            {t("coaches.intro")}
          </motion.span>

          <Row gutter={[24, 24]} justify="center" className="mt-10">
            {coachesData.map((coach) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "0px 0px -50% 0px" });

              return (
                <Col
                  key={coach.id}
                  xs={24}
                  sm={12}
                  md={8}
                  lg={8}
                  className="flex justify-center"
                >
                  <motion.div
                    ref={ref}
                    variants={itemVariants}
                    initial="hidden"
                    animate={
                      isMobile ? (inView ? "visible" : "hidden") : "visible"
                    }
                  >
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={coach.name}
                          src={coach.image}
                          className="coach-card-img"
                        />
                      }
                      className="coach-card"
                    >
                      <h3 className="coach-name montserrat-600">
                        {coach.name}
                      </h3>
                      <p className="coach-about montserrat-300">
                        {coach.about}
                      </p>
                      <Button
                        className="coach-button"
                        onClick={() => handleOpenModal(coach)}
                      >
                        {t("coaches.readMore")}
                      </Button>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Col>

        <Modal
          open={isModalOpen}
          onCancel={handleCloseModal}
          footer={null}
          centered
          className="coach-modal"
        >
          {selectedCoach && (
            <motion.div
              className="modal-content"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <img
                src={selectedCoach.image}
                alt={selectedCoach.name}
                className="modal-img"
              />
              <h2 className="modal-name montserrat-600">
                {selectedCoach.name}
              </h2>
              <p className="modal-about montserrat-300">
                {selectedCoach.about}
              </p>
            </motion.div>
          )}
        </Modal>
      </Row>
    </motion.div>
  );
};

export default Coaches;
