import React, { useState } from 'react';
import { Button, Input } from 'rs-custom-ui';
import { useTranslation } from 'react-i18next';
import style from './LoginForm.module.scss';

export const LoginForm = () => {
	const { t } = useTranslation();

	const [valueText, setValueText] = useState('');
	const [valuePass, setValuePass] = useState('');

	const onChangeText = (val: string) => {
		setValueText(val);
	};

	const onChangePass = (val: string) => {
		setValuePass(val);
	};

	return (
		<div className={style.LoginForm}>
			<Input value={valueText} onChange={onChangeText} type='text' />
			<Input value={valuePass} onChange={onChangePass} type='password' />
			<Button label={t('Войти')} />
		</div>
	);
};
