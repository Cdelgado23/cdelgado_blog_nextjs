import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from 'date-fns';

import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Date from "../../components/Date";
import React from "react";
import ProjectLayout from "../../components/ProjectLayout";
import {fetchProjectContent} from "../../lib/projects";
import {getPostTitle} from "../../lib/posts";

type Props = {
  title: string;
  start_date: string;
  end_date: string;
  slug: string;
  technologies: string[];
  related_posts: { title: string, slug: string }[];
  repository: string;
  author: string;
  description?: string;
  source: MdxRemote.Source;
};

const components = { InstagramEmbed, YouTube, TwitterTweetEmbed };
const slugToProjectContent = (projectContents => {
  let hash = {}
  projectContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchProjectContent());

export default function Project({
  title,
  start_date,
  end_date,
  slug,
  technologies,
  related_posts,
  repository,
  author,
  description = "",
  source,
}: Props) {
  const content = hydrate(source, { components })
  return (
    <ProjectLayout
      title={title}
      start_date={parseISO(start_date)}
      end_date={parseISO(end_date)}
      slug={slug}
      technologies={technologies}
      related_posts={related_posts}
      repository={repository}
      author={author}
      description={description}
    >
      {content}
    </ProjectLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchProjectContent().map(it => "/projects/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

type postLink={
  title: string,
  slug: string
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.project as string;
  const source = fs.readFileSync(slugToProjectContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
  });
  const mdxSource = await renderToString(content, { components, scope: data });

  const postLinks= data.related_posts.map(p=> ({title: getPostTitle(p), slug: p}));

  return {
    props: {
      title: data.title,
      start_date: data.start_date,
      end_date: data.end_date,
      repository: data.repository,
      slug: data.slug,
      description: "",
      technologies: data.technologies,
      related_posts: postLinks,
      author: data.author,
      source: mdxSource
    },
  };
};

