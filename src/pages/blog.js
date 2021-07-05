import * as React from "react";
import Navigation from "../components/navigation";

import { graphql, Link } from "gatsby";
const list = {
  fontSize: "30px",
  margin: " 10px auto",
  display:'flex',
  flexDirection:'column',
  alignItems:'center'
};
const item = {
  margin: "40px auto",
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  marginBottom: 30,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};
const BlogPage = ({ data }) => {
  return (
    <Navigation pageTitle="My Blog Posts">
      <ul style={list}>
        {data.allMarkdownRemark.nodes.map((node) => (
          <li style={item} style={{ ...listItemStyles, color: "#E95800" }} key={node.frontmatter.title}>
            <Link to={".." + node.frontmatter.slug}>
              {node.frontmatter.title}
            </Link>
            <span>
              <a
                // style={linkStyle}
                href={``}
              >
                {/* {link.text} */}
              </a>

              <span style={badgeStyle} aria-label="New Badge">
                NEW!
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        html
        id
      }
    }
  }
`;

export default BlogPage;
