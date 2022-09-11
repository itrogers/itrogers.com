import * as React from "react";
import { graphql } from "gatsby";
import _ from "lodash";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Link from "../components/link";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  const { frontmatter, html, excerpt } = post;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />
      <article
        className="text-lg font-serif text-gray-300"
        itemScope
        itemType="https://schema.org/Article"
      >
        <PostHeader
          title={frontmatter.title}
          date={frontmatter.date}
          tags={frontmatter.tags || []}
          category={frontmatter.category}
        />
        <section
          dangerouslySetInnerHTML={{ __html: html }}
          itemProp="articleBody"
        />
        <hr />
        <footer className="text-white bg-slate-800 p-8 mt-16">
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

const PostHeader = ({
  title,
  author = "Ian Rogers",
  date,
  tags = [],
  category,
}) => {
  const tagArchives = tags.map((tag, idx) => (
    <>
      <Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
      {idx === tags.length - 1 ? "" : ", "}
    </>
  ));
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold font-mono mb-2" itemProp="name">
        {title}
      </h1>
      <p className="italic text-sm text-gray-400 font-mono">
        <span itemProp="datePublished" content={date}>
          {date}
        </span>{" "}
        by <span itemProp="author">{author}</span>
      </p>
      {category && (
        <p className="italic text-sm text-gray-400 font-mono">
          Filed in {category}
        </p>
      )}
      {tags?.length > 0 && (
        <p className="italic text-sm text-gray-400 font-mono">
          Tagged as {tagArchives}
        </p>
      )}
    </header>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY hh:mm a")
        description
        tags
        category
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
