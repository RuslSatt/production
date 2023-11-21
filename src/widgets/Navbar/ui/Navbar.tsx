import React from 'react';
import { classNames } from 'shared/lib/classNames';
import ButtonLink from 'shared/ui/ButtonLink/ButtonLink';
import { SwitchTheme } from 'widgets/SwitchTheme';
import style from './Navbar.module.scss';

const NavBar = () => {
	return (
		<nav className={classNames(style.Nav, [])}>
			<SwitchTheme />
			<div>
				<ButtonLink to={`/`}>Main</ButtonLink>
				<ButtonLink to={`/about`}>About</ButtonLink>
			</div>
		</nav>
	);
};

export { NavBar };
