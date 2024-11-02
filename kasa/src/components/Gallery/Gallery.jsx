import "./Gallery.scss";
import { useState } from "react";
import logementData from "../../data/logements.json";

export default function Gallery({ id }) {
  const logement = logementData.find((log) => log.id === id);
  const [count, setCount] = useState(0);
  const nombre = logement.pictures.length;
  if (nombre > 1) {
    return (
      <div className="gallery">
        <span
          className="previous__picture"
          onClick={() => setCount(count === 0 ? nombre - 1 : count - 1)}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </span>
        <img
          className="active__picture"
          src={logement.pictures[count]}
          alt="Logement"
        />
        <span
          className="next__picture"
          onClick={() => setCount(count === nombre - 1 ? 0 : count + 1)}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p>
          {count + 1}/{nombre}
        </p>
      </div>
    );
  } else {
    return (
      <div className="gallery">
        <img
          className="active__picture"
          src={logement.pictures[count]}
          alt="Logement"
        />
      </div>
    );
  }
}
