import carte from "../../data/logements.json";
import "../Card/Card.scss";

function Cart() {
  const listItems = carte.map((carte) => (
    <figure className="carte" key={carte.id}>
      <a href={`/fiche-logement/${carte.id}`}>
        <img src={carte.cover} alt={carte.title} />
        <p>{carte.title}</p>
      </a>
    </figure>
  ));
  return <section className="gallery">{listItems}</section>;
}

export default Cart;
