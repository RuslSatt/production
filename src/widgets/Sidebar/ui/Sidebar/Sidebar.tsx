import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from 'shared/ui/ButtonLink/ButtonLink';
import { Button } from 'rs-custom-ui';
import style from './Sidebar.module.scss';

export const Sidebar = () => {
	const { t } = useTranslation();

	const [collapsed, setCollapsed] = useState(false);

	const handleToggle = () => {
		setCollapsed((value) => !value);
	};

	return (
		<div data-testid='sidebar' className={classNames(style.Sidebar, [], { [style.collapsed]: collapsed })}>
			<div>
				<Button data-testid='toggle' label={collapsed ? '>' : '<'} onClick={handleToggle} />
			</div>
			<div className={style.links}>
				<ButtonLink data-testid='link-main' to='/'>
					{t('Main')}
				</ButtonLink>
				<ButtonLink data-testid='link-about' to='/about'>
					{t('About')}
				</ButtonLink>
			</div>
		</div>
	);
};
