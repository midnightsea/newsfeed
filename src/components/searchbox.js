import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Dispatch is auto passed but search was defined in mapStateToProps
function SearchBox({ search, dispatch }) {
  // Use state hook to set searchState
  const [searchState, setSearchState] = useState("init");

  // Handle submit with api get request and setting redux state
  // Set await and sync for timing
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let result = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchState}&apiKey=${process.env.API_KEY}`
    );
    let output = await dispatch({ type: `SET`, value: result.data });
    alert(`Submitting Name ${output} ${search}`);
  };

  // return form for search input
  return (
    <div className="">
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          Please enter your search here:
          <Form.Control
            type="search"
            value={searchState}
            onChange={(val) => setSearchState((search = val.target.value))}
          />
        </Form.Label>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

// Connect search state from store to SearchBox component
const mapStateToProps = ({ search }) => {
  return { search };
};

export default connect(mapStateToProps)(SearchBox);

// References
// https://www.valentinog.com/blog/await-react/
// https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
//
//
