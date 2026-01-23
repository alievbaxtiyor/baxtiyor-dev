import './Card.css';

function Card({ name, description, image }) {
  return (
    <div className="card">
      <div className="card-photo-wrapper">
        <img src={image} alt={name} className="card-photo" />
        <div className="deco-line deco-line-1"></div>
        <div className="deco-line deco-line-2"></div>
      </div>
      <h1 className="card-title">{name}</h1>
      <p className="card-description">{description}</p>
      <div className="card-socials">
        <a href="#"><i className="fi fi-rr-basketball"></i></a>
        <a href="#"><i className="fi fi-brands-twitter"></i></a>
        <a href="#"><i className="fi fi-brands-instagram"></i></a>
        <a href="#"><i className="fi fi-brands-youtube"></i></a>
      </div>
      <div className="card-arrow">
        <i className="fi fi-rr-angle-right"></i>
      </div>
    </div>
  );
}

export default Card;
