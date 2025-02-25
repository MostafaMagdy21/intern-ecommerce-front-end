import ClothingSlider from "../sharedComponents/ClothingSlider";
import BestSlider from "../sharedComponents/BestSlider";
import Card1 from "./Card/Card1";

const Home = () => {
  return (
    <>
      <div className="Home">
      <Card1/>
        <br></br>
        <ClothingSlider />
        <br></br>
        <BestSlider />
        <br></br>
      </div>
    </>
  );
};

export default Home;
