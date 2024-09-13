import "../Banner/Banner.scss";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import banniereData from "../../data/banniere.json";

function Banner({ id }) {
  const banniere = banniereData.find((ban) => ban.id === id);

  if (!banniere) {
    return <p>Bannière introuvable</p>;
  }

  let image = [];
  if (banniere.id === 1) {
    image = image1;
  } else if (banniere.id === 2) {
    image = image2;
  }

  return (
    <section className="banner">
      <img src={image} alt={banniere.description} />
      <h1 className="titre">{banniere.titre}</h1>
    </section>
  );
}

export default Banner;
