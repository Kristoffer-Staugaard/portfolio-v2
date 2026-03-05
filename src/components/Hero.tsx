import { useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import "../styles/Hero.scss";

export default function Hero() {
  useEffect(() => {
    // Load UnicornStudio script
    if (!(window as any).UnicornStudio) {
      (window as any).UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (!(window as any).UnicornStudio.isInitialized) {
          (window as any).UnicornStudio.init();
          (window as any).UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (
      !(window as any).UnicornStudio.isInitialized &&
      (window as any).UnicornStudio.init
    ) {
      (window as any).UnicornStudio.init();
      (window as any).UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" data-container-bg="true">
        <div
          data-us-project="qF3qXhdiOxdUeQYH8wCK"
          className="unicorn-bg"
        ></div>
      </div>

      <div className="hero-content">
        <div className="badge">[ WEBDESIGN TIL SMV'er ]</div>

        <h1>Hjemmesider der skaber værdi</h1>

        <p>
          Jeg skaber skræddersyet webdesign til ambitiøse virksomheder, der vil
          vinde markedet. Jeg designer din digitale tilstedeværelse med afsæt i
          dine forretningsmål.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Book gratis sparring
            <ArrowRight size={14} strokeWidth={1.5} />
          </a>
          <a href="#contact" className="btn-secondary">
            Se cases
            <ArrowRight size={14} strokeWidth={1.5} />
          </a>
        </div>

        <div className="scroll-indicator">
          Scroll for mere <ArrowDown size={16} strokeWidth={1.5} />
        </div>
      </div>

      <div className="hero-visuals">
        <div className="blob-1"></div>
        <div className="blob-2"></div>

        <div className="composition">
          <div className="stat-card-1">
            <div className="card-inner">
              <div className="icon-box">★</div>
              <div className="text-box">
                <div className="label">Erfaring</div>
                <div className="value">+5 år i branchen</div>
              </div>
            </div>
          </div>

          <div className="stat-card-2">
            <div className="card-inner">
              <div className="avatars">
                <div className="avatar">JP</div>
                <div className="avatar">AS</div>
                <div className="avatar more">+4</div>
              </div>
              <div className="text-box">
                <div className="label">Erfaring</div>
                <div className="value">+10 live projekter</div>
              </div>
            </div>
          </div>

          <div className="main-card">
            <div className="gradient-overlay"></div>

            <div className="code-overlay">
              <div className="inner">{"</>"}</div>
            </div>

            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e15d2104-cd3b-440f-83f0-a3bd6ecf40c7_800w.png"
              alt="Kristoffer Staugaard"
            />

            <div className="card-content">
              <div className="status">
                <span className="dot"></span>
                Tilgængelig
              </div>
              <div className="info-row">
                <div>
                  <h3>Kristoffer Staugaard</h3>
                  <p>Web Designer</p>
                </div>
                <div className="arrow-btn">↗</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
