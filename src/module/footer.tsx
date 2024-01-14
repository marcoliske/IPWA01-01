import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { Link, useLocation } from "react-router-dom";

const ScrollTo = (): JSX.Element => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <></>;
};

export const Footer = (): JSX.Element => (
  <>
    <ScrollTo />
    <div className="footer">
      <Row justify="center">
        <Col xs={24} md={4}>
          <Link to="/privacy">Datenschutzbestimmungen</Link>
        </Col>
        <Col xs={24} md={4}>
          <Link to="/terms">Unsere AGB</Link>
        </Col>
        <Col xs={24} md={4}>
          <Link to="/imprint">Impressum</Link>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 14 }}>
        <span>&#169; 2023 Kleider für alle e.V.</span>
      </Row>
    </div>
  </>
);
