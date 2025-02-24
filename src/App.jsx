import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Routing";
import SubNavbar from "./components/sharedComponents/SubNavbar";
import TopNavbar from "./components/sharedComponents/TopNavbar";
import Footer from "./components/sharedComponents/Footer";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
        <SubNavbar />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
