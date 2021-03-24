import { getGenericPassword, setGenericPassword } from 'react-native-keychain';
import { randomString } from './string';


export async function getOrCreateKey(): Promise<string> {
	try {
		let credentials = await getGenericPassword();
		if (credentials) {
			return credentials.password;
		} else {
			let newPassword = randomString(48);
			await setGenericPassword('userkey', newPassword);
			return newPassword;
		}
	} catch (error) {
		let newPassword = randomString(48);
		await setGenericPassword('userkey', newPassword);
		return newPassword;
	}
}
