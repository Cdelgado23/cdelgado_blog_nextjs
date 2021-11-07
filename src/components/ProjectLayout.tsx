import React from "react";
import styles from "../../public/styles/content.module.css";
import Author from "./Author";
import Copyright from "./Copyright";
import Date from "./Date";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { SocialList } from "./SocialList";
import { getAuthor } from "../lib/authors";

import Link from "next/link";
import {Box, Chip, Divider} from "@mui/material";
import Typography from '@mui/material/Typography';
import GitHubIcon from "@mui/icons-material/GitHub";

type Props = {
    title: string;
    start_date: Date;
    end_date: Date;
    slug: string;
    summary: string;
    technologies: string[];
    related_posts: { title:string, slug: string }[];
    repository: string;
    author: string;
    description?: string;
    children: React.ReactNode;
};
export default function ProjectLayout({
    title,
    start_date,
    end_date,
    slug,
    summary,
    author,
    technologies,
    related_posts,
    repository,
    description = "",
    children,
}: Props) {
  const keywords = technologies;
  const authorName = getAuthor(author).name;
  return (
    <Layout>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={start_date}
        author={authorName}
        description={description}
      />
      <div className={"container"}>
        <article>
          <header>
            <h1>{title}</h1>
            <div className={"metadata"} style={{margin:"0 0 1rem 0" }}>
                <div>
                    <Date date={start_date}/> - <Date date={end_date}/>
                </div>
                <Author author={getAuthor(author)} />
            </div>
          </header>
            <Divider/>
            <div style={{margin: "1rem 0 1rem 0"}}>
                <Typography variant="h6" gutterBottom component="div">
                    Summary
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    {summary}
                </Typography>
            </div>
            <Divider/>
            {
                !(repository==="")?
                <>
                <div style={{margin: "1rem 0 1rem 0", display: "flex", flexDirection: "column", width:"fit-content"}}>
                    <Typography variant="h6" gutterBottom component="div">
                        Repository
                    </Typography>
                    <Link href={repository}>
                        <a>
                            <GitHubIcon style={{width: "2.5rem", height: "2.5rem"}} fill={"#FFFF"}/>
                        </a>
                    </Link>
                </div>
                <Divider/>
                </>
                :
                ""
            }
            <div style={{margin: "1rem 0 1rem 0", display:"flex", flexDirection: "column", gap:"1rem"}}>
                <Typography variant="h6" gutterBottom component="div" style={{margin:"0"}}>
                    Technologies
                </Typography>
                <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"0.5rem"}}>
                    {keywords.map((it, i) => (
                        <Chip label={it} variant="outlined" />
                    ))}
                </div>
            </div>
            <Divider/>
            {
                related_posts.length>0?
                    <>
                    <div style={{margin: "1rem 0 1rem 0", display:"flex", flexDirection: "column", gap:"1rem"}}>
                        <Typography variant="h6" gutterBottom component="div" style={{margin:"0"}}>
                            Related Posts
                        </Typography>
                        {related_posts.map((it, i) => (
                            <Link href={"/posts/"+ it.slug}>
                                <a>
                                    {it.title}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <Divider/>
                    </>
                :
                ""
            }
            <Typography variant="h6" gutterBottom component="div">
                Other information
            </Typography>
            <div className={styles.content}>{children}</div>

        </article>
        <footer>
          <div className={"social-list"}>
            <SocialList />
          </div>
          <Copyright />
        </footer>
      </div>
      <style jsx>
        {`
            .container {
              display: block;
              max-width: 36rem;
              width: 100%;
              margin: 0 auto;
              padding: 0 1.5rem;
              box-sizing: border-box;
              z-index: 0;
            }
            .metadata div {
              display: inline-block;
              margin-right: 0.5rem;
            }
            article {
              flex: 1 0 auto;
            }
            h1 {
              margin: 0 0 0.5rem;
              font-size: 2.25rem;
            }
            .tag-list {
              list-style: none;
              text-align: right;
              margin: 1.75rem 0 0 0;
              padding: 0;
            }
            .tag-list li {
              display: inline-block;
              margin-left: 0.5rem;
            }
            .social-list {
              margin-top: 3rem;
              text-align: center;
            }

            @media (min-width: 769px) {
              .container {
                display: flex;
                flex-direction: column;
              }
            }
          `}
      </style>
      <style global jsx>
        {`
            /* Syntax highlighting */
            .token.comment,
            .token.prolog,
            .token.doctype,
            .token.cdata,
            .token.plain-text {
              color: #6a737d;
            }

            .token.atrule,
            .token.attr-value,
            .token.keyword,
            .token.operator {
              color: #d73a49;
            }

            .token.property,
            .token.tag,
            .token.boolean,
            .token.number,
            .token.constant,
            .token.symbol,
            .token.deleted {
              color: #22863a;
            }

            .token.selector,
            .token.attr-name,
            .token.string,
            .token.char,
            .token.builtin,
            .token.inserted {
              color: #032f62;
            }

            .token.function,
            .token.class-name {
              color: #6f42c1;
            }

            /* language-specific */

            /* JSX */
            .language-jsx .token.punctuation,
            .language-jsx .token.tag .token.punctuation,
            .language-jsx .token.tag .token.script,
            .language-jsx .token.plain-text {
              color: #24292e;
            }

            .language-jsx .token.tag .token.attr-name {
              color: #6f42c1;
            }

            .language-jsx .token.tag .token.class-name {
              color: #005cc5;
            }

            .language-jsx .token.tag .token.script-punctuation,
            .language-jsx .token.attr-value .token.punctuation:first-child {
              color: #d73a49;
            }

            .language-jsx .token.attr-value {
              color: #032f62;
            }

            .language-jsx span[class="comment"] {
              color: pink;
            }

            /* HTML */
            .language-html .token.tag .token.punctuation {
              color: #24292e;
            }

            .language-html .token.tag .token.attr-name {
              color: #6f42c1;
            }

            .language-html .token.tag .token.attr-value,
            .language-html
              .token.tag
              .token.attr-value
              .token.punctuation:not(:first-child) {
              color: #032f62;
            }

            /* CSS */
            .language-css .token.selector {
              color: #6f42c1;
            }

            .language-css .token.property {
              color: #005cc5;
            }
          `}
      </style>
    </Layout>
  );
}
