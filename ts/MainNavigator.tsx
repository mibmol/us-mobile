import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="drawerMenu" >
			<Stack.Screen
				name="drawerMenu"
				component={DrawerNavigator}
				options={{ header: () => null }}
			/>
		</Stack.Navigator>
	);
};

export default MainNavigator;
