import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const PageError = () => {
	const { t } = useTranslation();

	const handlerClick = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div>
			<h1>{t('Ошибка')}</h1>
			<Button onClick={handlerClick}>{t('Обновить страницу')}</Button>
		</div>
	);
};
