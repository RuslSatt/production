import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './Sidebar.module.scss';

export const Sidebar = () => {
	const { t } = useTranslation();

	const [collapsed, setCollapsed] = useState(false);

	const handleToggle = () => {
		setCollapsed((value) => !value);
	};

	return (
		<div className={classNames(style.Sidebar, [], { [style.collapsed]: collapsed })}>
			<button type='button' onClick={handleToggle}>
				{t('Toggle')}
			</button>
		</div>
	);
};
