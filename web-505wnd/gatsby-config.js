if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "505 Wine and Dine",
  },
  plugins: [
    
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: "dde0bwlg",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
  ],
};
