import React from "react"
import { graphql } from "gatsby"

import Repository from "../components/repository"
import Layout from "../components/layout"
import Avatar from "../components/avatar"


const Projects = ({ data }) => {
  const {
    name,
    avatarUrl,
    isHireable,
    repositories,
  } = data.githubData.viewer

  return (
    <Layout>
     <div
        style={{
          margin: `0 auto`,
          maxWidth: 800,
          paddingTop: 0,
        }}
      >
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            margin: `1.45rem 0`,
          }}
        >
          <Avatar img={avatarUrl} />
          <div style={{ padding: 16 }}>
            <h2 style={{ border: `none` }}>{name}</h2>
            {isHireable && (
              <h3 style={{ marginBottom: 0 }}>
                I'm Hireable{" "}
                <span role="img" aria-label="hand">
                  👋
                </span>
              </h3>
            )}
          </div>
        </div>
        {repositories.nodes
          .map(repo => <Repository key={repo.name} repo={repo} />)
          .reverse()}
      </div>
      <p style={{textAlign: `center`}}><a target="_blank" rel="noopener noreferrer" href="https://github.com/zubayrrr?tab=repositories">More on Github</a></p>
    </Layout>
  )
}

export default Projects

export const gitHubQuery = graphql`
{
  githubData {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: 12, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction: ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction: ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`