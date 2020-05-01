import React from "react";

import Blocks from "./blocks";
import { connect } from "react-redux";

function BlockList({ search }) {
  return (
    <div>
      {search.articles == "init"
        ? "Please enter Search"
        : search.articles.map((articles, i) => {
            return (
              <Blocks
                title={articles.title}
                url={articles.url}
                urlToImage={articles.urlToImage}
                source={articles.source.name}
              />
            );
          })}
    </div>
  );
}

// Connect search state from store to SearchBox component
const mapStateToProps = ({ search }) => {
  return { search };
};

export default connect(mapStateToProps)(BlockList);
