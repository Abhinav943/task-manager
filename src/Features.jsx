import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard,
  Bell,
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  Sparkles,
} from "lucide-react";
import "./Feature.css"; 

export default function Features() {
  const ref = useRef(null);
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      text: "A gentle overview of your tasks, priorities, and progress — all in one place.",
    },
    {
      icon: Bell,
      title: "Daily Reminders",
      text: "Soft nudges that help you stay on track without overwhelming you.",
    },
    {
      icon: ArrowUpRight,
      title: "Task Prioritization",
      text: "Understand what matters most and move forward with clarity.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      text: "See how small steps compound into meaningful progress.",
    },
    {
      icon: CalendarClock,
      title: "Flexible Scheduling",
      text: "Plan tasks for today, tomorrow, or someday — your pace, your flow.",
    },
    {
      icon: Sparkles,
      title: "Minimal & Calm",
      text: "No clutter. No noise. Just a peaceful space to focus.",
    },
  ];

  return (
    <section ref={ref} className={`features ${visible ? "show" : ""}`}>
      <div className="featuresHeader">
        <span className="eyebrow">WHAT YOU GET</span>
        <h2>A calm, thoughtful way to manage work</h2>
        <p>Designed to feel gentle, focused, and quietly powerful.</p>
      </div>

      <div className="featuresGrid">
        {features.map((f, i) => (
          <Feature key={i} index={i} {...f} />
        ))}
      </div>

      <div className="sectionTransition" />
    </section>
  );
}

function Feature({ icon: Icon, title, text, index }) {
  return (
    <div
      className="featureCard"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="iconWrap">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
