import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as Star } from '@fortawesome/free-regular-svg-icons'
import Rating from 'react-rating';
import './product.css'
import { Link } from 'react-router-dom';

const full = <FontAwesomeIcon icon={faStar} />
const ementy = <FontAwesomeIcon icon={Star} />

const Product = ({ product }) => {
    const {title, rating, price, url,type,review,description, _id }= product
    return (
        <Col>
            <div className="product">
                <div className="product-img">
                    <img className='img-fluid' src={url} alt="" />
                </div>
                <div className="product-body py-3 px-4">
                    <h2>{title}</h2>
                    <p>{description.slice(0, 100) + "..."}</p>
                    <p className='d-flex justify-content-between'><span>Price: {price}$</span><Rating className="rating" emptySymbol={ementy} fullSymbol={full} initialRating={rating} readonly stop="5" /></p>
                    <p className='d-flex justify-content-between'><span>Review: {review}</span> <span>{type.toUpperCase()}</span></p>
                    <Link to={`/productinfo/${_id}`}><button>More Info</button></Link>
                </div>
            </div>
        </Col>
    );
};

export default Product;