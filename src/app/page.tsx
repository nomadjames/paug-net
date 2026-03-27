import Link from "next/link";
import { getUpcomingEvents } from "@/lib/content";
import SignupForm from "./components/SignupForm";

export default function Home() {
  const upcoming = getUpcomingEvents();
  const nextEvent = upcoming.length > 0 ? upcoming[upcoming.length - 1] : null;

  return (
    <div className="container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>PAUG</h1>
          <p className="hero-sub">Pittsburgh Ableton User Group</p>
          <p className="hero-tagline">
            A community for electronic music producers, sound designers, and
            live performers in Pittsburgh. All skill levels. All genres. No
            gatekeeping.
          </p>
          <Link href="/contact" className="btn-neon" style={{ display: "inline-block" }}>
            Join Us
          </Link>
        </div>
      </section>

      <div className="glitch-line" />

      {/* Next Event */}
      {nextEvent && (
        <section>
          <div className="next-event">
            <h3>
              <Link href={`/events/${nextEvent.slug}`}>{nextEvent.title}</Link>
            </h3>
            <div className="next-event-meta">
              {nextEvent.date} // {nextEvent.time} // {nextEvent.location}
            </div>
            <p>{nextEvent.description}</p>
            <Link href={`/events/${nextEvent.slug}`} className="card-link" style={{ marginTop: "1rem" }}>
              Details &rarr;
            </Link>
          </div>
        </section>
      )}

      {/* What is PAUG */}
      <section className="page-section">
        <h2 className="section-header section-header--cyan">WTF is PAUG?</h2>
        <div className="about-text">
          <p>
            PAUG is a monthly meetup for anyone making music with Ableton Live
            in the Pittsburgh area. We get together, share what we&apos;re working
            on, learn new techniques, and make noise together.
          </p>
          <br />
          <p>
            Each month has a different focus &mdash; sound design, mixing, live
            performance, Max for Live, whatever the group wants to dig into.
            Sometimes it&apos;s structured workshops. Sometimes it&apos;s just people
            plugging in and jamming. It&apos;s always good.
          </p>
          <br />
          <p>
            Whether you just downloaded Ableton yesterday or you&apos;ve been
            producing for 15 years, you belong here.
          </p>
        </div>
        <Link href="/about" className="card-link">
          Learn More &rarr;
        </Link>
      </section>

      <div className="glitch-line" />

      {/* Signup */}
      <SignupForm />
    </div>
  );
}
