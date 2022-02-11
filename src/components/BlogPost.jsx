/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Markdown from "react-markdown";
import { format } from "date-fns";
import Link from "./Link";
import remarkFrontmatter from "remark-frontmatter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import classNames from "classnames";

const BlogPost = ({
  title,
  date,
  author = "Ian T. Rogers",
  tags = [],
  category,
  description,
  content,
}) => {
  return (
    <article
      className="text-lg font-serif text-gray-300"
      itemScope
      itemType="https://schema.org/Article"
    >
      <PostHeader title={title} date={date} author={author} tags={tags} />
      <PostBody content={content} />
    </article>
  );
};

const PostHeader = ({ title, author, date, tags }) => {
  return (
    <header className="mb-4">
      <h1 className="text-3xl font-bold font-mono mb-2" itemProp="name">
        {title}
      </h1>
      <p className="italic text-sm text-gray-400 font-mono">
        <span itemProp="datePublished" content={date.toString()}>
          {format(date, "MM/dd/yyyy HH:mm a")}
        </span>{" "}
        by <span itemProp="author">{author}</span>
      </p>
      {tags.length > 0 && (
        <p className="italic text-sm text-gray-400 font-mono">
          Posted in {tags.join(", ")}
        </p>
      )}
    </header>
  );
};

const PostBody = ({ content }) => {
  const headlineStyle = "mb-3 font-sans text-cyan-500 font-bold";
  return (
    <Markdown
      remarkPlugins={[remarkFrontmatter]}
      components={{
        p: ({ node, ...props }) => <p className="mb-3" {...props} />,
        h1: ({ node, ...props }) => (
          <h2 className={classNames(headlineStyle, "text-2xl")} {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className={classNames(headlineStyle, "text-2xl")} {...props} />
        ),
        h3: ({ node, ...props }) => <h3 className={headlineStyle} {...props} />,
        h4: ({ node, ...props }) => <h4 className={headlineStyle} {...props} />,
        h5: ({ node, ...props }) => <h5 className={headlineStyle} {...props} />,
        h6: ({ node, ...props }) => <h6 className={headlineStyle} {...props} />,
        a: ({ node, href, ...props }) => <Link to={href} {...props} />,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <div className="mb-6">
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                showLineNumbers
                {...props}
              />
            </div>
          ) : (
            <code className={className || "text-cyan-500 text-base"} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default BlogPost;
