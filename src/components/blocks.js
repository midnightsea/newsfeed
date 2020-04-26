import React from "react";

const Blocks = ({ name, email, id }) => {
  return (
    <div>
      <img alt="newsBlock" src={``} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Blocks;
