import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p style={{display: `inline-block`}}>&copy; {(new Date()).getFullYear()} <a target="_blank" rel="noopener noreferrer" href="https://github.com/zubayrrr">Zubayr</a> &bull; <span className="footer-text">Crafted with <span role="img" aria-label="love">💖 in <b>India</b>.</span></span></p>
      </footer>
    </div>
  )
}