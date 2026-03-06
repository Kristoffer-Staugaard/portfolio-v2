import { useRef, useState, useEffect } from "react";
import { Framer, Figma, Code, Layout } from "lucide-react";
import "../styles/Projects.scss";

export default function Projects() {
  const callbuddyRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = callbuddyRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setCardHeight((entry.target as HTMLElement).offsetHeight);
      }
    });

    // Set initial height
    setCardHeight(el.offsetHeight);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-grid">
      {/* Project 1 */}
      <div className="project-card col-span-2" ref={callbuddyRef}>
        <div className="card-header">
          <div className="title-area">
            <Framer size={14} color="#737373" />
            <div className="label">
              <span className="type">Projekt</span>
              <span className="name">Callbuddy</span>
            </div>
          </div>
          <button className="info-btn">Info</button>
        </div>
        <div
          className="card-content bg-neutral-900"
          style={{ overflow: "hidden", padding: "2rem", perspective: "3000px" }}
        >
          {/* Mockup Template */}
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>

              <div className="mockup-ascii-decor">
                <img src="/projects/logos/callbuddy-logo.png" alt="Callbuddy Logo" className="mockup-logo" />
              </div>
            </div>
            <div className="mockup-content">
              {/* Replace src with your actual project screenshot */}
              <img
                src="/projects/callbuddy-mockup.png"
                alt="Callbuddy Project Screenshot"
                className="mockup-image"
                loading="lazy"
              />
              <div className="scanline-bar"></div>
            </div>
            <div className="mockup-footer">
              <span className="status">POWER</span>
              <span className="sys-info">MENU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <div className="card-header">
          <div className="title-area">
            <Figma size={14} color="#737373" />
            <div className="label">
              <span className="type">Projekt</span>
              <span className="name">Bookido</span>
            </div>
          </div>
          <button className="info-btn">Info</button>
        </div>
        <div className="card-content bg-neutral-900" style={{ overflow: "hidden", padding: "2rem", perspective: "1500px" }}>
          {/* Mobile Mockup Template */}
          <div className="mockup-mobile-container">
            <div className="mockup-mobile-header">
              <div className="mockup-notch"></div>
              <div className="mockup-mobile-status">
                <span className="time">
                  <img src="/projects/logos/bookido-logo.png" alt="Bookido Logo" className="mockup-logo" style={{ height: '8px' }} />
                </span>
                <span className="battery">{`BATT OK`}</span>
              </div>
            </div>
            <div className="mockup-mobile-content">
              {/* Replace src with your actual project screenshot */}
              <img
                src="/projects/bookido-mockup.png"
                alt="Bookido App Screenshot"
                className="mockup-image"
                loading="lazy"
              />
              <div className="scanline-bar"></div>
            </div>
            <div className="mockup-mobile-footer">
              <div className="home-indicator"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 Stack */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div className="project-card" style={{ flex: 1 }}>
          <div className="card-header">
            <div className="title-area">
              <Code size={14} color="#737373" />
              <div className="label">
                <span className="type">Projekt</span>
                <span className="name">AirPlate</span>
              </div>
            </div>
            <button className="info-btn">Info</button>
          </div>
          <div className="card-content bg-neutral-900" style={{ overflow: "hidden", padding: "1.5rem", perspective: "1500px" }}>
            {/* Mockup Template */}
            <div className="mockup-container" style={{ maxWidth: "100%", padding: "0.75rem" }}>
              <div className="mockup-header" style={{ padding: "0.25rem 0.75rem 1.5rem 0.75rem" }}>
                <div className="mockup-controls">
                  <span className="dot close"></span>
                  <span className="dot minimize"></span>
                  <span className="dot maximize"></span>
                </div>

                <div className="mockup-ascii-decor" style={{ fontSize: "0.6rem" }}>
                  <img src="/projects/logos/airplate-logo.png" alt="Airplate Logo" className="mockup-logo" />
                </div>
              </div>
              <div className="mockup-content">
                {/* Replace src with your actual project screenshot */}
                <img
                  src="/projects/airplate-mockup.png"
                  alt="AirPlate Project Screenshot"
                  className="mockup-image"
                  loading="lazy"
                />
                <div className="scanline-bar"></div>
              </div>
              <div className="mockup-footer" style={{ padding: "1rem 0 0.25rem 0", fontSize: "0.55rem" }}>
                <span className="status">POWER</span>
                <span className="sys-info">INPUT</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card" style={{ flex: 1 }}>
          <div className="card-header">
            <div className="title-area">
              <Layout size={14} color="#737373" />
              <div className="label">
                <span className="type">Projekt</span>
                <span className="name">Wellness by gitte</span>
              </div>
            </div>
            <button className="info-btn">Info</button>
          </div>
          <div className="card-content bg-neutral-900" style={{ overflow: "hidden", padding: "1.5rem", perspective: "1500px" }}>
            {/* Mockup Template */}
            <div className="mockup-container" style={{ maxWidth: "100%", padding: "0.75rem" }}>
              <div className="mockup-header" style={{ padding: "0.25rem 0.75rem 1.5rem 0.75rem" }}>
                <div className="mockup-controls">
                  <span className="dot close"></span>
                  <span className="dot minimize"></span>
                  <span className="dot maximize"></span>
                </div>

                <div className="mockup-ascii-decor">
                  <img src="/projects/logos/wellness-by-gitte-logo.png" alt="Wellness Logo" className="mockup-logo" />
                </div>
              </div>
              <div className="mockup-content">
                {/* Replace src with your actual project screenshot */}
                <img
                  src="/projects/wellness-by-gitte-mockup.png"
                  alt="Wellness by Gitte Project Screenshot"
                  className="mockup-image"
                  loading="lazy"
                />
                <div className="scanline-bar"></div>
              </div>
              <div className="mockup-footer" style={{ padding: "1rem 0 0.25rem 0", fontSize: "0.55rem" }}>
                <span className="status">POWER</span>
                <span className="sys-info">DEGAUSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project-card col-span-2" style={cardHeight ? { height: cardHeight } : undefined}>
        <div className="card-header">
          <div className="title-area">
            <Layout size={14} color="#737373" />
            <div className="label">
              <span className="type">Projekt</span>
              <span className="name">Gluds Café</span>
            </div>
          </div>
          <button className="info-btn">Info</button>
        </div>
        <div className="card-content bg-neutral-900" style={{ overflow: "hidden", padding: "2rem", perspective: "3000px" }}>
          {/* Mockup Template */}
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>

              <div className="mockup-ascii-decor">
                <img src="/projects/logos/gluds-cafe-logo.png" alt="Gluds Cafe Logo" className="mockup-logo" />
              </div>
            </div>
            <div className="mockup-content">
              {/* Replace src with your actual project screenshot */}
              <img
                src="/projects/gluds-cafe-mockup.png"
                alt="Gluds Cafe Project Screenshot"
                className="mockup-image"
                loading="lazy"
              />
              <div className="scanline-bar"></div>
            </div>
            <div className="mockup-footer">
              <span className="status">POWER</span>
              <span className="sys-info">VOL +</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="project-card col-span-2" style={cardHeight ? { height: cardHeight } : undefined}>
        <div className="card-header">
          <div className="title-area">
            <Code size={14} color="#737373" />
            <div className="label">
              <span className="type">Projekt</span>
              <span className="name">Justesen Artpack</span>
            </div>
          </div>
          <button className="info-btn">Info</button>
        </div>
        <div className="card-content bg-neutral-900" style={{ overflow: "hidden", padding: "2rem", perspective: "3000px" }}>
          {/* Mockup Template */}
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>

              <div className="mockup-ascii-decor">
                <img src="/projects/logos/justesen-logo.png" alt="Justesen Logo" className="mockup-logo" />
              </div>
            </div>
            <div className="mockup-content">
              {/* Replace src with your actual project screenshot */}
              <img
                src="/projects/justesen-artpack-mockup.png"
                alt="Justesen Artpack Project Screenshot"
                className="mockup-image"
                loading="lazy"
              />
              <div className="scanline-bar"></div>
            </div>
            <div className="mockup-footer">
              <span className="status">POWER</span>
              <span className="sys-info">CH +</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
