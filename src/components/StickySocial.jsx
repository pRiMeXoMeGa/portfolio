import { github, linkedin, cv } from "../assets";

const socialLinks = [
  {
    id: "resume",
    label: "Resume",
    icon: cv,
    href: "https://drive.google.com/uc?export=download&id=1tLISNO3bSREZ8XKwy3oiFcC3Li0DWkKh",
    ariaLabel: "Download Resume",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: linkedin,
    href: "https://www.linkedin.com/in/aqib-workspace/",
    ariaLabel: "Visit LinkedIn Profile",
  },
  {
    id: "github",
    label: "GitHub",
    icon: github,
    href: "https://github.com/pRiMeXoMeGa",
    ariaLabel: "Visit GitHub Profile",
  },
];

const StickySocial = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');

        .sticky-social-dock {
          position: fixed;
          z-index: 50;
          bottom: 2rem;
          right: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }

        .sticky-social-dock::after {
          content: '';
          display: block;
          width: 1px;
          height: 3rem;
          background: linear-gradient(to bottom, rgba(255,255,255,0.15), transparent);
          margin-top: 0.25rem;
        }

        .social-btn {
          position: relative;
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(15, 15, 20, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          outline: none;
          overflow: visible;
        }

        .social-btn img {
          width: 30px;
          height: 30px;
          object-fit: contain;
          filter: brightness(0.75) saturate(0);
          transition: filter 0.2s ease, transform 0.2s ease;
        }

        .social-btn:hover {
          transform: translateX(-4px) scale(1.08);
          background: rgba(25, 25, 35, 0.95);
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow:
            0 8px 24px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .social-btn:hover img {
          filter: brightness(1) saturate(1);
          transform: scale(1.1);
        }

        .social-btn:active {
          transform: translateX(-2px) scale(0.97);
          transition-duration: 0.1s;
        }

        /* Tooltip */
        .social-btn .tooltip {
          position: absolute;
          right: calc(100% + 10px);
          top: 50%;
          transform: translateY(-50%) translateX(4px);
          background: rgba(10, 10, 15, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 8px;
          border-radius: 5px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .social-btn .tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 4px solid transparent;
          border-left-color: rgba(255, 255, 255, 0.1);
        }

        .social-btn:hover .tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* Entrance animation */
        @keyframes slideInDock {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .social-btn:nth-child(1) { animation: slideInDock 0.4s cubic-bezier(0.34, 1.4, 0.64, 1) 0.1s both; }
        .social-btn:nth-child(2) { animation: slideInDock 0.4s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s both; }
        .social-btn:nth-child(3) { animation: slideInDock 0.4s cubic-bezier(0.34, 1.4, 0.64, 1) 0.3s both; }

        /* Active glow per button */
        .social-btn[data-id="resume"]:hover {
          box-shadow:
            0 8px 24px rgba(0, 0, 0, 0.4),
            0 0 12px rgba(99, 202, 183, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .social-btn[data-id="linkedin"]:hover {
          box-shadow:
            0 8px 24px rgba(0, 0, 0, 0.4),
            0 0 12px rgba(10, 102, 194, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .social-btn[data-id="github"]:hover {
          box-shadow:
            0 8px 24px rgba(0, 0, 0, 0.4),
            0 0 12px rgba(200, 200, 200, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="sticky-social-dock" role="navigation" aria-label="Social links">
        {socialLinks.map(({ id, label, icon, href, ariaLabel }) => (
          <button
            key={id}
            data-id={id}
            className="social-btn"
            aria-label={ariaLabel}
            onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
          >
            <img src={icon} alt={label} />
            <span className="tooltip">{label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default StickySocial;