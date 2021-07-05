import { graphql } from "gatsby";
import React from "react";
import Navigation from "../components/navigation";
// import Img from 'gatsby-image';
const styles = require("../styles/project-details.module.css");
function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, date } = data.markdownRemark.frontmatter;

  return (
    <Navigation>
      <div className={styles.details}>
        <div className={styles.flexible}>
          <div className={styles?.feature}>{/* <Img fluid={} /> */}</div>
          <div className={styles.col}>
            <h2>{title}</h2>
            <h3>📅 {date.split('-').reverse().join('-')}</h3>
          </div>
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Navigation>
  );
}

export default ProjectDetails;

export const query = graphql`
  query MyProject($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
