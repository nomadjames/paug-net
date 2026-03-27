import Link from "next/link";
import SignupForm from "../components/SignupForm";

export const metadata = {
  title: "About — PAUG",
};

export default function AboutPage() {
  return (
    <div className="container">
      <section className="page-section">
        <h1 className="section-header section-header--yellow">About PAUG</h1>
        <div className="about-text">
          <p>
            The Pittsburgh Ableton User Group (PAUG) was founded in 2026 by
            three producers who were tired of making music alone. The idea was
            simple: get people in a room, open their laptops, and learn from
            each other.
          </p>
          <br />
          <p>
            We meet monthly at various venues around Pittsburgh. Each session
            has a theme: sound design, mixing, live performance, Max for
            Live, sampling, whatever the community wants to explore. But the
            real value isn&apos;t the curriculum. It&apos;s the connections.
          </p>
          <br />
          <p>
            PAUG is genre-agnostic and skill-agnostic. Ambient, techno,
            hip-hop, experimental noise. If you make it in Ableton, you
            belong here. First-timers sit next to veterans. Everyone teaches,
            everyone learns.
          </p>
          <br />
          <p>
            No dues. No gatekeeping. No corporate sponsorship. Just
            people making sounds together in Pittsburgh.
          </p>
        </div>
      </section>

      <div className="glitch-line" />

      <section className="page-section">
        <h2 className="section-header section-header--pink">Founders</h2>
        <div className="founders-grid">
          <div className="founder-card">
            <div className="founder-avatar">PM</div>
            <h3>Paul Miller</h3>
            <p>
              Associate Professor of music theory at Duquesne University,
              violist, and director of the soundLab. Studied with Stockhausen,
              builds electronic instruments, and somehow still finds time to
              jam in Ableton.
            </p>
            <a href="https://theoryofpaul.net" className="founder-link">
              theoryofpaul.net &rarr;
            </a>
          </div>

          <div className="founder-card">
            <div className="founder-avatar">SK</div>
            <h3>Steve Knots</h3>
            <p>
              Multi-instrumentalist and Ableton power user. If there&apos;s a
              shortcut key for it, Steve knows it. Probably mapped it to a MIDI
              controller too.
            </p>
            <a href="https://mixitecture.com" className="founder-link">
              mixitecture.com &rarr;
            </a>
          </div>

          <div className="founder-card">
            <div className="founder-avatar">JD</div>
            <h3>James Dishman</h3>
            <p>
              UX designer, producer, and sound design nerd. Has strong opinions
              about sidechain compression and will share them whether you ask or
              not.
            </p>
            <a href="https://nomadjames.com" className="founder-link">
              nomadjames.com &rarr;
            </a>
          </div>
        </div>
      </section>

      <div className="glitch-line" />

      <SignupForm />
    </div>
  );
}
