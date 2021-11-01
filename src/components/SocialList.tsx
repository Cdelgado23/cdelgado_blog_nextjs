import React from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

import config from "../lib/config";

import FlipCard from "./FlipCard";

export function SocialList({ }) {
  const twitter = <TwitterIcon style={{ width: "2.5rem", height: "2.5rem" }} fill={"#FFFF"} />;
  const github = <GitHubIcon style={{ width: "2.5rem", height: "2.5rem" }} fill={"#FFFF"} />;
  const linkedin = <LinkedInIcon style={{ width: "2.5rem", height: "2.5rem" }} fill={"#FFFF"} />;
  const email = <EmailIcon style={{ width: "2.5rem", height: "2.5rem" }} fill={"#FFFF"} />;

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
      <a
        title= {config.twitter_account}
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        {twitter}
      </a>
      <a
        title={config.github_account}
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        {github}
      </a>
      <a
        title="Linked In"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        {linkedin}
      </a>

      <a
        title="Email"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        {email}
      </a>

    </div>
  );
}
