import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import { SocialList } from "../../components/SocialList";

import styles from '../index.module.css';
import cn from 'classnames'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={styles.container}>
        <div>
          <div className={styles.pic}>
            <img src="/images/profile.jpg" alt="Profile picture" width="150" height="150"/>
          </div>

          <h1>
            projects!<span className={styles.fancy}></span>
          </h1>
          <span className={styles.handle}>@cdelgado23</span>
          <h2>I am setting up this place, come back later!</h2>
          <SocialList />
        </div>
      </div>
    </Layout>
  );
}