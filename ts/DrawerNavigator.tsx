import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FC } from 'react';
import SearchView from './search/SearchView';
import AlbumsView from './albums/AlbumsView'


const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
	return (
		<Drawer.Navigator initialRouteName="search">
			<Drawer.Screen name="search" component={SearchView} />
			<Drawer.Screen name="albums" component={AlbumsView} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
