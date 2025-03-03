import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { token } = useSelector((state) => state.user);
	let location = useLocation();

	if (!token) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return children;
};

export default ProtectedRoute;
