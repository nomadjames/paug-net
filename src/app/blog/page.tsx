import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export const metadata = {
  title: "Blog — PAUG",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container">
      <section className="page-section">
        <h1 className="section-header section-header--cyan">Blog</h1>

        {posts.length === 0 && (
          <p style={{ color: "var(--text-dim)" }}>No posts yet.</p>
        )}

        {posts.map((post) => (
          <div key={post.slug} className="card">
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <div className="card-meta">
              {post.date} // {post.author}
            </div>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="card-link">
              Read More &rarr;
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
