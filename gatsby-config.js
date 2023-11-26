module.exports = {
  siteMetadata: {
    siteUrl: "https://www.navarretelizama.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-15VXRGSWZR", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          anonymize_ip: true
        },
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/assets/icon.png"
      }
    },
  ],
};
