import React from "react";
import Layout from "../components/layout";
import Link from "../components/link";
import Seo from "../components/seo";

const AboutPage = ({ data, location }) => {
  const siteTitle = data?.site.siteMetadata?.title || `Title`;
  const liCx = "ml-4 mb-4";
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Ian Rogers" />

      <article className="font-serif text-lg text-gray-300">
        <h1 class="text-3xl font-bold font-mono mb-2" itemprop="name">
          About Me | Ian T. Rogers
        </h1>
        <p className="mb-8">
          Thank you for stopping by! This page is simply about me. I’ll give you
          a quick summary:
        </p>

        <ul className="list-disc list-outside">
          <li className={liCx}>
            I'm your non-typical "self-taught" web developer/programmer. I love
            both frontend and backend development, but am often caught
            attempting to program the right way, over the fast way.
          </li>
          <li className={liCx}>
            Technical Co-Founder at <Link to="https://kohost.io">Kohost</Link>.
            We're chaning the way you interact with your hotel, for good.
          </li>
          <li className={liCx}>
            Founder, Principal, and Web Developer at
            <Link to="https://mvestormedia.com">Mvestor Media</Link> My O.G.
            "day job".
          </li>
          <li className={liCx}>
            Partner, CMO at{" "}
            <Link to="https://fcidesign.com">
              Fusch Commercial Interiors &amp; Design
            </Link>
          </li>
          <li className={liCx}>
            I am interested in all things web, entrepreneurship, and marketing.
          </li>
          <li className={liCx}>
            I love to learn. I try to read/listen to 50 to 75 books per year.
          </li>
          <li className={liCx}>
            I <span className="line-through">am currently writing</span> wrote a
            book on effective web design, called{" "}
            <Link to="https://www.amazon.com/Websites-that-Win-Ian-Rogers/dp/1517005639/">
              Websites that Win: 11 Mistakes You Don't Know You're Making
            </Link>
          </li>
        </ul>
      </article>
    </Layout>
  );
};

export default AboutPage;
