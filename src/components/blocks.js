import React from "react";

const Blocks = ({ title, url, urlToImage, source, id }) => {
  return (
    <div id={id}>
      <img src={urlToImage} />
      <div>
        <h2>{title}</h2>
        <p>
          <a href={url}>
            <b>{source}</b>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Blocks;
