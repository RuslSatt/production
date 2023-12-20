import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { SwitchTheme } from 'widgets/SwitchTheme';
import { useTranslation } from 'react-i18next';
import { LangSwitch } from 'widgets/LangSwitch';
import { Button, Modal } from 'rs-custom-ui';
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
			<div>
				<ButtonLink data-testid='link-main' to='/'>
					{t('Main')}
				</ButtonLink>
				<ButtonLink data-testid='link-about' to='/about'>
					{t('About')}
				</ButtonLink>
			</div>
			<Button label='Войти' onClick={handleModalOpen} />
			<Modal isOpen={isOpen} onClose={handleModalOpen}>
				{t('This is a modal window')}
			</Modal>
		</nav>
	);
};

export { NavBar };
