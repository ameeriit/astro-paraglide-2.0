import getRoutes from '../routes/routes';

export default function GoToAboutPageButton() {
  const routes = getRoutes();

  return (
    <>
      <a className="button button-secondary" href={routes.about}>
        <span>Go to About Page</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <style>{`
        .button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .button:hover::before {
          left: 100%;
        }

        .button svg {
          transition: transform 0.3s ease;
        }

        .button:hover svg {
          transform: translateX(4px);
        }

        .button-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .button-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}
