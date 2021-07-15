import * as React from 'react';
import Navigation from "../components/navigation";
const styles = require("../styles/index.module.css");
// Step 2: Define your component
const AboutPage = () => {
  const text={
    textAlign:'center',
    fontSize:'30px',
  }
  const bdy= {
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    width: '83%',
    fontSize: '1.4rem',
    fontFamily: 'BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
    color: '#4a4a4a',
    lineHeight: '1.5',
    fontWeight: 400,
}
  return (
    <Navigation pageTitle="My Blog Posts">
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <p style={text}>Hi there! You can reach out to me in given detail....</p>
      <p style={bdy}>
      📞  Contact: +91 8601426862
        <br/>
        <br/>

      📬  Email: mridulshukla037@gmail.com
      <br/>
      <br/>
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
          </div>
      </p>
    </main>
    </Navigation>
  )
}
// Step 3: Export your component
export default AboutPage