import Link from "next/link";
import { getAllEvents, getEventBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found — PAUG" };
  return { title: `${event.title} — PAUG` };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const contentHtml = await markdownToHtml(event.content);

  return (
    <div className="container">
      <section className="page-section">
        <Link href="/events" className="back-link">
          &larr; All Events
        </Link>
        <h1 className="section-header">{event.title}</h1>
        <div className="card-meta" style={{ marginBottom: "2rem" }}>
          {event.date} // {event.time} // {event.location}
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>
    </div>
  );
}
