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
      <h1 className="text-center">Newsfeed</h1>
      <p>
        Welcome to this site! The field below will initiate a search and pull
        back articles from various news sources matching your input.{" "}
      </p>
      <p>
        This web page is built using Gatsbyjs framework, Redux for state
        management and bootsrap for styling.
      </p>
      <p>FYI, I love {`${process.env.GATSBY_WELCOME_MESSAGE}`} </p>
    </Jumbotron>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <NewsContainer />
  </Container>
);

export default IndexPage;
