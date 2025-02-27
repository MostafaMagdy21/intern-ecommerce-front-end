import ClothingSlider from "../sharedComponents/ClothingSlider";
import BestSlider from "../sharedComponents/BestSlider";
import Card1 from "./Card/Card1";
import Mainslick from "../sharedComponents/HomeSlick";
import HomeCard from "../sharedComponents/HomeCard";
import CardSlider from "./Card-Slider/CardSlider";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Mainslick/>
        <CardSlider />
      </div>
    </>
  );
};

export default Home;
