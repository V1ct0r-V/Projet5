import "../Collapse/Collapse.scss";
import { useState } from "react";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse__div">
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <p>{title}</p>
        <span>{isOpen ? "˅" : "˄"}</span>
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
