/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Link from "./link";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      <h3 className="mb-4 font-mono font-bold ">Written by {author.name}</h3>
      <div className="flex">
        <div className="mr-5 basis-2/5 md:basis-1/5">
          <StaticImage
            className="rounded shadow-xl"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/ian-photo.jpg"
            quality={95}
            alt="Profile picture"
          />
        </div>
        <div className="basis-4/5">
          <p className="text-sm md:text-base font-serif font-normal md:leading-8">
            Ian is an entrepreneur and software engineer, focusing on maximizing
            software value and elminating technical debt. Engage with Ian on{" "}
            <Link to="https://twitter.com/itrogers">Twitter</Link> or over email
            at ian at itrogers dot com. <Link to="/about">Read more.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
