import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import spotify from "../images/spotify-sketch.svg";

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
              spotify_userurl
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div
          className="primary-content"
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.home.description,
          }}
        />
        <span className="hero-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.site.siteMetadata.home.github_userurl}
          >
            <img
              alt="github-logo"
              src={github}
              style={{ width: "34px", height: "auto" }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.site.siteMetadata.home.linkedin_userurl}
          >
            <img
              alt="linkedin-logo"
              src={linkedin}
              style={{ width: "34px", height: "auto" }}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={data.site.siteMetadata.home.spotify_userurl}
          >
            <img
              alt="spotify-logo"
              src={spotify}
              style={{ width: "34px", height: "auto" }}
            />
          </a>
        </span>

        <Link to="/contact" className="button -primary">
          Drop a message &rarr;
        </Link>
      </div>
    )}
  />
);
