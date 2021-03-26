import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

const ResultsView = () => {
	return (
		<View>
			<Text style={tailwind('text-white')}>Search results</Text>
		</View>
	);
};

export default ResultsView;
