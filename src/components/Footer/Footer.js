import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import Swal from 'sweetalert2'
import useData from '../Hooks/useData';

const Footer = () => {
   const {unSuccessAlart}= useData()

    const { register, reset, handleSubmit } = useForm();
    const messageDone = () => {
        Swal.fire(
            'Done!',
            'Data Added Successfully',
            'success'
          )
    }
    
    const onSubmit = data => {
        axios.post("http://localhost:5000/newsLetter", data)
            .then(res => {
            if (res.data.insertedId) {
                messageDone()
                reset()
                }
            else {
                unSuccessAlart()
                }
        })
        
    };

   
    return (
        <footer className="bg-black py-5 text-white">
            <Container>
                <Row xs={1} sm={2} md={3}>
                    <Col>
                        <div className="footer-item">
                            <h1>Chil</h1>
                            <p>pustfarid333@gmail.com</p>
                            <p>01629094984</p>
                            <p>Manikgonj Dhaka</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-item">
                            <h3>Our Recent Posts</h3>
                            <ul className="list-unstyled">
                                <li>Visit Thailand, Bali And China</li>
                                <small>September 10, 2021</small>
                                <li>New Year, New Resolutions!</li>
                                <small>September 19, 2021</small>
                                <li>The Sound Of Our Jungle</li>
                                <small>September 27, 2021</small>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-item">
                            <h3>Subscribe to our Newsletter</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input  placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                                <input className="my-3" placeholder="Email" type="email" {...register("email")} />
                                <input className="btn btn-success"  type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;