import { useEffect, useRef, useState } from "react";
import "./Footer.css";

function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
  }, []);

  const year = new Date().getFullYear();

  return (
    <section
      ref={footerRef}
      className={`footerSection ${visible ? "footer-visible" : ""}`}
    >
      <div className="footer">
        <h1>Softly powerful task management</h1>

        <p className="footerText">
          Enjoy the clarity of an uncluttered workspace. Organize your days —
          gently, intentionally, and beautifully.
        </p>

        <p className="footerReassurance">
          No clutter. No pressure. Just clarity.
        </p>

        <ul className="footerPromises">
          <li>Private by design</li>
          <li>Fast & distraction-free</li>
          <li>Built for focus</li>
        </ul>

        <button className="footerBtn">Get Started</button>

        <p className="footerClosing">Made with care, for thoughtful work.</p>
      </div>

      <div className="footerTab">
        <p>© {year} Taskly. All rights reserved.</p>
        <p>Terms · Privacy · Contact</p>

        <div className="footerIcons">
          <svg viewBox="0 0 16 16">
            <path d="M12.6.75h2.454L9.694 6.892 16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Z" />
          </svg>
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Footer;