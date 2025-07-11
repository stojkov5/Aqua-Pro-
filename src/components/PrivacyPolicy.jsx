import React from "react";
import { Row, Col } from "antd";
import "../styles/PrivacyPolicy.css";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-wrapper py-30">
      <div className="privacy-inner">
        <h1 className="privacy-title">{t("privacy.title")}</h1>
        <p>
          <strong>{t("privacy.intro.organization")}</strong> {t("privacy.intro.text")}{" "}
          <a
            href="https://www.aquaproswim.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aquaproswim.com
          </a>
          . {t("privacy.intro.note")}{" "}
          <a href="mailto:aquaproswim@gmail.com">aquaproswim@gmail.com</a>.
        </p>

        <h2>{t("privacy.section1.title")}</h2>
        <p>{t("privacy.section1.text")}</p>

        <h2>{t("privacy.section2.title")}</h2>
        <p>{t("privacy.section2.text")}</p>

        <h2>{t("privacy.section3.title")}</h2>
        <p>{t("privacy.section3.text")}</p>

        <h2>{t("privacy.section4.title")}</h2>
        <p>{t("privacy.section4.text")}</p>

        <h2>{t("privacy.section5.title")}</h2>
        <p>{t("privacy.section5.text")}</p>

        <h2>{t("privacy.section6.title")}</h2>
        <ul>
          {t("privacy.section6.list", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>
          {t("privacy.section6.note")}{" "}
          <a href="mailto:aquaproswim@gmail.com">aquaproswim@gmail.com</a>.
        </p>

        <h2>{t("privacy.section7.title")}</h2>
        <p>
          {t("privacy.section7.text")}{" "}
          <a href="mailto:aquaproswim@gmail.com">aquaproswim@gmail.com</a>.
        </p>

        <h2>{t("privacy.section8.title")}</h2>
        <p>
          {t("privacy.section8.text")}{" "}
          <a href="mailto:aquaproswim@gmail.com">aquaproswim@gmail.com</a>.{" "}
          {t("privacy.section8.note")}
        </p>

        <h2>{t("privacy.section9.title")}</h2>
        <ul>
          {t("privacy.section9.list", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{t("privacy.section9.note")}</p>

        <h2>{t("privacy.section10.title")}</h2>
        <p>
          {t("privacy.section10.email")}{" "}
          <a href="mailto:aquaproswim@gmail.com">aquaproswim@gmail.com</a>
          <br />
          {t("privacy.section10.address")}
        </p>

        <h2>{t("privacy.section11.title")}</h2>
        <p>
          {t("privacy.section11.text")}{" "}
          <a
            href="https://www.aquaproswim.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aquaproswim.com
          </a>
          .
        </p>

        <h2>{t("privacy.section12.title")}</h2>
        <p>{t("privacy.section12.text")}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
