module.exports = {
  siteMetadata: {
    title: "Techblog",
    titleTemplate: "%s · Mridul Shukla",
    description:
      "techBlog by mridul shukla,Hi !! I am Mridul Shukla A CS Engineer,and A Curious Person !! I Enjoy playing with new technology !! ",
      url: "https://mridultechblog.co.in/",
      siteUrl: "https://mridultechblog.co.in/",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-breakpoints",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-advanced-sitemap"
  ],
};
