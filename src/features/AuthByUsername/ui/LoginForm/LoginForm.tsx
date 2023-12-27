import React, { memo, useCallback } from 'react';
import { Button, Input } from 'rs-custom-ui';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import style from './LoginForm.module.scss';

const initialReducers: ReducersList = {
	loginForm: loginReducer
};

const LoginForm = memo(() => {
	const { t } = useTranslation();

	const error = useSelector(getLoginError);
	const isLoading = useSelector(getLoginIsLoading);
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);

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
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={style.LoginForm}>
				{error && <div>{error}</div>}
				<Input placeholder='Name' value={username} onChange={onChangeUsername} type='text' />
				<Input placeholder='Password' value={password} onChange={onChangePassword} type='password' />
				<Button disabled={isLoading} onClick={onClickLogin} label={t('Войти')} />
			</div>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
