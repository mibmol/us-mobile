import { Reducer } from 'redux';

export type Navigation = {
	drawerMenuSelected: string;
};

const initialState: Navigation = {
	drawerMenuSelected: 'explore',
};

export const navigation: Reducer<Navigation> = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_DRAWER_SELECTED':
			return { ...state, drawerMenuSelected: action.value };
		default:
			return state;
	}
};
