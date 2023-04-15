/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://www.sleamy.dev`,
    
  },
  plugins: [
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "G-KSZ3Y5DCV0"
          ],
          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: false,
          },
        },
      },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
