import React, { useState } from "react";
import { connect } from "react-redux";

function SearchBox({ search, dispatch }) {
  const [searchState, setSearchState] = useState("init");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: `INCREMENT`, value: searchState });
    alert(`Submitting Name ${search}`);
  };

  // Declare a new state variable, which we'll call "count"
  return (
    <div className="">
      <p>This is the search state: {searchState}</p>
      <p>This is the search in store: {search.init}</p>
      <form onSubmit={handleSubmit}>
        <label>
          First name
          <input
            type="search"
            value={searchState}
            onChange={(val) => setSearchState((search = val.target.value))}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ search }) => {
  return { search };
};

export default connect(mapStateToProps)(SearchBox);
