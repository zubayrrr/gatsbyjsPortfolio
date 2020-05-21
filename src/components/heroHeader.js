import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
              github_userurl
              linkedin_userurl
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
       <span className="hero-links">
          <a target="_blank"  rel="noopener noreferrer"  href={data.site.siteMetadata.home.github_userurl}>Github</a>
          <a target="_blank"  rel="noopener noreferrer"  href={data.site.siteMetadata.home.linkedin_userurl}>LinkedIn</a>
        </span>
        
        <Link to='/contact' className="button -primary">Drop a message &rarr;</Link>
      </div>
    )}
  />
)