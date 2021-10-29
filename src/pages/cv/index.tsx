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
          <iframe src="CV_Carlos_Delgado_Guiberteau.pdf" width="100%" height="100%">
          </iframe>
      </div>
    </Layout>
  );
}