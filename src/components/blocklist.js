import React from "react";
import Blocks from "./blocks";
import { connect } from "react-redux";
import CardColumns from "react-bootstrap/CardColumns";
function BlockList({ search }) {
  return (
    <CardColumns>
      {search.articles == "init"
        ? ""
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
    </CardColumns>
  );
}

// Connect search state from store to SearchBox component
const mapStateToProps = ({ search }) => {
  return { search };
};

export default connect(mapStateToProps)(BlockList);
