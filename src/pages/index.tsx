import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

import FlipCard from "../components/FlipCard";
import DataCard from "../components/DataCard"
import styles from './index.module.css';
import { Paper } from '@mui/material';

import { GetStaticProps } from "next";
import { listCards, informationCardContent } from "../lib/FrontPage";
import InfoCard from "../components/FrontPageInfoCard"


type Props = {
  cards: informationCardContent[];
};

export default function Index({ cards }: Props) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={styles.container}>
        <h1>
          Hello, this is Carlos' site!
        </h1>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <Paper className={styles.profPic} elevation={3}>
            <img src="/images/profile.png" alt="Profile picture" />
          </Paper>
          <DataCard color='#FFFF' header="About me">
            <div className={styles.textList}>
              <p>🚀 I am a Software Engineer, I build "stuff".</p>
              <p>🐣 Curious and restless mind.</p>
              <p>⚙️ Team oriented, together we go further.</p>
            </div>
          </DataCard>
          <DataCard color='#FFFF' header="Contact me">
            <SocialList />
          </DataCard>
        </div>

        <div className={styles.cardsContainer}>
        {cards.map((cd, i) => (
            <InfoCard card={cd} />
        ))}
        </div>

      </div>
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const cards = listCards();
  return {
    props: {
      cards
    },
  };
};
