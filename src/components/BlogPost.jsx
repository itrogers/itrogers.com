import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

const BlogPost = ({
  title,
  date,
  author,
  tags = [],
  category,
  description,
  content,
}) => {
  return <article className="text-lg font-serif">
        <header className="mb-4">
          <h1 className="text-3xl font-bold font-mono mb-2">{title}</h1>
          <p className="italic text-sm text-gray-400">{date.toString()}</p>
        </header>
      <Markdown remarkPlugins={[remarkFrontmatter]} components={{
        p: ({node, ...props}) => <p className="mb-3" {...props} />,
        h1: ({node, ...props}) => <h2 className="mb-3 font-mono font-semibold text-lg" {...props} />,
        h2: ({node, ...props}) => <h2 className="mb-3 font-mono font-semibold text-lg" {...props} />,
        h3: ({node, ...props}) => <h3 className="mb-3 font-mono font-semibold" {...props} />,
        h4: ({node, ...props}) => <h4 className="mb-3 font-mono font-semibold" {...props} />,
        h5: ({node, ...props}) => <h5 className="mb-3 font-mono font-semibold" {...props} />,
        h6: ({node, ...props}) => <h6 className="mb-3 font-mono font-semibold" {...props} />,
      }}>{content}</Markdown>
  </article>

  
};

export default BlogPost;
