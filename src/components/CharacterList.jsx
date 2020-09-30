import React, { useState } from "react";
import { Card, Button, Row, Col, Alert } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Alert from "react-bootstrap/Alert";
import { Link, Router } from "react-router-dom";
import "./main.css";
const CharacterList = ({
  //props
  characterDetails,
  //functions
  handleApiCall,
  singleCharacterApiCall,
}) => {
  const [searchCharacter, setSearchCharacter] = useState("");
  const handleChange = (e) => {
    setSearchCharacter(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleApiCall(searchCharacter);
    setSearchCharacter("");
  };

  console.log("Search charactetr is", searchCharacter);

  return (
    <>
      <p style={{ textAlign: "center" }}>
        Only characters,episodes,are searched ,check breaking bad api for
        searching data otherwise it show error
      </p>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            placeholder="Search the Character"
            value={searchCharacter}
            onChange={handleChange}
          />
        </InputGroup>
      </form>
      <Row>
        {characterDetails.length === 0 ? (
          <div className="position-loader">
            <img src={process.env.PUBLIC_URL + "/loader.gif"} alt="loader" />;
          </div>
        ) : null}

        {Array.isArray(characterDetails) ? (
          <>
            {characterDetails.map((item) => {
              return (
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  key={item.char_id}
                  className="listing-card"
                >
                  <Card style={{ marginTop: "20px" }}>
                    <Card.Img variant="top" src={item.img} alt={item.name} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary" className="btn-white">
                        <Link
                          to="/single-character"
                          onClick={() => {
                            singleCharacterApiCall(item.char_id);
                          }}
                        >
                          Click for detail view
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </>
        ) : (
          <Alert
            variant="danger"
            style={{
              display: "block",
              margin: "0px 15px",
              width: "100%",
              paddingBottom: "0px",
            }}
          >
            <p>Invalid Arguments passed</p>
          </Alert>
        )}
      </Row>
    </>
  );
};
export default CharacterList;
