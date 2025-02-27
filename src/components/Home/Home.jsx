import ClothingSlider from "../sharedComponents/ClothingSlider";
import BestSlider from "../sharedComponents/BestSlider";
import Card1 from "./Card/Card1";
import Mainslick from "../sharedComponents/HomeSlick";
import HomeCard from "../sharedComponents/HomeCard";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Mainslick/>
      <Card1/>
       
        <ClothingSlider />
        <HomeCard/>
       
        <BestSlider />
       
        
      </div>
    </>
  );
};

export default Home;
