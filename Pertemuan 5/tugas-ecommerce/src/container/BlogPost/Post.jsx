import React from "react";
import { Card, Button } from 'react-bootstrap';

const Post = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                
                <Card style={{ width: '18rem' }}>

                    <img variant="top" src={props.img} />
                    <Card.Body>

                        <Card.Title>{props.harga}</Card.Title>
                        <Card.Title>{props.nama}</Card.Title>
                        <Card.Title>{props.merek}</Card.Title>

                        <Button variant="primary">Checkout</Button>
                    </Card.Body>

                </Card>
            </div>
        </nav>
    )
}

export default Post;