import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wreview from "./Wreview";

const Body = () => {
  return (
    <>
      <Container>
      
        <Row className="features">
          <Col>
            <Row>
              <Col sm={4} className="col-bor">
                <h4 className="int">Interactive Features</h4>
                <p className="loreum">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </Col>
              <Col sm={1}></Col>
              <Col sm={4} className="col-bor ">
                <h4 className="int">Interactive Features</h4>
                <p className="loreum">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col sm={4} className="col-bor">
                <h4 className="int">Interactive Features</h4>
                <p className="loreum">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </Col>
              <Col sm={1}></Col>
              <Col sm={4} className="col-bor ">
                <h4 className="int">Interactive Features</h4>
                <p className="loreum">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={6} className="course-text">
            <h2 className="head-text">About the Course</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unkno
            </p>
            <button className="Sign-up text-white mt-5">Explore Now</button>
          </Col>
        </Row>
      </Container>
      <Container fluid className="third">
        <div className="text-center martin">
            <Row>
                <Col sm={4}></Col>
                <Col> <h3>Choose your plan</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p></Col>
          <Col sm={4}></Col>
            </Row>
          
        </div>
        <Container className="martin">
        <Row>
            <Col>
       <Wreview
       id="12345"
       title="Basic Plan"
       text="Lorem Ipsum is simply dummy text of the printing and typesetting"
       price="53"
       videotext="Free access to video class"
       />
       </Col>
       <Col sm={1}></Col>
       <Col>
       <Wreview
       id="12345"
       title="Premium Plan"
       text="Lorem Ipsum is simply dummy text of the printing and typesetting"
       price="53"
       videotext="Free access to video class"
       />
       </Col>
       <Col sm={1}></Col>
       <Col>
       <Wreview
       id="12345"
       title="Basic Plan"
       text="Lorem Ipsum is simply dummy text of the printing and typesetting"
       price="53"
       videotext="Free access to video class"
       />
       </Col>
       </Row>
        </Container>
      </Container>
    </>
  );
};

export default Body;
