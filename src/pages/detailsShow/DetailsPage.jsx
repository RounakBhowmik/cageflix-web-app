import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../../styles/DetailsPage.css'; 

const TwoColumnCard = () => {
  return (
    <Card className="custom-card">
      <Card.Body>
        <Row className="two-column-row">
          <Col md={5} className="left-column">
            <img
              src="https://m.media-amazon.com/images/M/MV5BOGVmNzMwNWYtYmZmNi00ODliLWE2ODgtZGM2ZTM3MjhmOGYwXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg"
              alt="example"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={7} className="right-column">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TwoColumnCard;
