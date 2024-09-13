import "./index.scss";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Card from "../../components/Card/Card.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner id={1} />
      <Card />
      <Footer />
    </>
  );
}

export default App;
