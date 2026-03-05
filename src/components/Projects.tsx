import { Framer, Figma, Code, Layout } from "lucide-react";
import "../styles/Projects.scss";

export default function Projects() {
  return (
    <section className="projects-grid">
      {/* Project 1 */}
      <div className="project-card col-span-2">
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
          style={{ overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.2,
              mixBlendMode: "overlay",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <h2
            style={{
              fontSize: "4rem",
              fontWeight: 600,
              fontStyle: "italic",
              color: "white",
              mixBlendMode: "overlay",
              zIndex: 10,
            }}
          >
            NOISE
          </h2>
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
        <div className="card-content bg-neutral-900">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
            alt="Bio"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(100%) contrast(125%)",
            }}
          />
        </div>
      </div>

      {/* Project 3 Stack */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          minHeight: "650px",
        }}
      >
        <div className="project-card" style={{ minHeight: "auto", flex: 1 }}>
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
          <div className="card-content bg-neutral-900">
            <div
              style={{
                width: "4.5rem",
                height: "4.5rem",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #222",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=300&q=80"
                alt="Album Art"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div className="project-card" style={{ minHeight: "auto", flex: 1 }}>
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
          <div className="card-content bg-black">
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80"
              alt="Movie Still"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.5,
              }}
            />
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project-card col-span-2">
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
        <div className="card-content bg-gray-card">
          <div
            style={{
              width: "90%",
              height: "90%",
              backgroundColor: "white",
              borderRadius: "0.75rem 0.75rem 0 0",
              padding: "1.5rem",
              alignSelf: "flex-end",
            }}
          >
            <div style={{ display: "flex", gap: "1.5rem", height: "100%" }}>
              <div
                style={{
                  width: "25%",
                  borderRight: "1px solid #f5f5f5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    backgroundColor: "black",
                    borderRadius: "0.375rem",
                  }}
                ></div>
                <div
                  style={{
                    height: "0.375rem",
                    width: "3rem",
                    backgroundColor: "#e5e5e5",
                    borderRadius: "0.25rem",
                  }}
                ></div>
                <div
                  style={{
                    height: "0.375rem",
                    width: "4rem",
                    backgroundColor: "black",
                    borderRadius: "0.25rem",
                  }}
                ></div>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #f5f5f5",
                    paddingBottom: "1rem",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.875rem", color: "#737373" }}>
                      Sales
                    </div>
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "black",
                      }}
                    >
                      624
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.875rem", color: "#737373" }}>
                      Gross volume
                    </div>
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: "black",
                      }}
                    >
                      $245,324
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="project-card col-span-2">
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
        <div className="card-content bg-dark-card">
          <div
            style={{
              width: "90%",
              height: "90%",
              backgroundColor: "#0a0a0a",
              borderRadius: "1rem 1rem 0 0",
              border: "1px solid rgba(255,255,255,0.1)",
              alignSelf: "flex-end",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "3rem",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                color: "white",
                textAlign: "center",
                maxWidth: "300px",
                marginBottom: "2rem",
              }}
            >
              Create the album cover you've always dreamed of
            </h3>
            <button
              style={{
                backgroundColor: "#dcfc3b",
                color: "black",
                padding: "0.5rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
              }}
            >
              CREATE FOR FREE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
