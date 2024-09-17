import "../Collapse/Collapse.scss";
import { useState } from "react";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse__div">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <p className="collapse__title">{title}</p>
        <span className="collapse__button">
          {isOpen ? (
            <i className="fa-solid fa-chevron-up" id="ouvrir"></i>
          ) : (
            <i className="fa-solid fa-chevron-up" id="fermer"></i>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}
