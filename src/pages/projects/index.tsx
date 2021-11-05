import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import { SocialList } from "../../components/SocialList";

import styles from '../index.module.css';
import {countProjects, listProjectContent, ProjectContent} from "../../lib/projects";
import {GetStaticProps} from "next";
import config from "../../lib/config";
import ProjectList from "../../components/ProjectList";


type Props = {
    projects: ProjectContent[];
    pagination: {
        current: number;
        pages: number;
    };
};
export default function Index({ projects, pagination }: Props) {
    const url = "/posts";
    const title = "All posts";
    return (
      <Layout>
          <BasicMeta url={url} title={title} />
          <OpenGraphMeta url={url} title={title} />
          <TwitterCardMeta url={url} title={title} />
          <ProjectList projects={projects} pagination={pagination} />
      </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const projects = listProjectContent(1, config.posts_per_page);
    const pagination = {
        current: 1,
        pages: Math.ceil(countProjects() / config.posts_per_page),
    };
    return {
        props: {
            projects,
            pagination,
        },
    };
};