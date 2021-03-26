import React from 'react';
import { Button, View } from 'react-native';
import { MainMenuHeader } from '../headers/headers';


const MainView = ({navigation}) => {
	return (
		<View>
			<MainMenuHeader title="Explore"/>
			<Button title="gogo" onPress={()=> navigation.navigate('results')}/>
		</View>
	);
};

export default MainView;
