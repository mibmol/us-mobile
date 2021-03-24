import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

const SearchView = () => {
	return (
		<View>
			<Text style={tailwind('text-white')}>search</Text>
		</View>
	);
};

export default SearchView;
