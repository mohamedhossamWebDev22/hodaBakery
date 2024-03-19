import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MenuCard(props) {
  return (
    <>
      <Card className="w-100 cardF">
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title className="text-dark">{props.title}</Card.Title>
          <Card.Text className="text-dark">{props.price}</Card.Text>
          <Button onClick={() => {alert("الموقع مش رسمي يا غالي")}} variant="warning">أضف للسلة</Button>
        </Card.Body>
      </Card>
    </>
  );
}
