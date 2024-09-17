import "./Button.scss";

export default function Button({ prop }) {
  return (
    <div className="button__container">
      {prop.map((tag, index) => (
        <p className="button" key={index}>
          {tag}
        </p>
      ))}
    </div>
  );
}
