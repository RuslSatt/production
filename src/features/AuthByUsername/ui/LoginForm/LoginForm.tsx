import React, { memo, useCallback, useState } from 'react';
import { Button, Input } from 'rs-custom-ui';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getUsername } from 'features/AuthByUsername/model/selectors/getUsername/getUsername';
import { getPassword } from 'features/AuthByUsername/model/selectors/getPassword/getPassword';
import style from './LoginForm.module.scss';

export const LoginForm = memo(() => {
	const { t } = useTranslation();

	const username = useSelector(getUsername);
	const password = useSelector(getPassword);

	const dispatch = useDispatch();

	const onChangeUsername = useCallback(
		(val: string) => {
			dispatch(loginActions.setUsername(val));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(val: string) => {
			dispatch(loginActions.setPassword(val));
		},
		[dispatch]
	);

	return (
		<div className={style.LoginForm}>
			<Input placeholder='Name' value={username} onChange={onChangeUsername} type='text' />
			<Input placeholder='Password' value={password} onChange={onChangePassword} type='password' />
			<Button label={t('Войти')} />
		</div>
	);
});
