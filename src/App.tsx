import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import "./styles/FooterCta.scss";

export default function App() {
  return (
    <>
      <div className="grain-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Projects />
        <Services />
        <About />

        {/* Footer CTA */}
        <section className="footer-cta">
          <h2>
            Let's talk about a<br /> project together
          </h2>
          <a href="#contact" className="cta-btn">
            <span>Book a Call</span>
            <div className="img-container">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e15d2104-cd3b-440f-83f0-a3bd6ecf40c7_800w.png"
                alt="Profile"
              />
            </div>
          </a>
          <div className="footer-copy">© 2024 Staugaard Studio</div>
        </section>
      </main>
    </>
  );
}
