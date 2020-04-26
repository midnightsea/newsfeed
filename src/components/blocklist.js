import React from "react";

import Blocks from "./blocks";

const BlockList = ({ news }) => {
  return (
    <div>
      <Card
        key={news[i].id}
        id={news[i].id}
        name={news[i].name}
        email={news[i].email}
      />
    </div>
  );
};

export default BlockList;
