import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

import Styles from "./styles/PostItem.module.css"
import {Chip, Paper} from '@mui/material';
import {ProjectContent} from "../lib/projects";
import React from "react";


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
          <h2 className={Styles.overlayContent}>{project.title}</h2>
            <p style={{padding: "0 1rem"}}>{project.summary}</p>
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"0.5rem", justifyContent: "center"}}>
              {project.technologies.map((it, i) => (
                  <Chip label={it} color= "warning"/>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
