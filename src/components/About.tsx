import React, { lazy, Suspense, useRef, useState, useEffect } from "react";
import { Star, Figma, Framer, Github, Code, Layout, Box } from "lucide-react";
import "../styles/About.scss";

// Lazy-load the globe: defers cobe + d3-geo + topojson until needed
const InteractiveGlobe = lazy(() => import("./InteractiveGlobe"));

// Wrapper that only mounts children once the element enters the viewport
function LazyVisible({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading 200px before entering viewport
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{visible ? children : (fallback || null)}</div>;
}

export default function About() {
  return (
    <section className="about-grid">
      <div className="section-header">
        <div className="sh-label">
          <span>[ REVIEWS & TOOLKIT ]</span>
        </div>
        <div className="sh-content">
          <h2>Lidt om Staugaard Studio</h2>
          <p>
            Jeg er passioneret omkring digitalt håndværk og stræber efter at
            levere skræddersyede løsninger, der skiller sig ud. Med base i
            Danmark arbejder jeg med kunder over hele verden for at bringe deres
            visioner til live.
          </p>
        </div>
      </div>
      {/* Block 1: Testimonial */}
      <div className="testimonial-block">
        <div className="static-card">
          <div className="badge">
            <span className="dot"></span>
            <span>Reviews</span>
          </div>
          <h2>STAUGAARD</h2>
          <p>
            Building digital experiences
            <br />
            that drive growth
          </p>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <p className="review-count">56+ reviews</p>
        </div>

        <div className="marquee-area">
          <div className="fade-left"></div>
          <div className="fade-right"></div>

          <div className="marquee-scroll">
            {/* Group 1 */}
            <div className="marquee-group">
              <div className="review-card">
                <div className="quotes">
                  <div></div>
                  <div></div>
                </div>
                <p>
                  "Kristoffer didn't just deliver a visual identity, he captured
                  our mission in every pixel. The process was collaborative,
                  insightful, and creatively sharp. We've never felt more
                  confident in our brand."
                </p>
                <div className="author">
                  <img
                    src="https://i.pravatar.cc/150?img=47"
                    alt="Jenna Morales"
                    loading="lazy"
                  />
                  <div>
                    <p className="name">Jenna Morales</p>
                    <p className="role">Marketing Director</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="quotes">
                  <div></div>
                  <div></div>
                </div>
                <p>
                  "Working with Staugaard Studio was like having an in-house
                  design team. They understood our product's core value
                  proposition from day one. The new website helped us triple our
                  conversion rate in the first month."
                </p>
                <div className="author">
                  <img
                    src="https://i.pravatar.cc/150?img=11"
                    alt="David Chen"
                  />
                  <div>
                    <p className="name">David Chen</p>
                    <p className="role">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="quotes">
                  <div></div>
                  <div></div>
                </div>
                <p>
                  "The attention to detail and strategic thinking they brought
                  to the table completely transformed our digital presence. Our
                  engagement metrics have been climbing steadily since launch."
                </p>
                <div className="author">
                  <img
                    src="https://i.pravatar.cc/150?img=32"
                    alt="Sarah Jenkins"
                  />
                  <div>
                    <p className="name">Sarah Jenkins</p>
                    <p className="role">Product Lead</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Group 2 (Duplicate) */}
            <div className="marquee-group" aria-hidden="true">
              <div className="review-card">
                <div className="quotes">
                  <div></div>
                  <div></div>
                </div>
                <p>
                  "Kristoffer didn't just deliver a visual identity, he captured
                  our mission in every pixel. The process was collaborative,
                  insightful, and creatively sharp. We've never felt more
                  confident in our brand."
                </p>
                <div className="author">
                  <img
                    src="https://i.pravatar.cc/150?img=47"
                    alt="Jenna Morales"
                    loading="lazy"
                  />
                  <div>
                    <p className="name">Jenna Morales</p>
                    <p className="role">Marketing Director</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="quotes">
                  <div></div>
                  <div></div>
                </div>
                <p>
                  "Working with Staugaard Studio was like having an in-house
                  design team. They understood our product's core value
                  proposition from day one. The new website helped us triple our
                  conversion rate in the first month."
                </p>
                <div className="author">
                  <img
                    src="https://i.pravatar.cc/150?img=11"
                    alt="David Chen"
                    loading="lazy"
                  />
                  <div>
                    <p className="name">David Chen</p>
                    <p className="role">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="quotes">
                  <div></div>
                  <div></div>
                </div>
                <p>
                  "The attention to detail and strategic thinking they brought
                  to the table completely transformed our digital presence. Our
                  engagement metrics have been climbing steadily since launch."
                </p>
                <div className="author">
                  <img
                    src="https://i.pravatar.cc/150?img=32"
                    alt="Sarah Jenkins"
                    loading="lazy"
                  />
                  <div>
                    <p className="name">Sarah Jenkins</p>
                    <p className="role">Product Lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: Location */}
      <div className="location-block">
        <div className="location-inner">
          <div className="text-header">
            <h3>Baseret i Danmark</h3>
            <div className="badge">
              <span className="dot"></span>
              <span>Tilgængelig overalt</span>
            </div>
          </div>
          <div className="globe-visual" style={{ pointerEvents: 'auto' }}>
            <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '1/1' }}>
              <LazyVisible>
                <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
                  <InteractiveGlobe
                    theta={0.3}
                    dark={1}
                    diffuse={1}
                    mapSamples={16000}
                    mapBrightness={1.8}
                    baseColor={[0.30196078431372547, 0.30196078431372547, 0.30196078431372547]}
                    markerColor={[1, 0.23529411764705882, 0.10196078431372549]}
                    glowColor={[0, 0, 0]}
                    markers={[
                      {
                        location: [55.5072, 11.1276],
                        size: 0.14,
                        label: "Slagelse, DK"
                      }
                    ]}
                    scale={1}
                    offset={[0, 0]}
                    rotationSpeed={0.005}
                    dragSensitivity={0.005}
                    enableFadeMask={true}
                    showGraticule={true}
                    graticuleColor="#ffffff"
                    graticuleOpacity={0.1}
                    graticuleScale={0.8}
                    showLandOutline={true}
                    landOutlineColor="#ffffff"
                    landOutlineOpacity={1}
                    landOutlineScale={0.8}
                    pulseMarkers={true}
                  />
                </Suspense>
              </LazyVisible>
            </div>
          </div>
          <div className="gradient-fade"></div>
        </div>
      </div>

      {/* Block 3: Toolbox */}
      <div className="toolbox-block">
        <div className="title-area">
          <h3>Digital Værktøjskasse</h3>
          <p>Design & Udvikling stack</p>
        </div>
        <div className="icons-area">
          <div className="fade-left"></div>
          <div className="fade-right"></div>
          <div className="icons-scroll">
            <div className="icon-box">
              <Figma size={22} />
            </div>
            <div className="icon-box">
              <Layout size={22} />
            </div>
            <div className="icon-box">
              <Framer size={22} />
            </div>
            <div className="icon-box">
              <Code size={22} />
            </div>
            <div className="icon-box">
              <Box size={22} />
            </div>
            <div className="icon-box">
              <Github size={22} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
