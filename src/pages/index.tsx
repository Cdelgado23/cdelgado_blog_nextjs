import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

import FlipCard from "../components/FlipCard";
import DataCard from "../components/DataCard"
import styles from './index.module.css';
import { Paper } from '@mui/material';

export default function Index() {
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
            <img src="/images/profile.jpg" alt="Profile picture" />
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

        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1.5rem", justifyContent:"center", }}>

          <DataCard color="#FFFF" header="Working on...">
            <h3 style={{ margin: "0" }}>Hello</h3>
            <div className={styles.anchor}>
              <div className={styles.overlayedContent} style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }}>
                <img src="/images/mountains_background.jpg" className={styles.projectImg} />
              </div>
              <div className={styles.overlay}>
                <div className={styles.overlayText}>
                  <h2 >hello</h2>
                  <p>summary</p>
                </div>
              </div>
            </div>
          </DataCard>
          <DataCard color="#FFFF" header="To come...">
            <h3 style={{ margin: "0" }}>Hello</h3>
            <div className={styles.anchor}>
              <div className={styles.overlayedContent} style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }}>
                <img src="/images/mountains_background.jpg" className={styles.projectImg} />
              </div>
              <div className={styles.overlay}>
                <div className={styles.overlayText}>
                  <h2 >hello</h2>
                  <p>summary</p>
                </div>
              </div>
            </div>
          </DataCard>
          <DataCard color="#FFFF" header="To come...">
            <h3 style={{ margin: "0" }}>Hello</h3>
            <div className={styles.anchor}>
              <div className={styles.overlayedContent} style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }}>
                <img src="/images/mountains_background.jpg" className={styles.projectImg} />
              </div>
              <div className={styles.overlay}>
                <div className={styles.overlayText}>
                  <h2 >hello</h2>
                  <p>summary</p>
                </div>
              </div>
            </div>
          </DataCard>
        </div>

      </div>
    </Layout>
  );
}