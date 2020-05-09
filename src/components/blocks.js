import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const Blocks = ({ title, url, urlToImage, source, id }) => {
  return (
    <Card>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>source: {source}</Card.Text>
        <Button variant="primary" href={url} target="_blank">
          Visit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Blocks;
