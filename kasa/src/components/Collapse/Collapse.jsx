import "../Collapse/Collapse.scss";
import { useState } from "react";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  return (
    <div className="collapse__div">
      <div
        className="collapse__header"
        onClick={() => {
          setIsOpen(!isOpen);
          setFirstTime(false);
        }}
      >
        <p className="collapse__title">{title}</p>
        <span className="collapse__button">
          <i
            className="fa-solid fa-chevron-up"
            id={
              firstTime === false ? (isOpen ? "ouvrir" : "fermer") : undefined
            }
          ></i>
        </span>
      </div>
      {firstTime === false && (
        <div
          className={`collapse__content ${isOpen ? "extended" : "collapsed"}`}
        >
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
