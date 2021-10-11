import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About this site"
      description="More information about this site."
    >
      <GatsbyImage
        alt={
          'a cocktail set inside an elaborate floral arrangement with dry ice mist curling out and around it'
        }
        image={getImage(data.file)}
      />
      <h1>About This Site</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
