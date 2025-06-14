import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { Layout as AntLayout, Row, Col } from "antd";

const { Content } = AntLayout;

const Layout = () => {
  return (
    <AntLayout style={{ background: "transparent", minHeight: "100vh" }}>
      <Row justify="center">
        <Col xs={22} md={20}>
          <Navbar />
        </Col>
      </Row>

      <Content>
        <Row justify="center" style={{ paddingTop: 16, paddingBottom: 32 }}>
          <Col xs={22} md={20}>
            <Outlet />
          </Col>
        </Row>
      </Content>

      <Row justify="center">
        <Col xs={22} md={20}>
          <Footer />
        </Col>
      </Row>
    </AntLayout>
  );
};

export default Layout;
