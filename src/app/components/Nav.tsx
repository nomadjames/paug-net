"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          PAUG_
        </Link>
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? "X" : "///"}
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link href="/events" onClick={() => setOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Join
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
