import fs from "fs";
import path from "path";
import matter from "gray-matter";

const eventsDirectory = path.join(process.cwd(), "content/events");
const postsDirectory = path.join(process.cwd(), "content/posts");

export interface EventData {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  upcoming: boolean;
  content: string;
}

export interface PostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export function getAllEvents(): EventData[] {
  const fileNames = fs.readdirSync(eventsDirectory);
  const events = fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        title: data.title,
        date: data.date,
        time: data.time,
        location: data.location,
        description: data.description,
        upcoming: data.upcoming,
        content,
      } as EventData;
    });
  return events.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getUpcomingEvents(): EventData[] {
  return getAllEvents().filter((e) => e.upcoming);
}

export function getPastEvents(): EventData[] {
  return getAllEvents().filter((e) => !e.upcoming);
}

export function getEventBySlug(slug: string): EventData | undefined {
  const events = getAllEvents();
  return events.find((e) => e.slug === slug);
}

export function getAllPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author || "PAUG",
        excerpt: data.excerpt || "",
        content,
      } as PostData;
    });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): PostData | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}
