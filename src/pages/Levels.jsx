/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Row, Col, Modal } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../styles/Levels.css";

const Levels = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activeLevel, setActiveLevel] = useState(null);

  const levels = t("levels.data", { returnObjects: true });

  const showModal = (level) => {
    setActiveLevel(level);
    setOpen(true);
  };

  return (
    <Row justify={"center"} className="py-30">
      <Col span={20}>
        <motion.div
          className="levels-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="levels-title">{t("levels.title")}</h2>
          <Row gutter={[24, 24]} justify="center">
            {levels.map((level) => (
              <Col xs={24} sm={12} md={8} key={level.id}>
                <div
                  onClick={() => showModal(level)}
                  className="level-card cursor-pointer"
                >
                  <div className="flex justify-center">
                    <img
                      src={level.logo}
                      alt={`${level.name} лого`}
                      className="level-logo"
                    />
                  </div>
                  <h3 className="level-name">{level.name}</h3>
                  <h3 className="level-focus">{level.focus}</h3>
                  <p className="level-age">{level.age}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Modal
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
            className="levels-modal"
          >
            {activeLevel && (
              <div>
                <h3 className="modal-title">{activeLevel.name}</h3>
                <p className="modal-focus">
                  {t("levels.modal.focus")}: {activeLevel.focus}
                </p>
                <p className="modal-text">{activeLevel.description}</p>
                <p className="modal-text">
                  <strong>{t("levels.modal.goals")}:</strong>{" "}
                  {activeLevel.goals}
                </p>
              </div>
            )}
          </Modal>
        </motion.div>
      </Col>
    </Row>
  );
};

export default Levels;
