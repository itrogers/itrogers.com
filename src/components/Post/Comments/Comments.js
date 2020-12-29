// @flow strict
import React from "react";
import { useSiteMetadata } from "../../../hooks";
import { getContactHref } from "../../../utils";

type Props = {
  postTitle: string,
  postSlug: string,
};

const Comments = ({ postTitle, postSlug }: Props) => {
  const { author } = useSiteMetadata();

  return (
    <>
      <h3>Comments</h3>
      <p>
        Sorry, no comments here! Let's move the conversation to{" "}
        <a
          href={getContactHref("twitter", author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter.
        </a>
      </p>
    </>
  );
};

export default Comments;
