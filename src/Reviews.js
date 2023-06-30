import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Records from "./data/data.json";
import { Col, Row, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import productimage from "./images/Lolla1.png";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const images = [];

const Reviews = ({ rating }) => {
  return (
    <>
      <Container className="cust-review">
        <Col sm={5}>
        <h4>Review from customers</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
        </Col>
        <Col></Col>
      </Container>
      <div className="footer">
        {/* <h1 className="typed skill-text">Skills</h1> */}
        <Carousel
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          showDots={true}
          swipeable={true}
          draggable={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {Records.map((product) => {
            return (
              <Col xs={12} md={8} key={product.id} className="reviews mt-5 mb-5">
                <div className="imagepr">
                  <Col>
                    <img src={productimage} className="img-fluid product-image" />
                  </Col>
                  <Col className="lolla-text">
                    <span className="lolla">Lolla Smith</span>
                    <p>Microsoft</p>
                    <span className="checkoutProduct_rating ">
                      <p> &#11088;</p>
                      <p> &#11088;</p>
                      <p> &#11088;</p>
                      <p> &#11088;</p>
                      <p> &#11088;</p>
                    </span>
                  </Col>
                </div>
                <h3>{product.title}</h3>
                <p className="text-black product-cont">{product.content}</p>
              </Col>
            );
          })}
        </Carousel>
        
      </div>
    </>
  );
};

export default Reviews;
