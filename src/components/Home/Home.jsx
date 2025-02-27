
import Mainslick from "../sharedComponents/HomeSlick";
import CardSlider from "./Card-Slider/CardSlider";
import Sidebar from "./Side/SideBar";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Mainslick/>
        <CardSlider />
      </div>
      <Sidebar/>
    </>
  );
};

export default Home;
