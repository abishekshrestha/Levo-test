import React from "react";
import { Card, Button } from 'react-bootstrap';

const CardDate = ({ children, className }) => {
  return <div className={`card-date ${className}`}>{children}</div>;
};

const CardComponent = ({ bgColor, date, title, buttonName, children }) => {
  return (
    <Card className={`custom-card ${bgColor}`} text="white">
      <Card.Body className={"d-flex flex-column justify-content-between"}>
        <div className={"mb-5"}>
          <CardDate className="mb-3">{date}</CardDate>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{children}</Card.Text>
        </div>
        <div>
          <Button variant="outline-light">{buttonName}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
