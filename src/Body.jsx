import bodyImage from "./Assets/body-img.png";
import { useEffect } from "react";
import "./Body.css";
function Body() {
    useEffect(() => {
      const elements = document.querySelectorAll(".fadeOnScroll");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, []);

  return (
    <>
      <section className="bodySection fadeOnScroll">
        <div className="bodyShell">
          <div className="bodyGrid">
            {/* TEXT */}
            <div className="bodyTextBlock">
              <p className="bodyQuote">
                Small steps, done consistently,
                <br />
                change everything.
              </p>

              <p className="bodyText">
                Your task manager isn’t just a list — it’s a quiet space to
                think, prioritize, and move forward with intention.
              </p>

              <p className="bodyText muted">
                Sign in to begin organizing your days with clarity and calm.
              </p>

              <button className="signInBtn">Sign In to Continue</button>
            </div>

            {/* IMAGE */}
            <div className="bodyImageWrapper">
              <img src={bodyImage} alt="Calm workspace" className="bodyImage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
