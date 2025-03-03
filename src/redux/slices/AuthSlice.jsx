import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
	name: "auth",
	initialState: {
		authUser: null,
		isAuth: false,
	},
	reducers: {
		setAuthUser: (state, action) => {
			state.authUser = action.payload;
		},
		setIsAuthUser: (state, action) => {
			state.authUser = action.payload;
		},
	},
});

export const { setAuthUser, setIsAuthUser } = AuthSlice.actions;
export default AuthSlice.reducer;
