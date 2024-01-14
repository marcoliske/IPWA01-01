import React, { useEffect } from "react";
import { Menu, PageHeader, Row, Col } from "antd";
import { HomeOutlined, SkinOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Register } from "./registerdonation/register";
import { Home } from "./home";
import { Footer } from "./footer";
import { TermsOfService } from "./termsofservice";
import { Privacy } from "./privacy";
import { Imprint } from "./imprint";
import donationPic from "./../assets/donation.jpg";

export const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <Router>
          <PageHeader
            title="Kleider für alle e.V."
            avatar={{
              src: donationPic,
            }}
          >
            <Row className="menu-mobile">
              <Col span={12}>
                {" "}
                <Link to="/"> &#60; Home</Link>
              </Col>
              <Col span={12} className="right-menu-item">
                {" "}
                <Link to="/donation">Kleiderspende &#62;</Link>
              </Col>
            </Row>

            <Menu
              className="menu-desktop"
              mode="horizontal"
              defaultSelectedKeys={["home"]}
            >
              <Menu.Item key="home" icon={<HomeOutlined rev={undefined} />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="donation" icon={<SkinOutlined rev={undefined} />}>
                <Link to="/donation">Kleiderspende</Link>
              </Menu.Item>
            </Menu>
          </PageHeader>

          <div className="content">
            <Switch>
              <Route
                path="/donation"
                component={() => <Register></Register>}
              ></Route>
              <Route
                path="/terms"
                component={() => <TermsOfService></TermsOfService>}
              ></Route>
              <Route
                path="/privacy"
                component={() => <Privacy></Privacy>}
              ></Route>
              <Route
                path="/imprint"
                component={() => <Imprint></Imprint>}
              ></Route>
              <Route path="/" component={() => <Home></Home>}></Route>
            </Switch>
          </div>
          <Footer></Footer>
        </Router>
      </div>
    </>
  );
};
