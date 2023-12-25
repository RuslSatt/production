import React, { memo, useCallback, useState } from 'react';
import { Button, Input } from 'rs-custom-ui';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import style from './LoginForm.module.scss';

export const LoginForm = memo(() => {
	const { t } = useTranslation();

	const { error, isLoading } = useSelector(getLoginState);
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

	const onClickLogin = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);

	return (
		<div className={style.LoginForm}>
			{error && <div>{error}</div>}
			<Input placeholder='Name' value={username} onChange={onChangeUsername} type='text' />
			<Input placeholder='Password' value={password} onChange={onChangePassword} type='password' />
			<Button disabled={isLoading} onClick={onClickLogin} label={t('Войти')} />
		</div>
	);
});
