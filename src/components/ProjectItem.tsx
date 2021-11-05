import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

import Styles from "./styles/PostItem.module.css"
import { Paper } from '@mui/material';
import {ProjectContent} from "../lib/projects";


type Props = {
  project: ProjectContent;
};
export default function ProjectItem({ project }: Props) {
  return (
    <Link href={"/projects/" + project.slug} >
      <a className={Styles.anchor}>
        <Paper elevation={3} className={Styles.paperCard}>
          {
            project.thumbnail != null ?
              <img src={project.thumbnail} className={`${Styles.postImg}`}/>
              :
              <div className={`${Styles.postImg} ${Styles.imgPlaceholder}`}/>
          }

          <div className={Styles.content}>
            <Date date={parseISO(project.start_date)} />
            <h2 >{project.title}</h2>
          </div>
        </Paper>
        <div className={Styles.overlay}>
          <div className={Styles.overlayText}>
          <h2 >{project.title}</h2>
            <p>{project.summary}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
