import React, { memo, ReactElement } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import {
	DiscIcon,
	MicrophoneIcon,
	MusicIcon,
	PlaylistIcon,
	SearchIcon,
	SettingsIcon,
} from './icons';
import { randomInt } from '../utils/number';
import tailwind from 'tailwind-rn';
import { capitalize } from '../utils/string';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Navigation } from '../redux/navigationReducers';
import { useOnce } from '../utils/hooks';
import ArtistsView from './artists/ArtistsView';
import { HLine } from './common/Line';
import ExploreNavigator from './explore/ExploreNavigator';
import AlbumsView from './albums/AlbumsView';
import SongsView from './songs/SongsView';
import PlaylistsView from './playlists/PlaylistsView';
import RecentlyView from './recently/RecentlyView';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
	return (
		<Drawer.Navigator
			initialRouteName="search"
			drawerContent={({ navigation }) => <DrawerContent navigation={navigation} />}
		>
			<Drawer.Screen name="explore" component={ExploreNavigator} />
			<Drawer.Screen name="albums" component={AlbumsView} />
			<Drawer.Screen name="artists" component={ArtistsView} />
			<Drawer.Screen name="songs" component={SongsView} />
			<Drawer.Screen name="playlists" component={PlaylistsView} />
			<Drawer.Screen name="recentlyadded" component={RecentlyView} />
		</Drawer.Navigator>
	);
};

const DrawerContent: FC<any> = memo(({ navigation }) => {
	const dispatch = useDispatch();
	const { drawerMenuSelected } = useSelector<RootState, Navigation>(
		(state) => state.navigation,
	);

	useOnce(() => {
		navigation.navigate(drawerMenuSelected);
	});

	const onSelect = (route) => {
		return () => {
			dispatch({ type: 'SET_DRAWER_SELECTED', value: route });
			navigation.navigate(route);
		};
	};

	return (
		<View>
			<View style={tailwind('flex flex-row m-3')}>
				<Text style={tailwind('text-gray-200 text-2xl font-bold')}>US</Text>
				<Text style={tailwind('text-gray-400 ml-2 mb-1 self-end')}>Music player</Text>
			</View>
			<Text style={tailwind('text-white font-bold ml-3 my-2')}>Colections</Text>
			<DrawerItem
				icon={<SearchIcon stroke="white" strokeWidth={1.8} />}
				text="explore"
				onPress={onSelect('explore')}
				selected={drawerMenuSelected === 'explore'}
			/>
			<DrawerItem
				icon={<DiscIcon stroke="white" strokeWidth={1.5} />}
				text="albums"
				onPress={onSelect('albums')}
				selected={drawerMenuSelected === 'albums'}
			/>
			<DrawerItem
				icon={<MicrophoneIcon stroke="white" strokeWidth={1.5} />}
				text="artists"
				onPress={onSelect('artists')}
				selected={drawerMenuSelected === 'artists'}
			/>
			<DrawerItem
				icon={<MusicIcon stroke="white" strokeWidth={1.6} />}
				text="songs"
				onPress={onSelect('songs')}
				selected={drawerMenuSelected === 'songs'}
			/>
			<Text style={tailwind('text-white font-bold ml-3 my-3')}>Favorites</Text>
			<DrawerItem
				icon={<PlaylistIcon width={20} height={20} stroke="white" strokeWidth={1} />}
				text="playlists"
				count={randomInt(300)}
				onPress={onSelect('playlists')}
				selected={drawerMenuSelected === 'playlists'}
			/>
			<DrawerItem
				icon={<DiscIcon stroke="white" />}
				text="recently added"
				count={randomInt(300)}
				onPress={onSelect('recentlyadded')}
				selected={drawerMenuSelected === 'recentlyadded'}
			/>
			<HLine margin={10} />
			<DrawerItem
				icon={<SettingsIcon stroke="white" />}
				text="settings"
				onPress={() => navigation.navigate('settings')}
				selected={drawerMenuSelected === 'settings'}
			/>
		</View>
	);
});

type ItemProps = {
	icon?: ReactElement;
	text: string;
	count?: number;
	selected?: boolean;
	onPress: () => void;
};
const DrawerItem: FC<ItemProps> = ({ icon, text, count, selected, onPress }) => (
	<Pressable
		onPress={onPress}
		style={[
			tailwind('flex flex-row justify-between items-center py-3 pl-3 pr-5'),
			selected && tailwind('border-l-2 border-white bg-white bg-opacity-10'),
		]}
		android_ripple={{ color: 'gray' }}
	>
		<View style={tailwind('flex flex-row items-center justify-center')}>
			{icon && <View>{icon}</View>}
			<Text style={tailwind('text-white text-base ml-4')}>{capitalize(text)}</Text>
		</View>
		{count && <Text style={{ color: '#888888', fontSize: 12 }}>{count}</Text>}
	</Pressable>
);

export default DrawerNavigator;
