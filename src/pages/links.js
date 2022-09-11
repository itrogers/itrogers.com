import classNames from "classnames";
import React from "react";
import Layout from "../components/layout";
import Link from "../components/link";
import Logo from "../components/logo";
import Seo from "../components/seo";
import photo from "../images/ian-photo.jpg";
import Spotify from "../images/spotify.inline.svg";
import Instagram from "../images/ig.inline.svg";
import Twitter from "../images/twitter.inline.svg";

const LinksPage = ({ data, location }) => {
  const siteTitle = data?.site.siteMetadata?.title || `Title`;
  const linkCx =
    "flex items-center justify-center text-white no-underline flex-1 p-4";
  return (
    <Layout location={location} title={siteTitle} hideHeader hideFooter>
      <Seo title="Links" />

      <article className="text-lg text-gray-300 mt-6">
        <Link to="https://itrogers.com">
          <img
            src={photo}
            alt="Ian Rogers"
            className="rounded-full block m-auto max-w-[150px] mb-4"
          />
        </Link>

        <div className="text-center flex content-center items-center justify-center mb-8">
          <Logo text="@itrogers" />
        </div>

        <Button className="bg-[#1DB954] border-[#1DB954]">
          <Link
            className={linkCx + " hover:text-[#1DB954]"}
            colorClass="text-white"
            hoverColorClass="hover:text-[#1DB954]"
            to="https://open.spotify.com/user/itrogers?si=581d04642e9a4f2f"
          >
            <Spotify />
            <span className="ml-2">Spotify</span>
          </Link>
        </Button>

        <Button className="bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] border-transparent">
          <Link
            className={linkCx}
            colorClass="text-white"
            to="https://instagram.com/itrogers"
          >
            <Instagram />
            <span className="ml-1">Instagram</span>
          </Link>
        </Button>

        <Button className="bg-[#1DA1F2] border-[#1DA1F2]">
          <Link
            className={linkCx + " hover:text-[#1DA1F2]"}
            colorClass="text-white"
            to="https://twitter.com/itrogers"
          >
            <Twitter />
            <span className="ml-2">Twitter</span>
          </Link>
        </Button>

        <Button>
          <Link
            className={linkCx}
            colorClass="text-white"
            to="https://kohost.io"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>

            <span className="ml-2">Kohost</span>
          </Link>
        </Button>

        <Button>
          <Link
            className={linkCx}
            colorClass="text-white"
            to="https://mvestormedia.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2">Mvestor Media</span>
          </Link>
        </Button>
      </article>
    </Layout>
  );
};

const Button = ({ children, className }) => {
  const cx = classNames(
    "border-2 border-white hover:bg-transparent hover:text-cyan-500 text-center flex items-center justify-center mb-4",
    className
  );
  return <div className={cx}>{children}</div>;
};

export default LinksPage;
