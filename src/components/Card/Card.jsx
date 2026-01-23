import './Card.css';

function Card({ name, description, image }) {
  return (
    <div className="card">
      <div className="card-photo-wrapper">
        <div className="deco-shape deco-shape-1"></div>
        <div className="deco-shape deco-shape-2"></div>
        <img src={image} alt={name} className="card-photo" />
      </div>
      <h1 className="card-title">{name}</h1>
      <p className="card-description">{description}</p>
      <div className="card-socials">
        <a href="#"><i className="fi fi-rr-basketball"></i></a>
        <a href="#"><i className="fi fi-brands-twitter"></i></a>
        <a href="#"><i className="fi fi-brands-instagram"></i></a>
        <a href="#"><i className="fi fi-brands-youtube"></i></a>
      </div>
    </div>
  );
}

export default Card;
