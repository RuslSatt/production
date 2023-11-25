import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export function LangSwitch() {
	const { t, i18n } = useTranslation();

	const handleClick = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return <Button onClick={handleClick}>{t('Lang')}</Button>;
}
