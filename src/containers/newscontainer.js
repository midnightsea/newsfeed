import React from "react";

import BlockList from "../components/blocklist";
import SearchBox from "../components/searchbox";

class NewsContainer extends React.Component {
  render() {
    return (
      <div>
        <SearchBox />
        <BlockList />
      </div>
    );
  }
}
export default NewsContainer;
