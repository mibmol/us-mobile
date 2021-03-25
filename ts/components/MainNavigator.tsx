import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import SettingsView from './settings/SettingsView';

const Stack = createStackNavigator();

const MainNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="drawerMenu">
			<Stack.Screen
				name="drawerMenu"
				component={DrawerNavigator}
				options={{ header: () => null }}
			/>
			<Stack.Screen name="settings" component={SettingsView} />
		</Stack.Navigator>
	);
};

export default MainNavigator;
