import './Card.css';
import { t } from '../../translations';

function Card({ name, description, image, language }) {
  return (
    <div className="card-container">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card card-front">
          <div className="card-photo-wrapper">
            <img src={image} alt={name} className="card-photo" />
          </div>
          <h1 className="card-title">{name}</h1>
          <p className="card-description">{description}</p>
        </div>

        {/* Back Side */}
        <div className="card card-back">
          <h2 className="card-back-title">{t('connectWithMe', language)}</h2>
          <div className="social-links">
            <a href="https://github.com/alievbaxtiyor" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fi fi-brands-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/baxtiyor-aliyev-8634482b0" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fi fi-brands-linkedin"></i>
            </a>
            <a href="https://t.me/alievbaxtiyor" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fi fi-brands-telegram"></i>
            </a>
            <a href="https://instagram.com/baxtiyor.dev" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fi fi-brands-instagram"></i>
            </a>
            <a href="mailto:alievbakhtiyorr@gmail.com" className="social-link">
              <i className="fi fi-rr-envelope"></i>
            </a>
          </div>
          <p className="card-back-hint">{t('hoverHint', language)}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
