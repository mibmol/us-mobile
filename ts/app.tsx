import React, { FC, Fragment, useState } from 'react';
import 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import { connect, Provider as ReduxProvider } from 'react-redux';
import getStore, { RootState } from './redux/store';
import { enableScreens } from 'react-native-screens';
import { useOnce } from './utils/hooks';

enableScreens();

type IAppProps = {} & RootState;

const App: FC<IAppProps> = ({ userSettings }) => {
	const { hidden, backgroundColor } = userSettings.statusBar;
	return (
		<Fragment>
			<StatusBar hidden={hidden} backgroundColor={backgroundColor} />
			<NavigationContainer theme={userSettings.theme}>
				<MainNavigator />
			</NavigationContainer>
		</Fragment>
	);
};

const ConectedApp: FC<any> = connect((state: RootState) => ({
	userSettings: state.userSettings,
}))(App);

export const AppWrapper: FC = () => {
	const [store, setStore] = useState({ store: null, persistor: null });

	useOnce(() => {
		getStore().then((s) => setStore(s));
	});

	if (!store.store) {
		return <View></View>;
	}
	return (
		<ReduxProvider store={store.store}>
			<PersistGate persistor={store.persistor}>
				<ConectedApp />
			</PersistGate>
		</ReduxProvider>
	);
};
