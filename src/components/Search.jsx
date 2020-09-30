import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
const Search = (props) => {
  const [searchCharacter, setSearchCharacter] = useState("");
  const handleChange = (e) => {
    setSearchCharacter(e.target.value);
  };
  const handleApiCall = (e) => {
    e.preventDefault();
    props.handleApiCall(searchCharacter);
    setSearchCharacter("");
  };

  console.log("Search charactetr is", searchCharacter);
  return (
    <>
      <form onSubmit={handleApiCall}>
        <InputGroup>
          <FormControl
            placeholder="Search the Character"
            value={searchCharacter}
            onChange={handleChange}
            onSubmit={handleApiCall}
          />
        </InputGroup>
      </form>
    </>
  );
};
export default Search;
