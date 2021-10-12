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
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'vnkupgyb',
        dataset: 'production',
      },
    },
  ],
};
