import Link from "next/link";
import { getUpcomingEvents, getPastEvents } from "@/lib/content";

export const metadata = {
  title: "Events — PAUG",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <div className="container">
      <section className="page-section">
        <h1 className="section-header">Upcoming Events</h1>

        {upcoming.length === 0 && (
          <p style={{ color: "var(--text-dim)" }}>
            No upcoming events scheduled yet. Check back soon or join the
            mailing list to get notified.
          </p>
        )}

        {upcoming.map((event) => (
          <div key={event.slug} className="card event-card">
            <h3>
              <Link href={`/events/${event.slug}`}>{event.title}</Link>
            </h3>
            <div className="card-meta">
              {event.date} // {event.time} // {event.location}
            </div>
            <p>{event.description}</p>
            <Link href={`/events/${event.slug}`} className="card-link">
              Details &rarr;
            </Link>
          </div>
        ))}
      </section>

      <div className="glitch-line" />

      <section className="page-section">
        <h2 className="section-header section-header--pink">Past Events</h2>

        {past.length === 0 && (
          <p style={{ color: "var(--text-dim)" }}>No past events yet.</p>
        )}

        {past.map((event) => (
          <div key={event.slug} className="card event-card past">
            <h3>{event.title}</h3>
            <div className="card-meta">
              {event.date} // {event.time} // {event.location}
            </div>
            <p>{event.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
