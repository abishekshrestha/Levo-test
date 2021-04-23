import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import CardComponent from "./Card";

const CardSection = () => {
  return (
    <Row className={"d-flex align-items-stretch"}>
      <Col xs={12} md={4} className={"mb-4"}>
        <CardComponent
          bgColor="custom-card-orange"
          date="03/05/2019"
          title="Title name 1"
          buttonName="Read more"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora atque
          aliquam sit eaque mollitia similique temporibus ducimus quibusdam odio
          vero voluptatibus a earum officia velit eos, harum id facere aperiam?
        </CardComponent>
      </Col>
      <Col xs={12} md={4} className={"mb-4"}>
        <Card className="custom-card custom-card-pink" text="white">
          <CardComponent
            bgColor="custom-card-teal"
            date="01/01/2010"
            title="Title name 2"
            buttonName="Read more"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            fugit nesciunt quia quam sunt maxime veniam hic dolorum sapiente
            perferendis?
          </CardComponent>
        </Card>
      </Col>
      <Col xs={12} md={4} className={"mb-4"}>
        <CardComponent
          bgColor="custom-card-pink"
          date="12/12/2021"
          title="Title name 3"
          buttonName="Read more"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          possimus voluptate dolore.
        </CardComponent>
      </Col>
    </Row>
  );
};

export default CardSection;

