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
          className="card-content bg-orange-card"
          style={{ overflow: "hidden", padding: "2rem", perspective: "1500px" }}
        >
          {/* Mockup Template */}
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>
              <div className="mockup-title">
                {`// mockup_ver_1.0`}
              </div>
              <div className="mockup-ascii-decor">
                {`[ + - x ]`}
              </div>
            </div>
            <div className="mockup-content">
              {/* Replace src with your actual project screenshot */}
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Project Screenshot Mockup"
                className="mockup-image"
              />
            </div>
            <div className="mockup-footer">
              <span className="status">STATUS: OK</span>
              <span className="sys-info">SYS. 0xA1F</span>
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
                <span className="time">09:41</span>
                <span className="battery">{`[||||]`}</span>
              </div>
            </div>
            <div className="mockup-mobile-content">
              {/* Replace src with your actual project screenshot */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                alt="Bookido App Screenshot Mockup"
                className="mockup-image"
              />
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
            <div className="mockup-container" style={{ maxWidth: "100%" }}>
              <div className="mockup-header" style={{ padding: "0.25rem 0.75rem" }}>
                <div className="mockup-controls">
                  <span className="dot close"></span>
                  <span className="dot minimize"></span>
                  <span className="dot maximize"></span>
                </div>
                <div className="mockup-title" style={{ fontSize: "0.6rem" }}>
                  {`// airplate`}
                </div>
                <div className="mockup-ascii-decor" style={{ fontSize: "0.6rem" }}>
                  {`[ - ]`}
                </div>
              </div>
              <div className="mockup-content">
                {/* Replace src with your actual project screenshot */}
                <img
                  src="https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=800&q=80"
                  alt="AirPlate Screenshot Mockup"
                  className="mockup-image"
                />
              </div>
              <div className="mockup-footer" style={{ padding: "0.25rem 0.75rem", fontSize: "0.55rem" }}>
                <span className="status" style={{ color: "#27c93f" }}>ST: LIVE</span>
                <span className="sys-info">S.0x1</span>
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
          <div className="card-content bg-black" style={{ overflow: "hidden", padding: "1.5rem", perspective: "1500px" }}>
            {/* Mockup Template */}
            <div className="mockup-container" style={{ maxWidth: "100%" }}>
              <div className="mockup-header" style={{ padding: "0.25rem 0.75rem" }}>
                <div className="mockup-controls">
                  <span className="dot close"></span>
                  <span className="dot minimize"></span>
                  <span className="dot maximize"></span>
                </div>
                <div className="mockup-title" style={{ fontSize: "0.6rem" }}>
                  {`// wellness`}
                </div>
                <div className="mockup-ascii-decor" style={{ fontSize: "0.6rem" }}>
                  {`~ * ~`}
                </div>
              </div>
              <div className="mockup-content">
                {/* Replace src with your actual project screenshot */}
                <img
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
                  alt="Wellness by Gitte Screenshot Mockup"
                  className="mockup-image"
                />
              </div>
              <div className="mockup-footer" style={{ padding: "0.25rem 0.75rem", fontSize: "0.55rem" }}>
                <span className="status" style={{ color: "#ff5f56" }}>ST: MNTN</span>
                <span className="sys-info">S.0x2</span>
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
        <div className="card-content bg-gray-card" style={{ overflow: "hidden", padding: "2rem", perspective: "1500px" }}>
          {/* Mockup Template */}
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>
              <div className="mockup-title">
                {`// mockup_gluds_cafe_1.0`}
              </div>
              <div className="mockup-ascii-decor">
                {`< * / >`}
              </div>
            </div>
            <div className="mockup-content">
              {/* Replace src with your actual project screenshot */}
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                alt="Gluds Cafe Screenshot Mockup"
                className="mockup-image"
              />
            </div>
            <div className="mockup-footer">
              <span className="status" style={{ color: "#ffbd2e" }}>STATUS: CACHED</span>
              <span className="sys-info">SYS. 0xB2C</span>
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
        <div className="card-content bg-dark-card" style={{ overflow: "hidden", padding: "2rem", perspective: "1500px" }}>
          {/* Mockup Template */}
          <div className="mockup-container">
            <div className="mockup-header">
              <div className="mockup-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot maximize"></span>
              </div>
              <div className="mockup-title">
                {`// mockup_justesen_artpack_v1.0`}
              </div>
              <div className="mockup-ascii-decor">
                {`{ : : }`}
              </div>
            </div>
            <div className="mockup-content">
              {/* Replace src with your actual project screenshot */}
              <img
                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80"
                alt="Justesen Artpack Screenshot Mockup"
                className="mockup-image"
              />
            </div>
            <div className="mockup-footer">
              <span className="status" style={{ color: "#dcfc3b" }}>STATUS: ACTIVE</span>
              <span className="sys-info">SYS. 0xC1D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
