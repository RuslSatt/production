import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesPage.module.scss';

const ArticlesPage = () => {
	const { t } = useTranslation();

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<p>{t('ArticlesPage')}</p>
		</div>
	);
};

export default ArticlesPage;
