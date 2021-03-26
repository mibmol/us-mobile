import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainView from './MainView';
import ResultsView from './ResultsView';

const Stack = createStackNavigator();

const ExploreNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="main"
				component={MainView}
				options={{ header: () => null }}
			/>
			<Stack.Screen name="results" component={ResultsView} />
		</Stack.Navigator>
	);
};

export default ExploreNavigator;
