import React from "react";
import "./main.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
const SingleCharacter = ({ singleCharacterDetail }) => {
  return (
    <>
      <Row>
        {singleCharacterDetail.length > 0 ? (
          <>
            <Col xs={12} sm={12} md={6} lg={6}>
              <h3>Single Character detail</h3>
              {singleCharacterDetail.map((singleCharacter, i) => {
                return (
                  <Card
                    className="single-character-card"
                    key={singleCharacter.char_id + i}
                  >
                    <Card.Img variant="top" src={singleCharacter.img} />
                    <Card.Body>
                      <Card.Title>Name:{singleCharacter.name}</Card.Title>
                      <Card.Text>
                        Occupation:{singleCharacter.occupation[1]}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Col>
          </>
        ) : (
          <Redirect to="/" />
        )}
      </Row>
    </>
  );
};
export default SingleCharacter;
