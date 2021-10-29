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

    /*
    <Card sx={{ width: 300, height: 300 }}>
      <CardActionArea>
        {
          post.thumbnail!=null?
          <CardMedia
          component="img"
          height="150"
          image={post.thumbnail}
          alt={post.title}
          />
          :
          <CardMedia
          component="img"
          height="200"
          image="/images/green_placeholder.jpg"
          alt={post.title}
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {
              post.summary
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    */

    <Link href={"/posts/" + post.slug} >
      <a className={Styles.anchor}>
        <Paper elevation={3} className={Styles.paperCard}>
          {
            post.thumbnail != null ?
              <img src={post.thumbnail} className={`${Styles.postImg}`}></img>
              :
              <div className={`${Styles.postImg} ${Styles.imgPlaceholder}`}></div>
          }

          <div className={Styles.content}>
            <Date date={parseISO(post.date)} />
            <h2 >{post.title}</h2>
          </div>
        </Paper>
        <div className={Styles.overlay}>
          <div className={Styles.overlayText}>
          <h2 >{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        </div>
      </a>
    </Link>

  );
}
