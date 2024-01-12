import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
	IS_EMPTY = 'Поле не заполнено',
	SERVER = 'Ошибка сервера',
	NO_DATA = 'Данные отсутствуют'
}

export interface Profile {
	name?: string;
	lastName?: string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: string;
	username?: string;
	avatar?: string;
}

export interface ProfileSchema {
	data?: Profile;
	form?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
	validateErrors?: ValidateProfileError[];
}
