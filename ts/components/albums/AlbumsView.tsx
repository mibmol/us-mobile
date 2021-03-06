import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { MainMenuHeader } from '../headers/headers';

const AlbumsView = () => {
	return (
		<View>
			<MainMenuHeader title="Albums" />
			<Text style={tailwind('text-white font-bold text-xl')}>albums</Text>
		</View>
	);
};

export default AlbumsView;
