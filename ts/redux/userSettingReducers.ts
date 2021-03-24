import { Theme } from '@react-navigation/native';
import { ColorValue } from 'react-native';
import { Reducer } from 'redux';

export type UserSettings = {
	theme: Theme;
	statusBar: {
		hidden: boolean;
		backgroundColor: ColorValue;
	};
};

const DARK_THEME: Theme = {
	dark: true,
	colors: {
		primary: 'black',
		background: 'black',
		card: 'red',
		text: 'white',
		border: 'gray',
		notification: 'blue',
	},
};

const LIGHT_THEME: Theme = {
	dark: false,
	colors: {
		primary: 'white',
		background: 'white',
		card: 'red',
		text: 'black',
		border: 'gray',
		notification: 'blue',
	},
};

const initialState: UserSettings = {
	theme: DARK_THEME,
	statusBar: {
		hidden: false,
		backgroundColor: 'black',
	},
};

export const userSettings: Reducer<UserSettings> = (state = initialState, action) => {
	switch (action.type) {
		case 'SWITCH_THEME':
			return state.theme.dark
				? { ...state, theme: LIGHT_THEME }
				: { ...state, theme: DARK_THEME };
		case 'HIDE_STATUSBAR':
			return { ...state, statusBar: { ...state.statusBar, hidden: true } };
		case 'SHOW_STATUSBAR':
			return { ...state, statusBar: { ...state.statusBar, hidden: false } };
		default:
			return state;
	}
};
