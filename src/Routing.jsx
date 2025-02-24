import { Route, Routes } from "react-router-dom";
import AllProducts from './components/sharedComponents/Allproducts';
import CategoryProducts from './components/sharedComponents/CategoryProducts'
import SingleProduct from './components/sharedComponents/SingleProduct';


export const Routing = () => {
	return (
		<Routes>
			<Route path="/login" element={<h1>Login</h1>} />
			<Route path="/signup" element={<h1>Sign Up</h1>} />
			<Route path="/" element={<h1>Home</h1>} />
			<Route path="/allproducts" element={<><AllProducts/></>} />
			<Route path="/product/:id" element={<SingleProduct />} />
			<Route path="/CategoryProducts" element={<><CategoryProducts/></>} />
			<Route path="/about" element={<h1>About</h1>} />
			<Route path="/contact" element={<h1>Contact</h1>} />
			<Route path="*" element={<h1>Error Page</h1>} />
		</Routes>
	);
};
