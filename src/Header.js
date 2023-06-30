import { logDOM } from "@testing-library/react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import compimg from "./images/comp-image.png";

const Header = () => {
  return (
    <div className=" text-white  header-bg">
      <Container>
        <Row>
          <Col className="logo">
          
          Logo
          </Col>
          <Col>
          <ul className="side-col">
           
            <li>About</li>
            <li>Pricing</li>
            <li>Review</li>
          </ul>
          </Col>
        </Row>

        <Row className="launch-text">
          <Col lg={5}>
            <h2 className="learn-text">Learn how to launch a successful podcast</h2>
            <p className="loreum-text mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              in ustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="Sign-up text-white mt-5">Sign Up Now</button>
          </Col>
          <Col lg={7}>
            <img src={compimg} className=""/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
