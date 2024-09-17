import "../Notation/Notation.scss";

export default function Notation({ note }) {
  let etoiles = [];

  // Boucle pour générer les étoiles
  for (let i = 1; i <= 5; i++) {
    if (i <= note) {
      etoiles.push(
        <span key={i}>
          <i className="fa-solid fa-star" id="rouge"></i>
        </span>
      );
    } else {
      etoiles.push(
        <span key={i}>
          <i className="fa-solid fa-star" id="grise"></i>
        </span>
      );
    }
  }

  return <div className="notation">{etoiles}</div>;
}
