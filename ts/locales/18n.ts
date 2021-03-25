import { getLocales } from 'react-native-localize';
import at from 'lodash/at';

function getUserLocaleCode(): string {
	const locale = getLocales()[0];
	return locale.languageCode;
}

function loadTranslations(languageCode: string): any {
	try {
		let translations = require(`./${languageCode}.json`);
		if (!translations) {
			translations = require('./en.json');
			return translations;
		}
		return translations;
	} catch (error) {
		let translations = require('./en.json');
		return translations;
	}
}

export const USER_LANGUAGE: string = getUserLocaleCode();

const translations = loadTranslations(USER_LANGUAGE);

export function t(key: string): string {
	let trans = at<string>(translations, key);
	console.log('TTTTTTTTTTTT', trans);

	return trans[0] || key;
}
