import { Counter } from 'entities/counter';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h1>{t('Main Page')}</h1>
			<Counter />
		</div>
	);
};

export default MainPage;
