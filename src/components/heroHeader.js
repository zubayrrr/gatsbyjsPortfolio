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
          <a target="_blank"  rel="noopener noreferrer"  href={data.site.siteMetadata.home.github_userurl}><img alt="github-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAD/0lEQVRYhe2WXWgcVRiG32/2N4EEs71QtyXgT7AoFTQFo72wBP+CF61iLkSFSCtq1syMaVBEhROx/sSV3ckwVCOIqKBpKigEUcGbSiAxFgrFUGit1otoK4ZF1242zp7Pi6SwO3vO7nYTLUJfWNh5v/Oe72HOmZkDXNL/TNRMyDTN24ioF8DNzHwDEW0CYBDRH8x8CsBRZv5qeXn564mJib//FSAhRHRpaelJInoCwNYGY78COBCLxTJjY2N/bhiQZVl3AnABXNcgSFBnAKQcx/lk3UC2bT/HzPsbGduAxhcXF4enpqZKugGhWmnLst4C8OwGwQDALW1tbV2dnZ2fLiwssGqAUQPmBQCPbxBIuR5MJpNv6IpKINM07wHwUsA+UiqVNgN4iJm/baDxMSLaQ0RXAZgO1J62bXu3KlS1ZAMDA/F4PD4NIBEoTbque2hubu5YX1/fu8VisQhgC4DPiehLIpohopMAIkT0UaFQeMDzvCOzs7O5np6emwDsCMx3e3d399vz8/Mr5WY4CNTe3m4CuCboM/O58/+FEBLAq2u/RlRUeFdGo9Gh4BwVSyaEMIhIt28ua7B5lZi5Q+On+vv7K1apAiiXy+0EcLUqTERXNAsE4HKNvzmZTPZqgQDs1ATP+b6/r1maUqk0AuAvVY2I7tICMXO3Zs4Jz/NONwvked5pIjqgqjHzdi0QgC5VSEo52SxMWeODmlJFzyBQXJVoaWn5fr1AsVjsuKZUseGDQBFVIp/PK1/zGyRDe0FEZ1SJaDS6bb1dV1ZWbtSUftcCMfNJVUJKuXe9QAAe0/iLWiAAR1UJIhowTXNXsyS2bd/PzI9o5p7VAhmG8ZlmToOIDtq2PSyEqPrc6CSECJumOcLMHwd7lelwBWCwalnWcdQ+GZ4A8KGU8pDruguqAUNDQ9cTUT8RPQzg2hpzLRmGsSWTyRTOG1XUzPx62eV3zLwDwEyZ1wVgNBQK3afrYhjGXiISdWDAzO+VwyiBEonEB1i9CwCwHcBoOBzeDeCnsmGnstnsKzWAnsfqObqWcsz8WlU2aAghfCJ6FIAPAER0h+/7rVLKewHMAsgDeAeA9t2UyWQKRPRFHaAXXdf9LWgqN2g2m52xbVsw88sAwMzPuK77FIBb6zQp1881apOO43iqgvaJyWaz+03TTBDRMBGlLMsiwzAyxWIx39raKtPp9Nk6QFJlMvM30Wh0DzR3WHvIB4Dx8fF9zCwAlAAMSilPRCKRX3zfH6wDo9N0KBS6O51OK48idYHWoEYB9KJyU1+olgGMdHR07Ao+VRcMBACO4xyWUm4lokEAP0gpf6yXYeazWH0w3jcMY5vjOG+uncUvnlKp1KaLCnBJ/4X+ASQnYPArSof7AAAAAElFTkSuQmCC" /></a>
          <a target="_blank"  rel="noopener noreferrer"  href={data.site.siteMetadata.home.linkedin_userurl}><img alt="linkedin-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACB0lEQVRYhe2XP2gTYRjGf++XxDTBXJopoO0iDoJuDro66GBHSWx10kEQHKKYREEwICqkTmbqIB009WwHJ2dBUfcOdRELTmaydyn9Q9t7nSKXyylScpelz/Y+33v3/Hi/u487oTE/Zm1kngIzQJF41EFkwd3I3U9am9knoJWYgnsqonrbyrhqUL0Sc7hfVw3xjT1MRTPCcACSId6ewLyn+kkwE4jeIsIphQDoHac587xX5e8uttV4y8DhKAAGt2An8cpfOs/KqyBfoggPBZCkVxhs0yOxAajQGq+8He9VufqbGnAyKgCxaraG+F2EFVU5KuhEVOEQ/hYA5FDOCGFsEQO4zWkJelbdXkQp9WpRys7s9JK/J1+1SyosoDKnKm1N8W09jVNY3z3hGVNRuPZfAPuVZ2QroVxYm7383u//gmXgulV7/QPkYfC6oZ2E3czXd2vN/nC/3NXEI4SVyABoNLx/ri+V9xReBO2hbQFAvm7fVOUxyGd3M3eJ1sVt/7oIH4PP9dAmYN1bPK5KCyiATllj7o1gj8qh70FvaADq6Skg8ccQPR3s6aYLTmQARjXVZ4hkB5oa53YjA9ivDgAOAEYOMHAS5qt2KeipMtlXC2fzVZug128wGXqvQP23D5LYNPItMEBnhPkdA7RHlS4qLxPb56c+pHdSWeAYEf18hOinwJyzZT34DYHun0BvALe0AAAAAElFTkSuQmCC" /></a>
          <a target="_blank"  rel="noopener noreferrer"  href={data.site.siteMetadata.home.spotify_userurl}><img alt="spotify-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABmJLR0QA/wD/AP+gvaeTAAAEfUlEQVRYhe2XX2xTdRTHP+e2tMIUtmnWCV0hgqLMJSb6AAkxYWHrBMzAtcQw9jp9UEwMRhISHcRETeRBMT74OmLi2sEYA1rGnwcwPMgISpYoROO6zaxjuj+wv23v8WEbdu1tV9j0ie/bPb/z+93P75zfPed34ZHmShYyubTJ7xhcYXMBFAwnop27A1P/C4inbU8B9tgONXSnKpsFilJcooJcMcVsMaacpyM7vhtcVBBXuC7PqePvIBxUeCLHtcdUOOoQ+fT3isDwgkFKzvkqVWm02H2uiorq3khV8/lsTka2QU/YX4/StgAIAJeKhDwh34fZnDJGxBOu2afIlwsASJOqvNtTFfg6ZxBP2F+h6BnAvpggQELh9R5v8Oy8IOvO1C6fsE3eziEdQwK2Bzi8s4qOT0w9O1DdejfZmLbjSdvkB0kQowInTOGmwA17zPxVHLah1K/A07anQJeMrxI1NmBQqiqbgFcBpwWIa9nSJfuBj5ONcyLiDvkLRTQC5AEobLMKYy5yhevynIyVK1IH7ErZ9KjEHCXJdWZORAzYrjMQAIbwb6VsaDDcGzufMTDXYEiBaWq+CAlVhhX9G5PbvduO98y6R72No8Ap4NTK8JslBvH9AvtmhvNMx+R24JhlRErO+ZpR3kgy9QKXEVmLaimwbJ5ADKpyXeCsabed6t36/a0564f8IUS90y+W5og34LMEcYd90eyHVH8DoxfRAVUdQFgqauSDFgFlaaDKFUSPdF8tay3d0GkfWaHXZvwAot3eYHEaSGmT3zGyQidS4YAORA7H4lzt2xa4k5GxyW/zLDefxzC2mqq7BTYlrdULKOBOmmEWPVn4WMcr38bmgKxs93tspnalvUCkursy0JoRIIPcIf86wTyIyF4y1KOEIav/rAhEcgIR5JKiQdAXUSlDdDVIAfA4MAaMABFFbyDyY0wTrVHvif776571r7cZegl4OieQLKl5UCWACyLm4Ujl8R8ASsK+M8BrKX7WqYGsh3UY+BnRn4BfUPlLVYbEUFNMzVdhFchLqG5E5LnZSQoXRbiFUk96g+3r9gbvRymljshlRWtSJkxMOMR9Z0vg3ryxANzt/jJUa0V5W6AcpdzKT+FK8rM9ZfQkQiqI0xkzd7rDPkUoE5MXEIqBQkARGULN26hcT6i09VQEbgIH1lza+Vk8ZvtKVOoyMLckP8xJzXTPmIowfRAfVh2gn3RXNp90t9fUikqjhc89myNe8seWliFLEADPuZpDqvLRAkAAUKFLlGIsGp9CQ483eCjZlnZDGxuPfaHQn2p/UImy2goC6Jt0yJFUYxrIQHXrXUO1FogvFMZCcRH2Wh18yztrpKr5vML7/wHIe5HK4AWrgYyX5x5v8KggbwGxRQCIi3Kg2xv8JpPDvFXUE6rZqiLHANdDQvQZSG2XN3Axm1PW3wmYTtMUS9eKcoDpvpKrRlX43Jlwrp8PAh7il9N0TG5HpVpgM9NRml1DgehMxWyxO+Knk+vEooKk6uVr9Uv6+gdcAMVFT0VnG9gjLYb+AYWgx85DJAGOAAAAAElFTkSuQmCC" /></a>

        </span>
        
        <Link to='/contact' className="button -primary">Drop a message &rarr;</Link>
      </div>
    )}
  />
)