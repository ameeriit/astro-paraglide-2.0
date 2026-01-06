import { m } from '../../paraglide/messages';

export default function AboutTitle() {
  return (
    <div>
      <h1 className="page-title">
        <span className="title-text">{m.about_title()}</span>
      </h1>

      <p className="page-subtitle">
        {m.about_subtitle()}
      </p>

      <style>{`
        .page-title {
         font-size: clamp(3rem, 8vw, 5rem);
    font-weight: 800;
    margin: 0 0 1rem;
    text-align: center;
    animation: fadeInUp 1s ease-out 0.2s backwards;
        }
        .title-text {
          background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .page-subtitle {
           font-size: clamp(1.1rem, 3vw, 1.5rem);
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    margin-bottom: 4rem;
    font-weight: 300;
    animation: fadeInUp 1s ease-out 0.4s backwards;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
