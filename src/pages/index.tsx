import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Paper } from '@mui/material';

import styles from './index.module.css';

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={styles.container}>
        <h1>
          Hello, welcome to my site!
        </h1>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center", flexWrap: "wrap", justifyContent:"center"}}>
          <DataCard color="#FFFF">
            <img src="/images/profile.jpg" alt="Profile picture" className={styles.profPic} />
          </DataCard>
          <DataCard color="#FFFF">
            <h2 style={{ margin: "0" }}>
              About me
            </h2>
            <div className={styles.textList}>
              <p>🚀 I am a Software Engineer, I build "stuffs".</p>
              <p>🐣 Curious about averything.</p>
              <p>📚 Good autodidact skills, learning day after day.</p>
            </div>
          </DataCard>
        </div>

        <div className={styles.cardsContainer}>
          <Card cardFront="Want to know me better?" cardBack="You can have a look at my full CV on the CV Section!" />
        </div>

      </div>
    </Layout>
  );
}



type PropsData = {
  color: String;
  children: React.ReactNode;
};

function DataCard(props: PropsData) {
  return (
    <Paper elevation={3} className={styles.dataCard} style={{ backgroundColor: props.color }}>
      {props.children}
    </Paper>
  );
}
type Props = {
  cardFront: String;
  cardBack: String;
};
function Card(props: Props) {
  return (

    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      style={{ height: "fit-content" }}
    >
      <FrontSide style={{ borderRadius: "25px", height: "100%" }}>

        <div className={styles.presentationCardFront}>
          {props.cardFront}
        </div>

      </FrontSide>
      <BackSide
        style={{ borderRadius: "25px", backgroundColor: "#e8e8e8", height: "fit-content" }}
      >
        {props.cardBack}
      </BackSide>
    </Flippy >

  );
}