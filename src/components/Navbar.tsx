import { ArrowRight } from "lucide-react";
import "../styles/Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          <span>Staugaard Studio</span>
        </a>

        <div className="nav-links">
          <a href="#projects">Cases</a>
          <a href="/#proces">Proces</a>
          <a href="/#services">Services</a>
          <a href="#testimonials">Reviews</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="book-btn">
            Book gratis sparring <ArrowRight size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </nav>
  );
}
