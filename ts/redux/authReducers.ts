import { Reducer } from "redux";

// actions
export const login = (userData) => ({
   type: 'LOGIN',
   data: userData,
});

export const logout = () => ({
   type: 'LOGOUT',
});

export type AuthInfo = {
	loggedIn: boolean,
	data: any,
}

const initialState: AuthInfo = {
	loggedIn: false,
	data: null,
};

export const authInfo: Reducer<AuthInfo> = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { loggedIn: true, data: action.value };
		case 'LOGOUT':
			return initialState;
		default:
			return state;
	}
};
