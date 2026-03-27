import SignupForm from "../components/SignupForm";

export const metadata = {
  title: "Join — PAUG",
};

export default function ContactPage() {
  return (
    <div className="container">
      <section className="page-section">
        <h1 className="section-header">Join PAUG</h1>
        <div className="about-text">
          <p>
            The easiest way to get involved is to sign up for the mailing list
            and show up to the next meetup. That&apos;s it. Bring your laptop,
            bring your headphones, bring your curiosity. We&apos;ll handle the rest.
          </p>
        </div>
      </section>

      <SignupForm />

      <section className="page-section">
        <h2 className="section-header section-header--cyan">Find Us</h2>
        <div className="social-links">
          <a href="#" className="social-link">
            Instagram
          </a>
          <a href="#" className="social-link">
            Discord
          </a>
          <a href="#" className="social-link">
            YouTube
          </a>
          <a href="mailto:hello@paug.net" className="social-link">
            Email
          </a>
        </div>
      </section>

      <div className="glitch-line" />

      <section className="page-section">
        <h2 className="section-header section-header--yellow">FAQ</h2>

        <div className="card">
          <h3>Do I need Ableton Live to join?</h3>
          <p>
            It helps, but no. If you&apos;re curious about electronic music
            production and want to learn, come hang out. You might leave with
            Ableton installed though.
          </p>
        </div>

        <div className="card">
          <h3>What skill level do I need?</h3>
          <p>
            Literally any. We&apos;ve had people attend their first meeting who
            had never opened a DAW. We&apos;ve also had people with decades of
            experience. Everyone gets something out of it.
          </p>
        </div>

        <div className="card">
          <h3>Is there a cost?</h3>
          <p>
            No. PAUG is free. We might pass a hat for venue costs occasionally,
            but there are no dues, no membership fees, no premium tiers.
          </p>
        </div>

        <div className="card">
          <h3>Where do you meet?</h3>
          <p>
            We&apos;ve been meeting at the Ace Hotel in East Liberty, but
            locations may rotate. Check the events page or mailing list for the
            latest.
          </p>
        </div>
      </section>
    </div>
  );
}
