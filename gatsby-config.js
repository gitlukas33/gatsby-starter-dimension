module.exports = {
  siteMetadata: {
    title: 'Łukasz Sawicki - Fotografia',
    author: 'Łukasz Sawicki',
    description: 'Fotografia portretowa, okolicznościowa, rodzinna oraz architektury',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
