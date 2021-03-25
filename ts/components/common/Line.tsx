import React, { FC } from 'react';
import { View } from 'react-native';

const lineStyles = {
	height: 1,
	width: '100%',
};
export const HLine: FC<{ color?: string; margin?: number }> = ({
	color = '#222222',
	margin = 0,
}) => <View style={{ ...lineStyles, backgroundColor: color, marginVertical: margin }} />;
