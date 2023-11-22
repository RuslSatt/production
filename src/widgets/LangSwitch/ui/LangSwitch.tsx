import React from 'react';
import { useTranslation } from 'react-i18next';

export const LangSwitch = () => {
	const { t, i18n } = useTranslation();

	const handleClick = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return <button onClick={handleClick}>{t('Lang')}</button>;
};
