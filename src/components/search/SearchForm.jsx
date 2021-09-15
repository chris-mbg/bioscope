import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = ({ onFormSubmit, initSearchInput }) => {
  const [searchInput, setSearchInput] = useState(initSearchInput);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchInput);
  };

  return (
    <Form className="text-center" onSubmit={handleFormSubmit}>
      <Form.Group
        className="mb-3"
        controlId="searchInput"
        className="mx-auto w-75"
      >
        <Form.Label></Form.Label>
        <Form.Control
          type="text"
          placeholder="Search the movie collection..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Form.Group>
      <Button variant="light" type="submit" className="mt-4">
        Go find!
      </Button>
    </Form>
  );
};

export default SearchForm;
