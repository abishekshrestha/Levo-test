import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import CardComponent from './Card';
import Data from './data';

const CardSection = () => {
  const [readMore, setReadMore] = useState(false);

  const handleShowMoreButton = () => {
    setReadMore(!readMore);
  };

  return (
    <>
      <Row className={'d-flex align-items-stretch'}>
        {(readMore ? Data : Data.slice(0, 3)).map((data, i) => {

          const {
            bgColor,
            date,
            title,
            buttonName,
            children
          } = data;

          return (
            <Col xs={12} md={4} className='mb-4' key={i}>
              <CardComponent
                bgColor={bgColor}
                date={date}
                title={title}
                buttonName={buttonName}
              >
                {children}
              </CardComponent>
            </Col>
          )
        })}
      </Row>

      <Row>
        <Col>
          <div className='text-center'>
            <Button
              variant='outline-success'
              onClick={handleShowMoreButton}
              className='text-uppercase'
            >
              {readMore ? 'Read less' : 'Read more'}
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CardSection;
