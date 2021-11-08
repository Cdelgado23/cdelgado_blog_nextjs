import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

import Styles from "./styles/PostItem.module.css"
import { Paper } from '@mui/material';


type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug} >
      <a className={Styles.anchor}>
        <Paper elevation={3} className={Styles.paperCard} style={{transition: ".5s ease"}}>
          {
            post.thumbnail != null ?
              <img src={post.thumbnail} className={`${Styles.postImg}`} alt={post.title}/>
              :
              <div className={`${Styles.postImg} ${Styles.imgPlaceholder}`}/>
          }

          <div className={Styles.content}>
            <Date date={parseISO(post.date)} />
            <h2 >{post.title}</h2>
          </div>
        </Paper>
        <div className={Styles.overlay}>
          <div className={Styles.overlayText}>
          <h2 className={Styles.overlayContent}>{post.title}</h2>
            <p className={Styles.overlayContent}>{post.summary}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
