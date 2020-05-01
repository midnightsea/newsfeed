import React from "react";
import { Link } from "gatsby";

import Layout from "../containers/layout";
import SEO from "../components/seo";

import NewsContainer from "../containers/newscontainer";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <p>Hello {`${process.env.GATSBY_WELCOME_MESSAGE}`} </p>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <NewsContainer />
  </Layout>
);

export default IndexPage;
