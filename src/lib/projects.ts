import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type ProjectContent = {
  readonly date: string;
  readonly title: string;
  readonly slug: string;
  readonly thumbnail?: string;
  readonly summary?: string;
  readonly fullPath: string;
};

let ProjectCache: ProjectContent[];

export function fetchProjectContent(): ProjectContent[] {
  if (ProjectCache) {
    return ProjectCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        date: string;
        title: string;
        tags: string[];
        slug: string;
        thumbnail: string;
        summary: string;
        fullPath: string,
      };
      matterData.fullPath = fullPath;

      const slug = fileName.replace(/\.mdx$/, "");

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          "slug field not match with the path of its content source"
        );
      }

      return matterData;
    });
  // Sort posts by date
    ProjectCache = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return ProjectCache;
}

export function countProjects(): number {
  return fetchProjectContent().length;
}

export function listProjectContent(
  page: number,
  limit: number
): ProjectContent[] {
  return fetchProjectContent()
    .slice((page - 1) * limit, page * limit);
}
