import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

import Styles from "./styles/Postitem.module.css"

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a className={Styles.anchor}>
        <img src={post.thumbnail}></img>

        <div className={Styles.content}>
          <Date date={parseISO(post.date)} />
          <h2 >{post.title}</h2>
          <p>{post.summary}</p>
        </div>
      </a>
    </Link>
  );
}
