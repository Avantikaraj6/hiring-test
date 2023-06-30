import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Wreview = ({id, text, title, videotext, price}) => {
  return (
    <div><Container className="martin">
    <Row className="product">
    <Col className="dummy">
    <h4 className="mt-3">{title}</h4>
    <p className="mt-3">{text}</p>
    <h5 className="mt-3"><span className="price">$ {price}</span><span>/month</span></h5>
    <ul className="mt-3">
            <li>{videotext}</li>
            <li>{videotext}</li>
            <li>{videotext}</li>
        </ul>
        <button className="Sign-1 mt-3 mb-3">Start Free Trial</button>
  </Col>
</Row>
</Container></div>
  )
}

export default Wreview