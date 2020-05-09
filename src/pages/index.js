import React from "react";
import { Link } from "gatsby";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";

import "bootstrap/dist/css/bootstrap.min.css";
import NewsContainer from "../containers/newscontainer";

const IndexPage = () => (
  <Container>
    <Jumbotron>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <p>Hello {`${process.env.GATSBY_WELCOME_MESSAGE}`} </p>
      </div>
    </Jumbotron>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <NewsContainer />
  </Container>
);

export default IndexPage;
