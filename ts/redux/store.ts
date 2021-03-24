import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore, Store } from 'redux';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { getOrCreateKey } from '../utils/encryption';
import { AuthInfo, authInfo } from './authReducers';
import { UserSettings, userSettings } from './userSettingReducers';

export type RootState = {
	authInfo: AuthInfo;
	userSettings: UserSettings;
};

export type StoreInfo = { store: Store<RootState>; persistor: Persistor };

export default async function getStore(): Promise<StoreInfo> {
	const key = await getOrCreateKey();

	const reducers = persistReducer<RootState>(
		{
			key: 'root',
			storage: AsyncStorage,
			transforms: [
				encryptTransform({
					secretKey: key,
					onError: (e) => console.error('On encryptor', e),
				}),
			],
		},
		combineReducers({
			authInfo,
			userSettings,
		}),
	);
	const store = createStore(reducers);
	const persistor = persistStore(store);

	return { store, persistor };
}
