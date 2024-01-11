import { Profile } from 'entities/Profile/model/types/profile';
import React, { memo } from 'react';
import { Input } from 'rs-custom-ui';
import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import style from './ProfileCard.module.scss';

export interface ProfileCardProps {
	data?: Profile;
	readonly?: boolean;
	onChangeName?: (value?: string) => void;
	onChangeLastName?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeCurrency?: (value?: Currency) => void;
	onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
	const { t } = useTranslation();
	const {
		data,
		readonly,
		onChangeName,
		onChangeLastName,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeCurrency,
		onChangeCountry
	} = props;

	return (
		<div className={style.card}>
			<label className={style.label} htmlFor='name'>
				{t('Name')}
			</label>
			<Input id='name' onChange={onChangeName} readOnly={readonly} value={data?.name || ''} />
			<label className={style.label} htmlFor='lastName'>
				{t('Last name')}
			</label>
			<Input id='lastName' onChange={onChangeLastName} readOnly={readonly} value={data?.lastName || ''} />
			<label className={style.label} htmlFor='age'>
				{t('Age')}
			</label>
			<Input id='age' onChange={onChangeAge} type='number' readOnly={readonly} value={data?.age || ''} />
			<label className={style.label} htmlFor='city'>
				{t('City')}
			</label>
			<Input id='city' onChange={onChangeCity} readOnly={readonly} value={data?.city || ''} />
			<label className={style.label} htmlFor='username'>
				{t('Username')}
			</label>
			<Input id='username' onChange={onChangeUsername} readOnly={readonly} value={data?.username || ''} />
			<label className={style.label} htmlFor='currency'>
				{t('Currency')}
			</label>
			<CurrencySelect disabled={readonly} value={data?.currency} onChange={onChangeCurrency} />
			<CountrySelect disabled={readonly} value={data?.country} onChange={onChangeCountry} />
		</div>
	);
});
