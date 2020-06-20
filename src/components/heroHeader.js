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
              spotify_userurl
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
          <a target="_blank"  rel="noopener noreferrer"  href={data.site.siteMetadata.home.github_userurl}><img alt="github-logo" src="data:image/png;base64,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" /></a>
          <a target="_blank"  rel="noopener noreferrer"  href={data.site.siteMetadata.home.linkedin_userurl}><img alt="linkedin-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACvklEQVRoge2ZP2gTYRiHn/cuSWvTUBDEFtSlQlpx0UXBofgHCg4tIoYWpEMcUhSLm5QidqjoLrQa0KWDtQ6aTi6KdVIwRZRCCyq1ogh2sFLLSZp7HRQtmu+atCaXSJ4p3Pt+4fnlu+++u4sAROOpCEEZEKULYQcglCeKMq/CWMB2hqaHY0sSjaciEpRJYI/fdgUyZdtOm0VQBqg8eYC9Wbd2wBLo9ttk3bh0W8A2vz3WjbDdAiy/PTaAVcnyQGX/+sDaAR6rcDisEg4t19RbyBHgWSnE8iXgUXvY2BRpfzR4cGXVsQecGN/fsrl2EjhQZLe8MM+A6174Q/4Hd2JZRc8VU6oQjAGcTMOUqZYNBV8WR6dwjAHCdV+M+0Mg862pODqFYwyw4lo9ppoSiBdHp3CMAUS1vzUxcZrBwVU9Kq2JiVOi2l8KuXyQlsSEejYgr1X0KYCo7FO0uTRq+eF1GQVA0WaU5p+fi29UIBW/ExtnYOZ6h+dTmenUK2DcAuhtcfWeEpwPOYH32ciiZLUuiqvHQfuA8LoDFBNVRjM4Z98kY4s5ymkg3dJ7N4na94Go13eV/BQSkZHZZEePQf4XM9eOzWlGDwELXn0lD7C1sb4v397Zm50fVPS8V0/JA+S8v/Kg3v04ivDJVC/7q1A6mcigOm6q+7KIo72puLjSj0WDunpxNtk54tWv8ETgTK5ayWcgmkidFJUbCDtRtojIcGtvqstrjCX2c2Pt3yt6IyJ/LWJVy/P5wl7JltEaUHblOLjba4izKfjZVPNjEefaXT133FdXj34z1cr+KrQW1QB+Uw3gN9UAflMN4DfVAH6z5outcqfiZ+C/COD6LbEBXAvlnd8WG2DeUmHMb4v1I7esgO0MAca/k8qYdGg5dMmaHo4t2bbThnAF5S2U4Tv037jAHMjl0HJN24vR9q/fAQb2zrSufgZcAAAAAElFTkSuQmCC" /></a>
          <a target="_blank"  rel="noopener noreferrer"  href={data.site.siteMetadata.home.spotify_userurl}><img alt="spotify-logo" src="data:image/png;base64,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" /></a>

        </span>
        
        <Link to='/contact' className="button -primary">Drop a message &rarr;</Link>
      </div>
    )}
  />
)