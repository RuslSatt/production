import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SwitchTheme } from 'widgets/SwitchTheme';
import { useTranslation } from 'react-i18next';
import { LangSwitch } from 'widgets/LangSwitch';
import { Button } from 'rs-custom-ui';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import style from './Navbar.module.scss';

const NavBar = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const [isOpen, setIsOpen] = useState(false);

	const handleModalOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	const handleLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, []);

	const authData = useSelector(getUserAuthData);

	if (authData) {
		return (
			<nav data-testid='navbar' className={classNames(style.Nav, [])}>
				<SwitchTheme />
				<LangSwitch />
				<Button label='Выйти' onClick={handleLogout} />
			</nav>
		);
	}

	return (
		<nav data-testid='navbar' className={classNames(style.Nav, [])}>
			<SwitchTheme />
			<LangSwitch />
			<Button label='Войти' onClick={handleModalOpen}></Button>
			{isOpen && (
				<LoginModal isOpen={isOpen} onClose={handleModalOpen}>
					{t('This is a modal window')}
				</LoginModal>
			)}
		</nav>
	);
};

export { NavBar };
