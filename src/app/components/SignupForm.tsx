export default function SignupForm() {
  return (
    <div className="signup-section">
      <h3>Get on the list</h3>
      <p>
        Updates on meetups, workshops, and Pittsburgh electronic music
        news. No spam. Unsubscribe whenever.
      </p>
      {/* Replace the action URL with your real Mailchimp form action */}
      <form
        action="https://PLACEHOLDER.us1.list-manage.com/subscribe/post?u=PLACEHOLDER&id=PLACEHOLDER"
        method="post"
        className="signup-form"
        target="_blank"
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="your@email.com"
          required
          aria-label="Email address"
        />
        <button type="submit" className="btn-neon">
          Subscribe
        </button>
      </form>
    </div>
  );
}
