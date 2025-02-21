import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./Routing";

function App() {
	return (
		<BrowserRouter>
			<Routing />
			{/* <SubNavbar />
      <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
