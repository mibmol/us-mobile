import React from 'react'
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

const AlbumsView = () => {
	return (
		<View>
			<Text style={tailwind('text-white font-bold text-xl')}>albums</Text>
		</View>
	);
};

export default AlbumsView;
