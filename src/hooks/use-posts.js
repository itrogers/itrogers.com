import React, { useEffect, useState } from "react";
import { unified } from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import yaml from "js-yaml";

function importAll(require) {
  return require.keys().map(require);
}

const postFiles = importAll(
  require.context("../content/posts", false, /\.(md)$/)
);

export function usePosts(options) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = postFiles.map((file) => {
      return fetch(file).then((response) =>
        response.text().then((text) => {
          const result = unified()
            .use(remarkParse)
            .use(remarkFrontmatter)
            .parse(text);

          const info = result?.children[0]?.value;
          console.log('running this')

          const parsedMeta = yaml.load(info);
          const {date, ...meta} = parsedMeta
          return { ...meta, date: new Date(date), body: text };
        })
      );
    });
    Promise.all(postData).then((posts) =>{
      const sorted = posts.sort((a,b) => b.date - a.date);
      setPosts(sorted)
    } );
  }, []);

  return posts;
}
