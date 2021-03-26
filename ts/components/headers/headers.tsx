import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FC, memo } from 'react';
import { Pressable, View, Text } from 'react-native';
import tailwind from 'tailwind-rn';
import { MenuIcon } from '../icons';

export type IMenuHeaderProps = {
	title: string;
};

const MenuButton: FC<{ onPress: () => void }> = ({ onPress }) => (
	<Pressable
		onPress={onPress}
		android_ripple={{ color: 'gray', radius: 22 }}
		style={tailwind('flex flex-row w-16 rounded-full p-3 items-center justify-center')}
	>
		<MenuIcon stroke="#ffffff" width={26} height={26} />
	</Pressable>
);

export const MainMenuHeader: FC<IMenuHeaderProps> = memo(({ title }) => {
	const navigation = useNavigation<any>();

	const leftButtonAction = useCallback(() => navigation.openDrawer(), [title]);

	return (
		<View style={tailwind('flex flex-row items-center py-1')}>
			<MenuButton onPress={leftButtonAction} />
			<Text style={tailwind('text-white text-lg font-bold')}>{title}</Text>
		</View>
	);
});
