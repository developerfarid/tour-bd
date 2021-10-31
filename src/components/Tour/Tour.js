import { faStar as Star } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useHistory, useLocation, useParams } from 'react-router';
import useData from '../Hooks/useData';
import Swal from 'sweetalert2'
const full = <FontAwesomeIcon icon={faStar} />
const ementy = <FontAwesomeIcon icon={Star} />
const Tour = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const { user } = useData()
  const history=  useHistory()

    const { register, handleSubmit,reset, errors } = useForm(); // initialize the hook
    useEffect(() => {
        fetch(`http://localhost:5000/allProduct/${id}`).then(res => res.json()).then(dataProduct => setProduct(dataProduct))
    })
   
    const onSubmit = (data) => {
        console.log(data);
        data.key = id
        data.title = product.title
        console.log(id);
        const success = () => {
            Swal.fire(
                'Congratulations ',
                'You have successfully Add ',
                'success'
              )
        }
        data.status= "Pending"
        axios.post("http://localhost:5000/booking", data)
            .then(response => {
                if (response.data.insertedId) {
                    success()
                    reset()
                    history.push("/home")

                }
            })
    };
    return (
        <Container>
            <Row>
                <Col>
                    <div className="product-information mt-5">
                        <img className="w-100 img-fluid" src={product.url} alt="" />
                        <Row  className="mt-5" xs={1} md={2}>
                            <Col>
                                <h3>{product?.title}  <span>{product.price}/ person</span></h3>
                                <p><Rating emptySymbol={ementy} fullSymbol={full} initialRating={product?.rating} readonly stop="5" /> ({product.review} Person)</p>
                                <h3>Package Overview </h3>
                                <p>{product?.description}</p>
                                <p>Destination: {product.destination}</p>
                                <p>Departure: {product.departure}</p>
                            </Col>
                            <Col>
                                <div className="form">
                                    <h1>Book This Tour</h1>
                                    <p>Arrange your trip in advance - book this tour now</p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input value={user?.displayName} readOnly {...register("name")} />
                                        <input className="my-3" value={user?.email} readOnly {...register("email")} />
                                        <input type="number" placeholder="Phone Number" {...register("number")} />
                                        <input className="my-3" placeholder="Address" {...register("address")} />
                                        <input type="date"{...register("date")} />
                                        <input className="my-3" type="submit" value="Book Now" />
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Tour;