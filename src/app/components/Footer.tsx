export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          PAUG &mdash; Pittsburgh Ableton User Group &mdash;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
