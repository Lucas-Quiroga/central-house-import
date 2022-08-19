import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Item({ obj }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={obj.photo} />
      <Card.Body>
        <Card.Title>{obj.title}</Card.Title>
        <Card.Text>{obj.price}</Card.Text>
        <Button variant="primary">{obj.id}</Button>
      </Card.Body>
    </Card>
  );
}
