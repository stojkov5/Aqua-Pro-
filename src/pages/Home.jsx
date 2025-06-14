import "../styles/Home.css";
import { Row, Col } from "antd";
const Home = () => {
  return (
    <>
      <Row className="landing overflow-hidden" justify="center">
        <Col span={20}>
          <Row justify="center">
            <Col className="landing-text" span={12}>
              <h1 className="landing-title">
                Dive into Excellence. Swim with Confidence.
              </h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
