import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import useData from '../Hooks/useData';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const { products } = useData()
    return (
        <section>
            <Carousel fade>
                <Carousel.Item className="car-effect" >
                    <img
                        className="carousel-img d-block w-100"
                        src={"https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/summertime-background-img-2.jpg"}
                        alt="First slide"
                    />
                    <Carousel.Caption className="car-middle" >
                        <h3 className="title-car">Enjoy Your</h3>
                        <h1 className="title-carousel">Winter Vacations</h1>
                        <p>A period of rest from work or studies taken in winter | Meaning, pronunciation, translations and examples.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="car-effect" >
                    <img
                        className="carousel-img d-block w-100"
                        src={"https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/skiing-parallax-1.jpg"}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="car-middle" >
                        <h3 className="title-car">Lets Go Now</h3>
                        <h1 className="title-carousel">Explore and travel.</h1>
                        <p>Explore our range of over 500 amazing adventure holidays and small group tours, and enjoy unforgettable experiences with our expert local guides.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="car-effect" >
                    <img
                        className="carousel-img d-block w-100"
                        src={"https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/destionations-1-title.jpg"}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="car-middle" >
                        <h3 className="title-car">Come with Us</h3>
                        <h1 className="title-carousel">Relex and Enjoy</h1>
                        <p>As important as it is to have a plan for doing work, it is perhaps more important to have a plan for rest, relaxation, self-care, and sleep. – Akiroq Brost</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <Row xs={1} md={2} lg={3} className="gy-4 mt-5">
                    {
                      products.map(product => <Product key={product._id} product={product}  />)  
                    }
                </Row>

            </Container>

            <div style={{background:"#3abdc1"}}>
                <Container className="my-5 py-5">
                    <Row className="text-center text-white g-3" md={4} sm={2} xs={1}>
                        <Col>
                            <h1>499</h1>
                            <h2>Tourists</h2>
                        </Col>
                        <Col>
                            <h1>399</h1>
                            <h2>Years</h2>
                        </Col>
                        <Col>
                            <h1>299</h1>
                            <h2>Cottages</h2>
                        </Col>
                        <Col>
                            <h1>199</h1>
                            <h2>Restaurants</h2>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <div className="home-title text-center py-4">
                    <h3>Try Now</h3>
                    <h2>Winter Sports</h2>
                </div>
                <Row>
                    <Col>
                    <iframe  width="100%" height="500px" src="https://www.youtube.com/embed/nsgC7rhODZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default Home;