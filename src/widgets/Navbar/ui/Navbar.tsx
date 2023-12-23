import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SwitchTheme } from 'widgets/SwitchTheme';
import { useTranslation } from 'react-i18next';
import { LangSwitch } from 'widgets/LangSwitch';
import { Button } from 'rs-custom-ui';
import { LoginModal } from 'features/AuthByUsername';
import style from './Navbar.module.scss';

const NavBar = () => {
	const { t } = useTranslation();

	const [isOpen, setIsOpen] = useState(false);

	const handleModalOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	return (
		<nav data-testid='navbar' className={classNames(style.Nav, [])}>
			<SwitchTheme />
			<LangSwitch />
			<Button label='Войти' onClick={handleModalOpen} />
			<LoginModal isOpen={isOpen} onClose={handleModalOpen}>
				{t('This is a modal window')}
			</LoginModal>
		</nav>
	);
};

export { NavBar };
