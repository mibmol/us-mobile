import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

const SettingsView = () => {
	return (
		<View>
			<Text style={tailwind('text-white')}>Settings</Text>
		</View>
	);
};

export default SettingsView;
