import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

import styles from './index.module.css';
import cn from 'classnames'
import Image from 'next/image'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={styles.container}>
        <div>
          <div className={styles.pic}>
            <Image 
              src="/images/profile.jpg" // Route of the image file
              height={150} // Desired size with correct aspect ratio
              width={150} // Desired size with correct aspect ratio
              alt="Your Name"
            />
          </div>


          <h1>
            Hi, I am Carlos!<span className={styles.fancy}></span>
          </h1>
          <span className={styles.handle}>@cdelgado23</span>
          <h2>I am setting up this place, come back later!</h2>
          <SocialList />
        </div>
      </div>
    </Layout>
  );
}
