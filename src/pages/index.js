import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import ianImage from "../images/ian-profile.jpg"
import JSLogo from "../images/js-logo.inline.svg"
import WPLogo from "../images/wp-logo.inline.svg"
import ReactLogo from "../images/react-logo.inline.svg"
import AWSLogo from "../images/aws-logo.inline.svg"
import DockerLogo from "../images/docker-logo.inline.svg"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Intro />
      <h2 className="font-bold text-3xl font-mono mb-4">Latest Articles</h2>
      <ul className="list-inside text-sm md:text-lg">
        {posts.map(post => {
          const { fields, frontmatter } = post
          const { slug } = fields
          const { title, date, rawDate } = frontmatter
          let isNew = false
          const now = new Date()
          const threeWeeks = 60 * 60 * 24 * 7 * 3
          if (
            now.getTime() / 1000 - new Date(rawDate).getTime() / 1000 <=
            threeWeeks
          )
            isNew = true
          return (
            <li key={slug} className="mb-4 flex justify-between">
              <Link className="shrink mr-2" key={slug} to={slug}>
                {title}
              </Link>
              <span className="whitespace-nowrap grow text-right text-xs md:text-sm">
                {isNew && (
                  <span className="mr-2 font-bold font-mono p-1.5 pl-2 bg-slate-800">
                    New!
                  </span>
                )}
                <span className="font-mono text-gray-100">{date}</span>
              </span>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

const Intro = () => {
  return (
    <div className="md:flex gap-8 mb-12">
      <div className="basis-3/5 mb-4 text-xl">
        <h1 className="font-bold text-5xl font-mono mb-6">Hey, I'm Ian.</h1>
        <p className="mb-4">
          I'm am entrpreneur, software developer, and writer based in Las Vegas,
          NV. This is my personal blog to document and showcase what I've
          learned, so that it may be of help to others.
        </p>
        <p className="mb-4">I work with modern technologies like:</p>
        <ul className="list-inside mb-4">
          <li className="flex items-center mb-3">
            <JSLogo className="w-6 mr-2" /> NodeJS / JavaScript / TypeScript
          </li>
          <li className="flex items-center mb-3">
            <DockerLogo className="w-6 mr-2" /> Docker
          </li>
          <li className="flex items-center mb-3">
            <ReactLogo className="w-6 mr-2" /> React
          </li>
          <li className="flex items-center mb-3">
            <WPLogo className="w-6 mr-2" /> PHP / WordPress
          </li>
          <li className="flex items-center mb-3">
            <AWSLogo className="w-6 mr-2" />
            AWS / Linux
          </li>
        </ul>
        <p>
          You can read more <Link to="/about">about me</Link> or find me on{" "}
          <Link href="https://twitter.com/itrogers">Twitter</Link>.{" "}
        </p>
      </div>
      <div className="basis-2/5 align-right">
        <img src={ianImage} className="shadow-2xl rounded" alt="Ian Rogers" />
      </div>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          rawDate: date
          date(formatString: "MMM DD")
          title
          description
        }
      }
    }
  }
`
