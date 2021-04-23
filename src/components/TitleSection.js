import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TitleSection = () => {
  return (
    <Container className={'py-4'}>
      <Row>
        <Col xs={12} md={10} lg={7}>
          <h2 className='title'>Related Articles</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim et cum fugiat iusto numquam amet doloribus, exercitationem omnis quis fugit voluptates esse cumque accusamus, optio consequuntur libero natus quaerat aliquam?
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TitleSection;
