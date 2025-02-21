import { Route, Routes } from "react-router-dom";

export const Routing = () => {
	return (
		<Routes>
			<Route path="/login" element={<h1>Login</h1>} />
			<Route path="/signup" element={<h1>Sign Up</h1>} />
			<Route path="/" element={<h1>Home</h1>} />
			<Route path="/about" element={<h1>About</h1>} />
			<Route path="/contact" element={<h1>Contact</h1>} />
			<Route path="*" element={<h1>Error Page</h1>} />
		</Routes>
	);
};
