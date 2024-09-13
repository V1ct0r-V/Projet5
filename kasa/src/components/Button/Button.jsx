import "./Button.scss";

export default function Button({ prop }) {
  return (
    <div className="button__container">
      {prop.map((tag) => (
        <p className="button">{tag}</p>
      ))}
    </div>
  );
}
