import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { Link } from "gatsby";


const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div style={{textAlign: `center`, padding:`5vh 0`, lineHeight: `1.5`}}>
        <img alt=" " src="data:image/png;base64,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"/>
      <p style={{fontSize: `18px`}}>You just hit a route that doesn't exist... the sadness.</p>
      <p  style={{fontSize: `18px`}}>Unless you were looking for a 404 page, in which case: Kudos! you totally found it.</p>
      <Link to="/"  style={{fontSize: `23px`, marginBottom: `0`}}>&larr; Home</Link>
      </div>
    </Layout>
  )
}

export default notFound