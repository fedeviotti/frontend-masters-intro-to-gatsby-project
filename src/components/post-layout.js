import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export default function PostLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter;

  return (
    <Layout title={title} description={description}>
      {children}
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
