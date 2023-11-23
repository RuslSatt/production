import React from 'react';
import { classNames } from 'shared/lib/classNames';
import ButtonLink from 'shared/ui/ButtonLink/ButtonLink';
import { SwitchTheme } from 'widgets/SwitchTheme';
import { useTranslation } from 'react-i18next';
import { LangSwitch } from 'widgets/LangSwitch';
import style from './Navbar.module.scss';

const NavBar = () => {
	const { t } = useTranslation();

	return (
		<nav className={classNames(style.Nav, [])}>
			<SwitchTheme />
			<LangSwitch />
			<div>
				<ButtonLink to='/'>{t('Main')}</ButtonLink>
				<ButtonLink to='/about'>{t('About')}</ButtonLink>
			</div>
		</nav>
	);
};

export { NavBar };
