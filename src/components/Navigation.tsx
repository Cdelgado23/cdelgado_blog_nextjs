import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

import styles from './styles/Navigation.module.css';
import cn from 'classnames'

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);


  return (
    <ul className= {styles.nav_collection}>
      <li >
        <Link href="/">

          <a className={cn({
            [styles.active]: router.pathname === "/"
          })}
          >
            about
          </a>
        </Link>
      </li>
      <li >
        <Link href="/posts">
          <a
            className={cn({
              [styles.active]: router.pathname.startsWith("/posts")
            })}
          >
            blog
          </a>
        </Link>
      </li>
    </ul>
  );
}
