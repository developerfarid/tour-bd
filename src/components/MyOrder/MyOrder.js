import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useData from '../Hooks/useData';

const MyOrder = () => {
    const [order, setOrder] = useState([])
    // const [newData, setNewData] = useState("ok")
    const newok = {
        up:"Approved"
    }

    
    const { user } = useData()
    useEffect(() => {
        fetch(`https://ghoulish-pumpkin-61403.herokuapp.com/booking/${user?.email}`)
            .then(res => res.json())
        .then(data => setOrder(data))
    }, [user?.email])
    console.log(order);
    const handleCancel = (id) => {
        console.log(id);
        fetch(`https://ghoulish-pumpkin-61403.herokuapp.com/booking/${id}`, {
            method:"DELETE"
        })
            .then(ress=> ress.json())
            .then(res => {
                alert("done")
                const re = order.filter(item => item._id !== id)
                setOrder(re);
        })
    }

    return (
        <Container className="py-5">
            <Table responsive="md" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Tour Name</th>
                        <th>Email</th> 
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        order.map((item, i) => <>
                        <tr>
                        <td>{i+1}</td>
                       
                      
                                <td>{item?.name }</td>
                                <td>{item?.title }</td>
                       
                                <td>{item?.email }</td>
                                <td>{item?.number }</td>
                                <td>{item?.address }</td>
                                <td>{item?.status }</td>
                                
                                <td><button onClick={()=> handleCancel(item?._id)}>Cancel</button></td>
                        </tr>
                        </>)
                    }
                    {/* <tr>
                        <td>1</td>
                        
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>3</td>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr> */}
                </tbody>
            </Table>
        </Container>
    );
};

export default MyOrder;