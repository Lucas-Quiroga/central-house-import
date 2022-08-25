import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Item({ obj }) {
  return (
    <Card style={{ width: "18rem" }} className="d-flex">
      <Card.Img variant="top" src={obj.photo} />
      <Card.Body>
        <Card.Title>{obj.title}</Card.Title>
        <Card.Text>{obj.price}</Card.Text>
        <Link to={`/detail/${obj.id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
