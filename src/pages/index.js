import * as React from "react";
import Navigation from "../components/navigation";
import cap from "../images/capture.webp";
import { StaticImage } from "gatsby-plugin-image";
import resume from "../assets/resume.pdf";
import { useMediaQuery } from "react-responsive";
const styles = require("../styles/index.module.css");
// styles

// data

// markup
const IndexPage = () => {
  return (
    <Navigation>
      <main className={styles.pageStyles}>
        <title>Tech Blog</title>
        <div className={styles.row}>
          <div>
            <img className={styles.img} src={cap} />
          </div>
          <h1 className={styles.headingStyles}>
            Hi
            <img
              className={styles.img2}
              src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            />{" "}
            !! I am Mridul Shukla
            <br />
            <p className={styles.subheading}>
              {" "}
              A CS Engineer,and A Curious Person !!{" "}
            </p>
            <span className={styles.headingAccentStyles}>
              — I Enjoy playing with new technology !!{" "}
            </span>
            <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
          </h1>
        </div>
        <div>
          <h1>What I am Upto?</h1>
          <ul>
            <li className={styles.item}>
              Looking to dig into some cool stuff and post some article about
              them
            </li>
            <li className={styles.item}>
              Will Include some article about Coding-development,data analysis
              and other stuff.
            </li>
            {/* <li style={item}>
              

          </li> */}
          </ul>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.social}>
          <a href="https://www.facebook.com/mridul.shukla.524/">
            <img
              className={styles.cursor}
              src="https://img.icons8.com/office/48/000000/facebook-new.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/mridul-shukla-899123174/">
            <img
              className={styles.cursor}
              src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png"
            />
          </a>
          <a href="https://github.com/mridul037">
            <img
              className={styles.cursor}
              src="https://img.icons8.com/fluent/48/000000/github.png"
            />
          </a>
          <a href={resume} download>
            <img
              className={styles.cursor}
              src="https://img.icons8.com/office/48/000000/pdf.png"
            />
          </a>
        </div>
      </main>
    </Navigation>
  );
};

export default IndexPage;
