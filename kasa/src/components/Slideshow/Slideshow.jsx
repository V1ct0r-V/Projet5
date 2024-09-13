import "./Slideshow.scss";
import { useState } from "react";
import logementData from "../../data/logements.json";

export default function Slideshow({ id }) {
  const logement = logementData.find((log) => log.id === id);
  const [count, setCount] = useState(0);
  const nombre = logement.pictures.length;
  return (
    <div className="slideshow">
      <span
        className="previous__picture"
        onClick={() => setCount(count === 0 ? nombre - 1 : count - 1)}
      >
        {"<"}
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
        {">"}
      </span>
      <p>
        {count + 1}/{nombre}
      </p>
    </div>
  );
}
