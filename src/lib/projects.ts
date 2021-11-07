import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";

const projectsDirectory = path.join(process.cwd(), "content/projects");


export type ProjectContent = {
    readonly slug: string;
    readonly title: string;
    readonly thumbnail?: string;
    readonly summary?: string;
    readonly start_date: string;
    readonly end_date: string;
    readonly repository: string;
    readonly technologies?: string[];
    readonly related_posts?: string[];
    readonly fullPath: string;
};

let projectCache: ProjectContent[];

export function fetchProjectContent(): ProjectContent[] {
    if (projectCache) {
        return projectCache;
    }
    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectData = fileNames
        .filter((it) => it.endsWith(".mdx"))
        .map((fileName) =>{
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents, {
                engines: {
                    yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
                },
            });
            const matterData = matterResult.data as {
                slug: string;
                title: string;
                thumbnail: string;
                summary: string;
                start_date: string;
                end_date: string;
                repository: string;
                technologies: string[];
                related_posts: string[];
                fullPath: string;
            };
            matterData.fullPath = fullPath;
            const slug = fileName.replace(/\.mdx$/, "");

            // Validate slug string
            if (matterData.slug !== slug) {
                console.warn("\n Path slug: " + slug + " != " + "slug in file" + matterData.slug);
                console.warn("Maybe the slug changed in the file content, but the filename remained the same.");
                console.warn("If that is the case, try to rename the file to match the slug stored in the file.");
                throw new Error(
                    "slug field not match with the path of its content source"
                );
            }
            return matterData;
        });
    // Sort posts by date
    projectCache = allProjectData.sort((a, b) => {
        if (a.start_date < b.start_date) {
            return 1;
        } else {
            return -1;
        }
    });
    return projectCache;

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