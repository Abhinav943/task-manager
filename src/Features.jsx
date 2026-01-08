import {
  LayoutDashboard,
  Bell,
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  Sparkles,
} from "lucide-react";

import './Feature.css'

export default function Features() {
  return (
    <section className="featuresSection fadeOnScroll">
      <div className="featuresShell">
        <div className="featuresHeader">
          <p className="featuresEyebrow">What you get</p>
          <h2 className="featuresTitle">A calmer way to manage your work</h2>
          <p className="featuresSubtitle">
            Thoughtfully designed tools that help you focus, reflect, and move
            forward — at your own pace.
          </p>
        </div>

        <div className="featuresGrid">
          <Feature
            icon={<LayoutDashboard />}
            title="Dashboard"
            text="A peaceful overview of your tasks, priorities, and progress — all in one place."
          />

          <Feature
            icon={<Bell />}
            title="Daily Reminders"
            text="Gentle nudges that keep you aligned, without overwhelming notifications."
          />

          <Feature
            icon={<ArrowUpRight />}
            title="Task Prioritization"
            text="Know exactly what deserves your attention — and what can wait."
          />

          <Feature
            icon={<BarChart3 />}
            title="Progress Tracking"
            text="Visual cues that help you see growth, not just completed checkboxes."
          />

          <Feature
            icon={<CalendarClock />}
            title="Flexible Scheduling"
            text="Plan for today, tomorrow, or someday — your workflow, your rhythm."
          />

          <Feature
            icon={<Sparkles />}
            title="Minimal & Distraction-Free"
            text="No clutter. No noise. Just space to think and get things done."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="featureCard">
      <div className="featureIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}