import * as React from "react"
import Navigation from "../components/navigation"
import capture from "../images/capture.png" 
import { StaticImage } from "gatsby-plugin-image"
import resume from '../assets/resume.pdf'
import { useMediaQuery } from 'react-responsive'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",

}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 440,
  fontSize:50,
  color:'#363636'
}
const subheading={
  color:"#ff007f",
  fontSize:'20px'
}
const headingAccentStyles = {
  color: "#663399",
  fontSize:'30px',
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 30,
  verticalAlign: "10%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 18,
  marginTop: 10,
  marginBottom: 0,
  
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
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
}
const img2= {
  width:"36px",
}
const row={
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly',
}
const img={
  width:420,
  borderRadius:'2em',

}
const center={
  textAlign:'center',
}
const item={
  fontSize:'25px',
  margin:'24px auto',
  color:'#363636'
}
const hr={
    display: 'block',
    position: 'relative',
    borderTop: '.1rem solid #ff007f',
    height : '.1rem',
    margin : '2rem 0',
    textAlign: 'center',
}
const social={
  display:'flex',
  justifyContent:'space-evenly',
  alignItems:'center',

 
}
const cursor={
  cursor:'pointer'
}
const column={
  display:'flex',
  flexDirection:'column',
}
const noPad={
  padding:'0'
}
// data

// markup
const IndexPage = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
  return (
    <Navigation>
    <main style={pageStyles} style={isMobile? noPad:{}}>
      <title>Tech Blog</title>
     <div style={!isMobile?row:column}>
        <div>
        {!isMobile? <img  style={img} src={capture} />:<img  style={{width:300,borderRadius:'2em'}} src={capture} />}
        </div>
      <h1 style={headingStyles}>
        Hi<img style={img2} src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"/> !! I am Mridul Shukla 
        <br />
        <p style={subheading}> A CS Engineer,and A Curious Person !! </p>
        <span style={headingAccentStyles}>— I Enjoy playing with new technology !! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      </div>
      <div>
        <h1>What I am Upto?</h1>
        <ul>
          <li style={item}>
              Looking to dig into some cool stuff and post some article about them

          </li>
          <li style={item}>
              Will Include some article about Coding-development,data analysis and other stuff.

          </li>
          {/* <li style={item}>
              

          </li> */}
         
          
         
        </ul>

      </div>
      <div style={hr}>

      </div>
      <div style={social}>
      <a href="https://www.facebook.com/mridul.shukla.524/">
      <img style={cursor} src="https://img.icons8.com/office/48/000000/facebook-new.png"/>
      </a>  
      <a href="https://www.linkedin.com/in/mridul-shukla-899123174/">
      <img style={cursor} src="https://img.icons8.com/doodle/48/000000/linkedin--v2.png"/>
      </a> 
      <a href="https://github.com/mridul037">
      <img style={cursor} src="https://img.icons8.com/fluent/48/000000/github.png"/>
     </a>
     <a href={resume} download>
     <img style={cursor} src="https://img.icons8.com/office/48/000000/pdf.png"/>
     </a>
      </div>
    
    
    </main>
    </Navigation>
  )
}

export default IndexPage
