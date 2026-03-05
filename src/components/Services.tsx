import React, { useState } from 'react';
import '../styles/Services.scss';

const SERVICES_DATA = [
  {
    id: 'branding',
    title: 'Branding Identity',
    shortTitle: 'Branding Identity',
    description: 'We design brands, systems, and experiences that feel intentional from the first tap to the last interaction.',
    skills: [
      ['Identity Branding', 'UI Design', 'Art Direction', 'Interactive Design'],
      ['UX Design / Research', 'UX Copywriting', 'Creative Direction']
    ],
    animation: (
      <div className="animation-container brutal-branding">
        <div className="brutal-grid"></div>
        <div className="brutal-marquee-container top">
          <div className="brutal-marquee">
            <span>BRAND SYSTEM • IDENTITY • TYPOGRAPHY • BRAND SYSTEM • IDENTITY • TYPOGRAPHY •</span>
          </div>
        </div>
        <div className="brutal-typography">
          <div className="type-large">Aa</div>
          <div className="type-info">
            <div className="info-row">FONT: HELVETICA</div>
            <div className="info-row">WEIGHT: 900</div>
          </div>
        </div>
        <div className="brutal-badge">
          <svg viewBox="0 0 100 100" className="badge-star">
            <polygon points="50,5 61,35 95,35 68,55 78,85 50,65 22,85 32,55 5,35 39,35" />
          </svg>
          <span className="badge-text">100%</span>
        </div>
        <div className="brutal-marquee-container bottom">
          <div className="brutal-marquee reverse">
            <span>BRAND SYSTEM • IDENTITY • TYPOGRAPHY • BRAND SYSTEM • IDENTITY • TYPOGRAPHY •</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'web',
    title: 'Web Design & Development',
    shortTitle: 'Web Design & Dev',
    description: 'We build digital products, websites and web-applications that combine beautiful design with robust, scalable technology architecture.',
    skills: [
      ['Frontend Development', 'Backend Systems', 'CMS Integration', 'E-commerce'],
      ['Web Animations', 'Technical SEO', 'Performance Tuning']
    ],
    animation: (
      <div className="animation-container brutal-web">
        <div className="brutal-grid"></div>
        <div className="brutal-window">
          <div className="window-bar">
            <div className="window-controls">
              <div className="ctrl close"></div>
              <div className="ctrl min"></div>
              <div className="ctrl max"></div>
            </div>
            <div className="window-title">index.html</div>
          </div>
          <div className="window-content">
            <div className="wire-header"></div>
            <div className="wire-hero">
              <div className="wire-title"></div>
              <div className="wire-btn">CLICK</div>
            </div>
            <div className="wire-grid">
              <div className="wire-card"></div>
              <div className="wire-card"></div>
            </div>
          </div>
        </div>
        <div className="brutal-tag tag-1">{'<main>'}</div>
        <div className="brutal-tag tag-2">{'</main>'}</div>
      </div>
    )
  },
  {
    id: 'motion',
    title: 'Graphic & Motion Design',
    shortTitle: 'Motion Systems',
    description: 'We bring interfaces to life with purposeful motion design that guides attention, explains relationships, and delights users.',
    skills: [
      ['2D/3D Animation', 'Micro-interactions', 'Motion Systems', 'Video Production'],
      ['Lottie Animations', 'WebGL Experiences', 'Creative Direction']
    ],
    animation: (
      <div className="animation-container brutal-motion">
        <div className="brutal-grid"></div>
        <div className="brutal-frame">
          <div className="frame-corner tl"></div>
          <div className="frame-corner tr"></div>
          <div className="frame-corner bl"></div>
          <div className="frame-corner br"></div>
          
          <div className="motion-path">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline points="0,100 25,20 50,80 75,10 100,90" />
            </svg>
          </div>
          <div className="bouncing-ball"></div>
        </div>
        <div className="brutal-stats">
          <div className="stat">FPS: 60</div>
          <div className="stat">EASE: LINEAR</div>
        </div>
      </div>
    )
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getCardClass = (index: number) => {
    if (expandedIndex === null) return 'service-card default';
    if (expandedIndex === index) return 'service-card expanded';
    return 'service-card collapsed';
  };

  return (
    <section className={`services-grid ${expandedIndex !== null ? 'has-expanded' : ''}`} id="services">
      <div className="section-header">
        <div className="sh-label">
          <span>[ SERVICES & EXPERTISE ]</span>
        </div>
        <div className="sh-content">
          <h2>Digital Design Powerhouse</h2>
          <p>Over the last decade, we've refined a wide range of skills in digital design, offering services mastered to perfection and always driven by the purpose of motion.</p>
        </div>
      </div>

      <div className="cards-container">
        {SERVICES_DATA.map((service, index) => (
          <div key={service.id} className={getCardClass(index)} onClick={() => toggleCard(index)}>
            <div className="card-inner">

              <div className="expanded-content">
                <div className="expanded-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="skills-list">
                    {service.skills.map((col, cIdx) => (
                      <ul key={cIdx}>
                        {col.map((skill, sIdx) => (
                          <li key={sIdx}>→ {skill}</li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>

              <div className="animation-section">
                {service.animation}
                <div className="text-content default-title">
                  <h3>{service.title}</h3>
                </div>
              </div>

              <div className="collapsed-title">
                <span>{service.shortTitle}</span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
