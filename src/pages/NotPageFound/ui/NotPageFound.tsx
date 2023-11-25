import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './NotPageFound.module.scss';

export const NotPageFound = () => {
	const { t } = useTranslation();

	return (
		<div className={classNames(style.NotPageFound)}>
			<h1>{t('Page not found')}</h1>
		</div>
	);
};
