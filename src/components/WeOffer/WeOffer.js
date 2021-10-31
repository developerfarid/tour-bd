import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WeOffer.css'

const WeOffer = () => {
    return (
        <section>
            <div style={{background:`url("https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/what-we-offer-title-1.jpg")`}} className="offer-heading">
                <h3>Amazing tour</h3>
                <h2>What We Offer</h2>
            </div>
            <Container className="my-4">
                <Row xs={1} sm={2} md={3} lg={4}>
                    <Col>
                        <div className=" mt-3 item-offer">
                            <img className='img-fluid' src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1.png" alt="" />
                            <h4>Restaurants</h4>
                            <p>Best Service Provide</p>
                        </div>
                    </Col>
                    <Col>
                        <div className=" mt-3 item-offer">
                            <img className='img-fluid' src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2.png" alt="" />
                            <h4>Sightseeing</h4>
                            <p>Best Service Provide</p>
                        </div>
                    </Col>
                    <Col>
                        <div className=" mt-3 item-offer">
                            <img className='img-fluid' src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3.png" alt="" />
                            <h4>Shops & Boutiques</h4>
                            <p>Best Service Provide</p>
                        </div>
                    </Col>
                    <Col>
                        <div className=" mt-3 item-offer">
                            <img className='img-fluid' src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4.png" alt="" />
                            <h4>Where to Stay</h4>
                            <p>Best Service Provide</p>
                        </div>
                    </Col>
                </Row>
                <div className="heading-choose text-center my-5">
                    <h3>Choose Your</h3>
                    <h2>Destination</h2>
                </div>
                <Row xs={1} md={2} lg={3}>
                    <Col>
                        <div className="choose-img position-relative">
                            <div className="div">
                            <img className="img-fluid" src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-6.jpg" alt="" />
                            </div>
                            <h3>Greece</h3>
                        </div>

                    </Col>
                    <Col>
                        <div className="choose-img position-relative">
                            <div className="div">
                            <img className="img-fluid" src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-4.jpg" alt="" />
                            </div>
                            <h3>Itly</h3>
                        </div>

                    </Col>
                    <Col>
                        <div className="choose-img position-relative">
                            <div className="div">
                            <img className="img-fluid" src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-4.jpg" alt="" />
                            </div>
                            <h3>Netherlands</h3>
                        </div>

                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default WeOffer;