import * as React from 'react'
import {
    container,
    navLinks,
    column,
    copyright,
    navLinkItem,
    navLinkText,nav,img,mobNavLinkText
  } from './layout.module.css'
  import { Link } from 'gatsby'
import goku from '../images/goku.webp';
import { useMediaQuery } from 'react-responsive'
const Navigation=({children})=>{
   const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
return(
<main className={container}>
<nav className={nav}>
<ul className={!isMobile ?navLinks:column  }>
  <li >
   <img className={img} src={goku} />
  </li>
  <li className={navLinkItem}>
    <Link to="/" className={!isMobile ?navLinkText:mobNavLinkText}>
      Home
    </Link>
  </li>
  <li className={navLinkItem}>
    <Link to="/blog" className={!isMobile ?navLinkText:mobNavLinkText}>
    Cool Link's for Dev.
    </Link>
  </li>
  <li className={navLinkItem}>
    <Link to="/about" className={!isMobile ?navLinkText:mobNavLinkText}>
      About
    </Link>
  </li>
</ul>
</nav>
{children}

<div className={copyright}>
  Mady by Mridul Shukla © 2021
</div>
</main>
)}

export default Navigation