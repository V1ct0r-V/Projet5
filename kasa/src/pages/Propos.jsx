import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";
import Footer from "../components/Footer/Footer.jsx";
import collapseData from "../data/collapse.json";
import "../pages/Home/index.scss";

export default function Propos() {
  const collapse = collapseData;
  return (
    <>
      <Header />
      <section className="a-propos__section">
        <Banner id={2} />
        {collapse.map((prop) => (
          <Collapse key={prop.id} title={prop.title} content={prop.content} />
        ))}
      </section>
      <Footer />
    </>
  );
}
