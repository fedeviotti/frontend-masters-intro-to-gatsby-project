module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.mydomain.tld',
    title: 'Frontend Master Intro to Gatsby',
    description: 'Frontend Master Intro to Gatsby Intro course projects',
    image:
      'https://res.cloudinary.com/fedeviotti/image/upload/v1633452322/sample.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
  ],
};
