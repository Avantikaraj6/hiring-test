import React from 'react'
import instaimage from "./images/basil_instagram-solid.png";
import youimage from "./images/uil_youtube.png";
import fbimage from "./images/mdi_facebook.png";
import twitterimage from "./images/uil_twitter.png";
import {Container , Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footerimg">
        <Container className="text-center">
        <h4 >We have what you’re looking for</h4>
        <Row>
        <Col sm={3}></Col>
        <Col>
        <p className="text-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type a
        </p>
        </Col>
        <Col sm={3}></Col>
        </Row>
        <button className="Sign-up text-white  get-started">Get Started Now</button>
        <hr ></hr>
        </Container>
        <Container>
        <Row className="d-flex text-white right-text">
            <p ><span className="all-text">All Right Reserved @Copyright 2023</span>
            <span className="terms-text1">Terms of Service</span>
            <span className="terms-text">Privacy Policy</span>
            <span className="terms-text">Product</span>
            <span className="image-icons">
                <a href=""  ><img src={fbimage} /></a>
                <a href=""  ><img src={youimage} /></a>
                <a href=""  ><img src={instaimage} /></a>
                <a href=""  ><img src={twitterimage} /></a>
            </span>
            </p>
        </Row>
        </Container>
    </div>
  )
}

export default Footer