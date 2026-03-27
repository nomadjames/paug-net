import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found — PAUG" };
  return { title: `${post.title} — PAUG` };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = await markdownToHtml(post.content);

  return (
    <div className="container">
      <section className="page-section">
        <Link href="/blog" className="back-link">
          &larr; All Posts
        </Link>
        <h1 className="section-header">{post.title}</h1>
        <div className="card-meta" style={{ marginBottom: "2rem" }}>
          {post.date} // {post.author}
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>
    </div>
  );
}
