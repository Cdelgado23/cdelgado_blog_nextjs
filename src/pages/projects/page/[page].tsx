import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../../components/Layout";
import BasicMeta from "../../../components/meta/BasicMeta";
import OpenGraphMeta from "../../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../components/meta/TwitterCardMeta";
import PostList from "../../../components/PostList";
import config from "../../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../../lib/posts";
import { listTags, TagContent } from "../../../lib/tags";
import ProjectList from "../../../components/ProjectList";
import {countProjects, listProjectContent, ProjectContent} from "../../../lib/projects";

type Props = {
  projects: ProjectContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page({ projects, pagination, page }: Props) {
  const url = `/projects/page/${page}`;
  const title = "All projects";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <ProjectList projects={projects} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string);
  const projects = listProjectContent(page, config.posts_per_page);
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      page,
      projects,
      pagination,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countProjects() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
