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
import MvestorMedia from "../images/mvestor.inline.svg";
import Kohost from "../images/kohost.inline.svg";
import Github from "../images/github.inline.svg";
import LinkedIn from "../images/linkedin.inline.svg";

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

        <Button className="bg-[#d62976]  border-[#d62976]">
          <Link
            className={linkCx + " hover:text-[#d62976]"}
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

        <Button className="bg-[#0072B1] border-[#0072B1]">
          <Link
            className={linkCx + " hover:text-[#0072B1]"}
            colorClass="text-white"
            to="https://linkedin.com/in/itrogers"
          >
            <LinkedIn className="h-6" />
            <span className="ml-2">LinkedIn</span>
          </Link>
        </Button>

        <Button className="bg-[#171515] border-[#171515]">
          <Link
            className={linkCx + " hover:text-white]"}
            colorClass="text-white"
            hoverColorClass="text-white"
            to="https://github.com/itrogers"
          >
            <Github className="h-6" />
            <span className="ml-2">GitHub</span>
          </Link>
        </Button>

        <Button className="bg-[#81a9e4] border-[#81a9e4]">
          <Link
            className={linkCx}
            colorClass="text-white"
            to="https://kohost.io"
          >
            <Kohost className="h-6" />
          </Link>
        </Button>

        <Button className="bg-[#f7922d] border-[#f7922d]">
          <Link
            className={linkCx}
            colorClass="text-white"
            to="https://mvestormedia.com"
          >
            <MvestorMedia className="h-6" />
          </Link>
        </Button>
      </article>
    </Layout>
  );
};

const Button = ({ children, className }) => {
  const cx = classNames(
    "border-2 hover:bg-transparent hover:text-cyan-500 text-center flex items-center justify-center mb-4",
    className
  );
  return <div className={cx}>{children}</div>;
};

export default LinksPage;
