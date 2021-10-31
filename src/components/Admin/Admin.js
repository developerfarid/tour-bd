import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProduct from './AddProduct';
import AllEmail from './AllEmail';
import AllProduct from './AllProduct';

const Admin = () => {
    const [control, setControl] = useState("addProduct")
    
    return (
        <section>
            <Container className=" p-5">
                <Row>
                    <Col  md={3} lg={2}>
                        <div className="admin-item ">
                            <ul>
                                <li className="btn text-white fw-bold w-100 btn-info" onClick={()=> setControl("addProduct")}>Add Product</li>
                                <li className="btn my-4 text-white fw-bold w-100 btn-info" onClick={()=> setControl("allProducts")}>All Product </li>
                                <li className="btn w-100 text-white fw-bold btn-info"  onClick={()=> setControl("something")}>News Letter Email</li>
                            </ul>
                        </div>
                    </Col>
                    <Col  md={9} lg={8}>
                        {control === "addProduct" && <AddProduct />}
                        {control === "allProducts" && <AllProduct />}
                        {control === "something" && <AllEmail />}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Admin;