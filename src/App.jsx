import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Routing";
import SubNavbar from "./components/sharedComponents/SubNavbar";
import TopNavbar from "./components/sharedComponents/TopNavbar";

function App() {
	return (
		<BrowserRouter>
			<Routing />
			{/* <TopNavbar	/> */}
			{/* <SubNavbar />
      <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
