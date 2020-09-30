import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Search from "./Search";
import CharacterList from "./CharacterList";
import SingleCharacter from "./SingleCharacter";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const App = () => {
  const [characterDetails, setCharacterDetails] = useState([]);
  const [singleCharacterDetail, setSingleCharacterDetail] = useState([]);
  useEffect(() => {
    handleApiCall("characters");
  }, []);

  const handleApiCall = async (searchCharacter) => {
    console.log("Search charater from handle api function", searchCharacter);

    const response = await axios.get(
      `https://www.breakingbadapi.com/api/${searchCharacter}?limit=20&offset=20`
    );
    setCharacterDetails(response.data);
  };
  const singleCharacterApiCall = async (singleCharacter) => {
    const singleCharacterResponse = await axios.get(
      `https://www.breakingbadapi.com/api/characters/${singleCharacter}`
    );
    setSingleCharacterDetail(singleCharacterResponse.data);
  };

  return (
    <>
      <Container style={{ marginTop: "30px" }}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return (
                  <CharacterList
                    characterDetails={characterDetails}
                    handleApiCall={handleApiCall}
                    singleCharacterApiCall={singleCharacterApiCall}
                  />
                );
              }}
            />
            <Route
              exact
              path="/single-character"
              component={() => {
                return (
                  <SingleCharacter
                    singleCharacterDetail={singleCharacterDetail}
                  />
                );
              }}
            />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
};
export default App;
