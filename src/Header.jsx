import { useEffect } from "react";
import logo from "./Assets/user-login.svg";
import headerimg from "./Assets/header-img.jpg";
import "./Header.css";
function Header() {
  useEffect(() => {
    const img = document.querySelector(".parallax-flower");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      img.style.transform = `translateY(${scrollY * 0.15}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="title">
        <img
          src={headerimg}
          id="headerImg"
          alt=""
          className="parallax-flower"
        />

        <div className="headerText">
          <p className="quote">“You are your best thing”</p>
          <h1 className="mainHeading">Welcome to the Task Manager</h1>
          <button className="headerBtn">Get Started</button>
        </div>
      </div>

      <div className="softDivider" />
    </>
  );
}

export default Header;
